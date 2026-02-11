export interface ReferralSubmission {
  id?: number;
  createdAt: string;
  referrerName: string;
  referrerEmployeeId: string;
  candidateName: string;
  candidateEmail: string;
  candidatePhone: string;
  candidateLocation: string;
  candidateAddress: string;
  candidateExperience: string;
  positionId: number;
  positionTitle: string;
  nonNegotiableSkills: string[];
  negotiableSkills: string[];
  whyGoodFit: string;
  resumeFileName: string;
  resumeFilePath: string;
  resumeViewPath?: string;
  resumeDownloadPath?: string;
  resumeViewUrl?: string;
  resumeDownloadUrl?: string;
  resumeOriginalName: string;
  resumeMimeType: string;
  resumeSize: number;
}

export interface ValidationError {
  field: string;
  message: string;
}
