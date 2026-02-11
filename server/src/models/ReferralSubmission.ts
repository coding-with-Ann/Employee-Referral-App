import { Schema, model } from 'mongoose';

const referralSubmissionSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    createdAt: { type: String, required: true },
    referrerName: { type: String, required: true },
    referrerEmployeeId: { type: String, required: true },
    candidateName: { type: String, required: true },
    candidateEmail: { type: String, required: true },
    candidatePhone: { type: String, required: true },
    candidateLocation: { type: String, required: true },
    candidateAddress: { type: String, required: true },
    candidateExperience: { type: String, required: true },
    positionId: { type: Number, required: true },
    positionTitle: { type: String, required: true },
    nonNegotiableSkills: { type: [String], default: [] },
    negotiableSkills: { type: [String], default: [] },
    whyGoodFit: { type: String, required: true },
    resumeFileName: { type: String, required: true },
    resumeFilePath: { type: String, required: true },
    resumeViewPath: { type: String, required: false },
    resumeDownloadPath: { type: String, required: false },
    resumeViewUrl: { type: String, required: false },
    resumeDownloadUrl: { type: String, required: false },
    resumeOriginalName: { type: String, required: true },
    resumeMimeType: { type: String, required: true },
    resumeSize: { type: Number, required: true }
  },
  {
    versionKey: false
  }
);

export const ReferralSubmissionModel = model('ReferralSubmission', referralSubmissionSchema);
