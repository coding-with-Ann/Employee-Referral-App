import nodemailer from 'nodemailer';

const parsePort = (raw: string | undefined, fallback: number) => {
  const value = Number(raw || '');
  return Number.isFinite(value) && value > 0 ? value : fallback;
};

const hasMailerConfig = () =>
  Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

const getTransporter = () => {
  const host = process.env.SMTP_HOST || '';
  const port = parsePort(process.env.SMTP_PORT, 587);
  const secure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true';
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASS || '';

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass }
  });
};

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
  if (!hasMailerConfig()) {
    return false;
  }

  const from = process.env.EMAIL_FROM || process.env.SMTP_USER || '';
  if (!from) {
    return false;
  }

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

  const transporter = getTransporter();
  await transporter.sendMail({
    from,
    to: payload.to,
    subject,
    text
  });

  return true;
};
