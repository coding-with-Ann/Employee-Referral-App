import { Resend } from 'resend';

export interface SubmissionEmailInput {
  to: string;
  referrerName: string;
  candidateName: string;
  positionTitle: string;
  candidateExperience: string;
  nonNegotiableSkills: string[];
  negotiableSkills: string[];
}

export const sendSubmissionSummaryEmail = async (payload: SubmissionEmailInput): Promise<boolean> => {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return false;
  }

  const from = process.env.EMAIL_FROM?.trim() || 'onboarding@resend.dev';

  const requiredSkills = payload.nonNegotiableSkills.length > 0
    ? payload.nonNegotiableSkills.join(', ')
    : 'None';
  const otherSkills = payload.negotiableSkills.length > 0
    ? payload.negotiableSkills.join(', ')
    : 'None';

  const subject = `Referral Submitted: ${payload.positionTitle}`;
  const text = [
    'A referral form has been submitted successfully.',
    '',
    `Candidate: ${payload.candidateName}`,
    `Referrer: ${payload.referrerName}`,
    `Position: ${payload.positionTitle}`,
    `Work Experience: ${payload.candidateExperience}`,
    `Mandatory Skills: ${requiredSkills}`,
    `Other Skills: ${otherSkills}`
  ].join('\n');

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: payload.to,
    subject,
    text
  });

  if (error) {
    throw new Error(error.message);
  }

  return true;
};
