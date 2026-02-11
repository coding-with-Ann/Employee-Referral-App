import { findPosition } from './positions.js';
import { jobs } from '../../data/jobsdescription.js';
import type { ValidationError } from '../types.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[A-Za-z ]+$/;

export const MAX_RESUME_SIZE = 5 * 1024 * 1024;

export interface ParsedPayload {
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
}

const parseSkills = (raw: unknown): string[] => {
  if (typeof raw !== 'string') return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.map((item) => String(item).trim()).filter(Boolean);
    }
    return [];
  } catch {
    return [];
  }
};

const normalize = (value: string) => value.trim();

export const validatePayload = (body: Record<string, unknown>) => {
  const errors: ValidationError[] = [];

  const referrerName = normalize(String(body.referrerName || ''));
  const referrerEmployeeId = normalize(String(body.referrerEmployeeId || ''));
  const candidateName = normalize(String(body.candidateName || ''));
  const candidateEmail = normalize(String(body.candidateEmail || ''));
  const candidatePhone = normalize(String(body.candidatePhone || ''));
  const candidateLocation = normalize(String(body.candidateLocation || ''));
  const candidateAddress = normalize(String(body.candidateAddress || ''));
  const candidateExperience = normalize(String(body.candidateExperience || ''));
  const whyGoodFit = normalize(String(body.whyGoodFit || ''));

  const nonNegotiableSkills = parseSkills(body.nonNegotiableSkills);
  const negotiableSkills = parseSkills(body.negotiableSkills);

  const positionId = Number(body.positionId || 0);
  const position = Number.isFinite(positionId) ? findPosition(positionId) : undefined;

  if (!referrerName) {
    errors.push({ field: 'referrerName', message: 'Referrer name is required.' });
  } else if (!NAME_REGEX.test(referrerName)) {
    errors.push({ field: 'referrerName', message: 'Referrer name can contain only letters and spaces.' });
  }
  if (!referrerEmployeeId) errors.push({ field: 'referrerEmployeeId', message: 'Employee ID is required.' });

  if (!candidateName) {
    errors.push({ field: 'candidateName', message: 'Candidate name is required.' });
  } else if (!NAME_REGEX.test(candidateName)) {
    errors.push({ field: 'candidateName', message: 'Candidate name can contain only letters and spaces.' });
  }
  if (!candidateEmail || !EMAIL_REGEX.test(candidateEmail)) {
    errors.push({ field: 'candidateEmail', message: 'Invalid email address.' });
  }
  if (!candidatePhone) {
    errors.push({ field: 'candidatePhone', message: 'Candidate phone is required.' });
  } else {
    const digits = candidatePhone.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 12) {
      errors.push({ field: 'candidatePhone', message: 'Invalid phone number.' });
    }
  }
  if (!candidateLocation) errors.push({ field: 'candidateLocation', message: 'Candidate location is required.' });
  if (!candidateAddress) errors.push({ field: 'candidateAddress', message: 'Candidate address is required.' });
  if (!candidateExperience) errors.push({ field: 'candidateExperience', message: 'Candidate experience is required.' });

  if (!position) {
    errors.push({ field: 'positionId', message: 'Please select a valid position.' });
  }

  const jobSkills = position ? jobs.find((job) => job.id === position.id)?.skills : undefined;
  const allowedMandatory = jobSkills?.nonNegotiable ?? [];
  const allowedNegotiable = jobSkills?.negotiable ?? [];

  if (nonNegotiableSkills.length === 0) {
    errors.push({ field: 'nonNegotiableSkills', message: 'At least one mandatory skill is required.' });
  } else if (allowedMandatory.length > 0) {
    const allowedSet = new Set(allowedMandatory.map((s) => s.toLowerCase()));
    const hasAllowed = nonNegotiableSkills.some((skill) => allowedSet.has(skill.toLowerCase()));
    if (!hasAllowed) {
      errors.push({ field: 'nonNegotiableSkills', message: 'Select at least one skill from the list.' });
    }
  }

  if (negotiableSkills.length > 0 && allowedNegotiable.length > 0) {
    const allowedSet = new Set(allowedNegotiable.map((s) => s.toLowerCase()));
    const allValid = negotiableSkills.every((skill) => allowedSet.has(skill.toLowerCase()));
    if (!allValid) {
      errors.push({ field: 'negotiableSkills', message: 'Select only skills from the list.' });
    }
  }

  if (!whyGoodFit) errors.push({ field: 'whyGoodFit', message: 'Why this person is a good fit is required.' });

  if (whyGoodFit && whyGoodFit.length < 60) {
    errors.push({ field: 'whyGoodFit', message: 'Please provide a more detailed response (minimum 60 characters).' });
  }

  const parsed: ParsedPayload | null = position
    ? {
      referrerName,
      referrerEmployeeId,
      candidateName,
        candidateEmail,
        candidatePhone,
        candidateLocation,
        candidateAddress,
        candidateExperience,
        positionId: position.id,
        positionTitle: position.title,
        nonNegotiableSkills,
        negotiableSkills,
        whyGoodFit
      }
    : null;

  return { errors, parsed };
};

