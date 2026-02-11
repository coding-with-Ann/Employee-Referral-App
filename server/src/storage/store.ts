import type { ReferralSubmission } from '../types.js';
import { ReferralSubmissionModel } from '../models/ReferralSubmission.js';

export const saveSubmission = async (submission: ReferralSubmission) => {
  const maxRecord = await ReferralSubmissionModel.findOne().sort({ id: -1 }).select({ id: 1 }).lean();
  const nextId = (maxRecord?.id ?? 0) + 1;
  const baseUrl = (process.env.PUBLIC_API_URL?.trim() || 'http://localhost:5000').replace(/\/+$/, '');
  const resumeViewPath = `/api/referrals/${nextId}/file`;
  const resumeDownloadPath = `/api/referrals/${nextId}/file?download=true`;
  const nextSubmission: ReferralSubmission = {
    ...submission,
    id: nextId,
    resumeViewPath,
    resumeDownloadPath,
    resumeViewUrl: `${baseUrl}${resumeViewPath}`,
    resumeDownloadUrl: `${baseUrl}${resumeDownloadPath}`
  };
  await ReferralSubmissionModel.create(nextSubmission);
};

export const listSubmissions = async (): Promise<ReferralSubmission[]> => {
  const rows = await ReferralSubmissionModel.find().sort({ id: -1 }).lean();
  return rows as unknown as ReferralSubmission[];
};

export const findSubmissionById = async (id: number): Promise<ReferralSubmission | null> => {
  const row = await ReferralSubmissionModel.findOne({ id }).lean();
  return row ? (row as unknown as ReferralSubmission) : null;
};

