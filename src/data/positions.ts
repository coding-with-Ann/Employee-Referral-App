const rawTitles = [
  "Python Engineer",
  "SAP Change and Release Specialist",
  "Senior Power Automate Developer",
  "PowerApps Support Role",
  "Senior PowerApps Developer",
  "Senior Technical Specialist - User Support",
  "Director - Business Transformation",
  "SR Transformational Consultant",
  "HR Technical Lead - IT & Technology Recruiting",
  "Director of Human Resources",
  "General Ledger Accountant (UK)",
  "Lead Analyst - AP & AR",
  "Data Migration Expert/Lead",
  "CRM & ERP Support Specialist",
  "Communication and Content Lead",
  "AI Developer",
  "AR Cash Application Specialist",
  "Network Administrator",
  "Senior Data & MIS Analyst"
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

export const positions = rawTitles.map((title, index) => ({
  id: index + 1,
  title,
  slug: slugify(title)
}));

export type Position = (typeof positions)[number];
