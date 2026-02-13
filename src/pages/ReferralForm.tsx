import React, { useEffect, useState } from 'react';
import SkillAutocompleteTags from '../components/SkillAutocompleteTags';
type Position = {
  id: number;
  title: string;
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

type FieldErrors = Record<string, string>;

interface ReferralFormProps {
  initialPositionId: number;
  onBack: () => void;
}

const ReferralForm: React.FC<ReferralFormProps> = ({ initialPositionId, onBack }) => {
  const [submitting, setSubmitting] = useState(false);
  const [serverErrors, setServerErrors] = useState<FieldErrors>({});
  const [successMessage, setSuccessMessage] = useState('');

  const [form, setForm] = useState({
    referrerName: '',
    referrerEmployeeId: '',
    candidateName: '',
    candidateEmail: '',
    candidatePhone: '',
    candidateLocation: '',
    candidateAddress: '',
    candidateExperience: '',
    positionId: String(initialPositionId || ''),
    whyGoodFit: ''
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [availableSkills, setAvailableSkills] = useState<{ nonNegotiable: string[]; negotiable: string[] }>({
    nonNegotiable: [],
    negotiable: []
  });
  const [positionOptions, setPositionOptions] = useState<Position[]>([]);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const selectedPositionId = Number(form.positionId || 0);
  const selectedPositionTitle = positionOptions.find((position) => position.id === selectedPositionId)?.title || 'this role';
  const keySkills = availableSkills.nonNegotiable.slice(0, 3);
  const skillPhrase =
    keySkills.length > 0 ? keySkills.join(', ') : 'the required technical and business skills';
  const whyGoodFitPlaceholder =
    `Example: This person is a strong fit for the ${selectedPositionTitle} role because they have ` +
    `hands-on experience in ${skillPhrase}. In their recent project, they delivered measurable results, ` +
    `collaborated well with cross-functional teams, and can contribute quickly in this position.`;

  const loadSkills = async (positionId: number) => {
    try {
      const response = await fetch(`${API_URL}/api/jds/${positionId}`);
      const data = await response.json();
      setAvailableSkills(data.job?.skills ?? { nonNegotiable: [], negotiable: [] });
    } catch {
      setAvailableSkills({ nonNegotiable: [], negotiable: [] });
    }
  };

  useEffect(() => {
    if (initialPositionId) {
      loadSkills(initialPositionId);
    }
  }, [initialPositionId]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch(`${API_URL}/api/jds`);
        const data = await response.json();
        setPositionOptions(data.positions ?? []);
      } catch {
        setPositionOptions([]);
      }
    };

    fetchPositions();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const resetForm = () => {
    setForm({
      referrerName: '',
      referrerEmployeeId: '',
      candidateName: '',
      candidateEmail: '',
      candidatePhone: '',
      candidateLocation: '',
      candidateAddress: '',
      candidateExperience: '',
      positionId: String(initialPositionId || ''),
      whyGoodFit: ''
    });
    setSelectedSkills([]);
    setResumeFile(null);
  };

  const splitSelectedSkills = (skills: string[]) => {
    const mandatorySet = new Set(availableSkills.nonNegotiable.map((skill) => skill.toLowerCase()));
    const negotiableSet = new Set(availableSkills.negotiable.map((skill) => skill.toLowerCase()));

    const nonNegotiableSkills = skills.filter((skill) => mandatorySet.has(skill.toLowerCase()));
    const negotiableSkills = skills.filter((skill) => negotiableSet.has(skill.toLowerCase()));

    return { nonNegotiableSkills, negotiableSkills };
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setServerErrors({});
    setSuccessMessage('');

    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => payload.append(key, value));
    const { nonNegotiableSkills, negotiableSkills } = splitSelectedSkills(selectedSkills);
    payload.append('nonNegotiableSkills', JSON.stringify(nonNegotiableSkills));
    payload.append('negotiableSkills', JSON.stringify(negotiableSkills));
    if (resumeFile) payload.append('resume', resumeFile);

    try {
      const response = await fetch(`${API_URL}/api/referrals`, {
        method: 'POST',
        body: payload
      });

      const result = await response.json();

      if (!response.ok) {
        const nextErrors: FieldErrors = {};
        if (Array.isArray(result.errors)) {
          result.errors.forEach((err: { field: string; message: string }) => {
            nextErrors[err.field] = err.message;
          });
        } else if (result.message) {
          nextErrors.form = result.message;
        }
        setServerErrors(nextErrors);
        return;
      }

      setSuccessMessage(result.message || 'Referral submitted successfully.');
      resetForm();
    } catch (error) {
      setServerErrors({ form: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Referral Details</h2>
          <p className="mt-1 text-sm text-slate-600">Complete all fields for the selected position.</p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          Back to positions
        </button>
      </div>

      {serverErrors.form && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {serverErrors.form}
        </div>
      )}
      {successMessage && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
          {successMessage}
        </div>
      )}

      <section className="section-card">
        <h3 className="text-lg font-semibold text-slate-900">Employee (Referrer) Details</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label className="field-label">Full Name *</label>
            <input
              className="field-input"
              name="referrerName"
              value={form.referrerName}
              onChange={handleChange}
            />
            {serverErrors.referrerName && <p className="field-error">{serverErrors.referrerName}</p>}
          </div>
          <div>
            <label className="field-label">Employee ID *</label>
            <input
              className="field-input"
              name="referrerEmployeeId"
              value={form.referrerEmployeeId}
              onChange={handleChange}
            />
            {serverErrors.referrerEmployeeId && <p className="field-error">{serverErrors.referrerEmployeeId}</p>}
          </div>
        </div>
      </section>

      <section className="section-card">
        <h3 className="text-lg font-semibold text-slate-900">Candidate Details</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <label className="field-label">Full Name *</label>
            <input
              className="field-input"
              name="candidateName"
              value={form.candidateName}
              onChange={handleChange}
            />
            {serverErrors.candidateName && <p className="field-error">{serverErrors.candidateName}</p>}
          </div>
          <div>
            <label className="field-label">Email *</label>
            <input
              type="text"
              className="field-input"
              name="candidateEmail"
              value={form.candidateEmail}
              onChange={handleChange}
            />
            {serverErrors.candidateEmail && <p className="field-error">{serverErrors.candidateEmail}</p>}
          </div>
          <div>
            <label className="field-label">Phone Number *</label>
            <input
              className="field-input"
              name="candidatePhone"
              value={form.candidatePhone}
              onChange={handleChange}
            />
            {serverErrors.candidatePhone && <p className="field-error">{serverErrors.candidatePhone}</p>}
          </div>
          <div>
            <label className="field-label">Current Location *</label>
            <input
              className="field-input"
              name="candidateLocation"
              value={form.candidateLocation}
              onChange={handleChange}
            />
            {serverErrors.candidateLocation && <p className="field-error">{serverErrors.candidateLocation}</p>}
          </div>
          <div>
            <label className="field-label">Address *</label>
            <input
              className="field-input"
              name="candidateAddress"
              value={form.candidateAddress}
              onChange={handleChange}
            />
            {serverErrors.candidateAddress && <p className="field-error">{serverErrors.candidateAddress}</p>}
          </div>
          <div>
            <label className="field-label">Total Experience *</label>
            <input
              className="field-input"
              name="candidateExperience"
              value={form.candidateExperience}
              onChange={handleChange}
              placeholder="e.g., 5 years"
            />
            {serverErrors.candidateExperience && <p className="field-error">{serverErrors.candidateExperience}</p>}
          </div>
        </div>
      </section>

      <section className="section-card">
        <h3 className="text-lg font-semibold text-slate-900">Position Being Referred For</h3>
        <div className="mt-6">
          <label className="field-label">Selected Position *</label>
          <select
            className="field-input bg-slate-100"
            name="positionId"
            value={form.positionId}
            onChange={handleChange}
            disabled
          >
            <option value="">Select a position</option>
            {positionOptions.map((position) => (
              <option key={position.id} value={position.id}>
                {position.title}
              </option>
            ))}
          </select>
          {serverErrors.positionId && <p className="field-error">{serverErrors.positionId}</p>}
        </div>
      </section>

      <section className="section-card">
        <h3 className="text-lg font-semibold text-slate-900">Skills</h3>
        <div className="mt-6">
          <SkillAutocompleteTags
            apiUrl={API_URL}
            positionId={selectedPositionId}
            selectedSkills={selectedSkills}
            onChange={setSelectedSkills}
            placeholder="Search and add skills..."
            error={serverErrors.nonNegotiableSkills || serverErrors.negotiableSkills}
          />
        </div>
      </section>

      <section className="section-card">
        <h3 className="text-lg font-semibold text-slate-900">Why This Person Is a Good Fit</h3>
        <div className="mt-6 grid gap-6">
          <div>
            <textarea
              className="field-input min-h-[140px]"
              name="whyGoodFit"
              value={form.whyGoodFit}
              onChange={handleChange}
              onPaste={(event) => event.preventDefault()}
              onCopy={(event) => event.preventDefault()}
              onCut={(event) => event.preventDefault()}
              onDrop={(event) => event.preventDefault()}
              placeholder={whyGoodFitPlaceholder}
            />
            <p className="mt-1 text-xs text-slate-500">Copy/paste is disabled for this field.</p>
            {serverErrors.whyGoodFit && <p className="field-error">{serverErrors.whyGoodFit}</p>}
          </div>
        </div>
      </section>

      <section className="section-card">
        <h3 className="text-lg font-semibold text-slate-900">Resume Upload</h3>
        <div className="mt-6">
          <label className="field-label">Upload Resume (PDF, DOC, DOCX, PNG, JPG) *</label>
          <input
            type="file"
            className="mt-2 block w-full text-sm text-slate-600"
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
            onChange={(event) => setResumeFile(event.target.files?.[0] ?? null)}
          />
          <p className="mt-1 text-xs text-slate-500">Max file size: 5 MB</p>
          {serverErrors.resume && <p className="field-error">{serverErrors.resume}</p>}
        </div>
      </section>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? 'Submitting...' : 'Submit Referral'}
        </button>
      </div>
    </form>
  );
};

export default ReferralForm;
