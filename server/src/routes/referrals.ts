import { Request, Router } from 'express';
import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import fs from 'fs/promises';
import { validatePayload, MAX_RESUME_SIZE } from '../utils/validate';
import { findSubmissionById, listSubmissions, saveSubmission } from '../storage/store';
import type { ReferralSubmission } from '../types';

const router = Router();

const uploadsDir = path.resolve(process.cwd(), 'uploads');

const storage = multer.diskStorage({
  destination: async (_req, _file, cb) => {
    await fs.mkdir(uploadsDir, { recursive: true });
    cb(null, uploadsDir);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${crypto.randomUUID()}${ext}`);
  }
});

const allowedMime = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/png',
  'image/jpeg'
]);

const allowedExt = new Set(['.pdf', '.doc', '.docx', '.png', '.jpg', '.jpeg']);

const upload = multer({
  storage,
  limits: { fileSize: MAX_RESUME_SIZE },
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowedMime.has(file.mimetype) || !allowedExt.has(ext)) {
      return cb(new Error('INVALID_FILE_TYPE'));
    }
    cb(null, true);
  }
});

const buildBaseUrl = (req: Request) => {
  const fromEnv = process.env.PUBLIC_API_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/+$/, '');
  return `${req.protocol}://${req.get('host')}`;
};

router.get('/', async (req, res) => {
  const submissions = await listSubmissions();
  const base = buildBaseUrl(req);
  const payload = submissions.map((submission) => ({
    ...submission,
    resumeViewUrl: `${base}${submission.resumeViewPath || `/api/referrals/${submission.id}/file`}`,
    resumeDownloadUrl: `${base}${submission.resumeDownloadPath || `/api/referrals/${submission.id}/file?download=true`}`
  }));
  res.json({ submissions: payload });
});

router.get('/:id/file', async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isFinite(id) || id <= 0) {
    return res.status(400).json({ message: 'Invalid submission id.' });
  }

  const submission = await findSubmissionById(id);
  if (!submission) {
    return res.status(404).json({ message: 'Submission not found.' });
  }

  const safeFileName = path.basename(submission.resumeFileName);
  const filePath = path.resolve(uploadsDir, safeFileName);

  try {
    await fs.access(filePath);
  } catch {
    return res.status(404).json({ message: 'Uploaded file not found.' });
  }

  const download = String(req.query.download || '').toLowerCase() === 'true';
  if (download) {
    return res.download(filePath, submission.resumeOriginalName);
  }

  res.setHeader('Content-Type', submission.resumeMimeType || 'application/octet-stream');
  res.setHeader('Content-Disposition', `inline; filename="${encodeURIComponent(submission.resumeOriginalName)}"`);
  return res.sendFile(filePath);
});

router.post('/', upload.single('resume'), async (req, res) => {
  const { errors, parsed } = validatePayload(req.body as Record<string, unknown>);
  const file = req.file;

  if (!file) {
    errors.push({ field: 'resume', message: 'Resume file is required.' });
  }

  if (file && file.size > MAX_RESUME_SIZE) {
    errors.push({ field: 'resume', message: 'Resume file exceeds the 5 MB limit.' });
  }

  if (errors.length > 0 || !parsed || !file) {
    if (file) {
      await fs.unlink(file.path).catch(() => undefined);
    }
    return res.status(400).json({ errors });
  }

  const submission: ReferralSubmission = {
    createdAt: new Date().toISOString(),
    ...parsed,
    resumeFileName: file.filename,
    resumeFilePath: `/uploads/${file.filename}`,
    resumeOriginalName: file.originalname,
    resumeMimeType: file.mimetype,
    resumeSize: file.size
  };

  await saveSubmission(submission);

  res.status(201).json({ message: 'Referral submitted successfully.' });
});

export default router;
