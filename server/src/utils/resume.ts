import fs from 'fs/promises';
import path from 'path';
import mammoth from 'mammoth';

export const WHY_GOOD_FIT_SIMILARITY_THRESHOLD = 0.7;

const SUMMARY_HEADING_ALIASES = [
  'objective',
  'career objective',
  'professional summary',
  'career summary',
  'career overview',
  'professional overview',
  'profile summary',
  'profile',
  'summary',
  'about me',
  'about',
  'executive summary'
];

const OTHER_SECTION_HINTS = [
  'experience',
  'work history',
  'employment',
  'education',
  'skills',
  'projects',
  'certifications',
  'achievements',
  'languages',
  'contact',
  'references'
];

const normalizeWhitespace = (value: string) =>
  value
    .replace(/\u0000/g, ' ')
    .replace(/\r/g, '\n')
    .replace(/[\t\f\v]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const normalizeHeading = (value: string) =>
  value
    .toLowerCase()
    .replace(/summery/g, 'summary')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const isShortHeadingLine = (line: string) => {
  const clean = line.trim();
  if (!clean) return false;
  if (clean.length > 90) return false;
  const words = clean.split(/\s+/);
  return words.length > 0 && words.length <= 9;
};

const hasSummaryHeading = (line: string) => {
  const heading = normalizeHeading(line);
  if (!heading) return false;

  return SUMMARY_HEADING_ALIASES.some((alias) => {
    const aliasHeading = normalizeHeading(alias);
    if (heading === aliasHeading) return true;
    if (heading.includes(aliasHeading)) return true;

    const headingTokens = heading.split(' ');
    const aliasTokens = aliasHeading.split(' ');
    return aliasTokens.every((token) => headingTokens.includes(token));
  });
};

const looksLikeNextSection = (line: string) => {
  if (!isShortHeadingLine(line)) return false;

  const heading = normalizeHeading(line);
  if (!heading) return false;
  if (hasSummaryHeading(heading)) return false;

  return OTHER_SECTION_HINTS.some((hint) => heading.includes(hint));
};

const getParagraphFallback = (text: string) => {
  const blocks = text
    .split(/\n{2,}/)
    .map((block) => normalizeWhitespace(block))
    .filter(Boolean);

  const firstMeaningful = blocks.find((block) => block.length >= 80);
  if (firstMeaningful) return firstMeaningful.slice(0, 1400);

  return normalizeWhitespace(text).slice(0, 1400);
};

const readPdfText = async (filePath: string) => {
  const raw = await fs.readFile(filePath);
  const pdfParseModule: any = await import('pdf-parse');
  const PDFParse = pdfParseModule.PDFParse;
  const parser = new PDFParse({ data: raw });
  try {
    const result = await parser.getText();
    return normalizeWhitespace(String(result?.text || ''));
  } finally {
    await parser.destroy();
  }
};

const readDocxText = async (filePath: string) => {
  const result = await mammoth.extractRawText({ path: filePath });
  return normalizeWhitespace(result.value || '');
};

const readDocText = async (filePath: string) => {
  const extractorModule: any = await import('word-extractor');
  const WordExtractor = extractorModule.default || extractorModule;
  const extractor = new WordExtractor();
  const document = await extractor.extract(filePath);
  return normalizeWhitespace(String(document?.getBody?.() || ''));
};

const readImageText = async (filePath: string) => {
  const tesseractModule: any = await import('tesseract.js');
  const createWorker = tesseractModule.createWorker;
  const worker = await createWorker('eng');
  try {
    const result = await worker.recognize(filePath);
    return normalizeWhitespace(String(result?.data?.text || ''));
  } finally {
    await worker.terminate();
  }
};

export const extractResumeText = async (
  filePath: string,
  originalName: string,
  mimeType: string
): Promise<string> => {
  const ext = path.extname(originalName).toLowerCase();

  if (mimeType === 'application/pdf' || ext === '.pdf') {
    return readPdfText(filePath);
  }

  if (
    mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    ext === '.docx'
  ) {
    return readDocxText(filePath);
  }

  if (mimeType === 'application/msword' || ext === '.doc') {
    return readDocText(filePath);
  }

  if (mimeType === 'image/png' || mimeType === 'image/jpeg' || ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
    return readImageText(filePath);
  }

  return '';
};

export const extractResumeOverview = (resumeText: string): string => {
  const normalized = normalizeWhitespace(resumeText);
  if (!normalized) return '';

  const lines = normalized
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  for (let i = 0; i < lines.length; i += 1) {
    const current = lines[i];
    if (!hasSummaryHeading(current)) continue;

    const collected: string[] = [];
    for (let j = i + 1; j < lines.length; j += 1) {
      const line = lines[j];
      if (looksLikeNextSection(line)) break;
      collected.push(line);
      if (collected.join(' ').length >= 1400) break;
    }

    const section = normalizeWhitespace(collected.join(' '));
    if (section.length >= 80) {
      return section;
    }
  }

  return getParagraphFallback(normalized);
};
