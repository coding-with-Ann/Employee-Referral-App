import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import referralsRouter from './routes/referrals';
import { jobs } from '../data/jobsdescription';
import { connectMongo } from './db/mongo';

const app = express();
app.set('trust proxy', 1);

const corsOrigins = (process.env.CORS_ORIGINS || 'http://localhost:3000')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet());
app.use(cors({
  origin: corsOrigins,
  credentials: false
}));
app.use('/uploads', express.static(path.resolve(process.cwd(), 'uploads')));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/referrals', referralsRouter);

app.get('/api/jds', (_req, res) => {
  const positions = jobs.map((job) => ({
    id: job.id,
    title: job.title
  }));
  res.json({ positions });
});

app.get('/api/jds/:id', (req, res) => {
  const id = Number(req.params.id);
  const job = jobs.find((item) => item.id === id);
  if (!job) {
    return res.status(404).json({ message: 'JD not found.' });
  }
  return res.json({ job });
});

app.get('/api/skills', (req, res) => {
  const query = String(req.query.query || '').trim().toLowerCase();
  const positionId = Number(req.query.positionId || 0);

  const jobPool = Number.isFinite(positionId) && positionId > 0
    ? jobs.filter((job) => job.id === positionId)
    : jobs;

  const uniqueSkills = new Map<string, string>();
  jobPool.forEach((job) => {
    const allSkills = [...job.skills.nonNegotiable, ...job.skills.negotiable];
    allSkills.forEach((skill) => {
      const key = skill.toLowerCase();
      if (!uniqueSkills.has(key)) {
        uniqueSkills.set(key, skill);
      }
    });
  });

  const filtered = [...uniqueSkills.values()]
    .filter((skill) => (query ? skill.toLowerCase().includes(query) : true))
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 25);

  return res.json({ skills: filtered });
});

app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (err?.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ errors: [{ field: 'resume', message: 'Resume file exceeds the 5 MB limit.' }] });
  }
  if (err?.message === 'INVALID_FILE_TYPE') {
    return res.status(400).json({ errors: [{ field: 'resume', message: 'Unsupported file type.' }] });
  }
  return res.status(500).json({ message: 'Unexpected server error.' });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

const startServer = async () => {
  await connectMongo();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer().catch((error) => {
  console.error('Failed to start server', error);
  process.exit(1);
});
