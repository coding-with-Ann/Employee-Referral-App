const fs = require('fs');
const vm = require('vm');

const srcPath = 'C:/Users/aniru/OneDrive/Documents/navsan_web/src/pages/careers/data/jobs.ts';
const outPath = 'C:/Users/aniru/OneDrive/Documents/navsan_web/src/pages/careers/data/jobs.temp.skills.json';

const txt = fs.readFileSync(srcPath, 'utf8');
const match = txt.match(/export const jobs:\s*Job\[\]\s*=\s*(\[[\s\S]*\]);\s*$/);
if (!match) {
  throw new Error('Could not find jobs array in jobs.ts');
}

const arrayLiteral = match[1];
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(`jobs = ${arrayLiteral}`, sandbox);
const jobs = sandbox.jobs;

const skillPatterns = [
  ['Python', /\bpython\b/i],
  ['Java', /\bjava\b/i],
  ['JavaScript', /\bjavascript\b|\bjs\b/i],
  ['TypeScript', /\btypescript\b|\bts\b/i],
  ['C#', /\bc#\b|\bdotnet\b|\.net/i],
  ['React', /\breact\b/i],
  ['Angular', /\bangular\b/i],
  ['Node.js', /\bnode(?:\.js)?\b/i],
  ['REST APIs', /\brest(?:ful)?\b|\bapi\b/i],
  ['FastAPI', /\bfastapi\b/i],
  ['Django', /\bdjango\b/i],
  ['Flask', /\bflask\b/i],
  ['SQL', /\bsql\b|\bmysql\b|\bpostgres(?:ql)?\b/i],
  ['NoSQL', /\bnosql\b|\bmongodb\b/i],
  ['Database Design', /\bdatabase\b|\bschema\b|\bdata model/i],
  ['Data Modeling', /\bdata model/i],
  ['ETL', /\betl\b|\bdata pipeline\b/i],
  ['Data Migration', /\bdata migration\b|\bmigration cockpit\b/i],
  ['Data Analysis', /\banalysis\b|\banalyst\b|\binsights?\b/i],
  ['Excel', /\bexcel\b|\bpower query\b|\bpower pivot\b|\bvba\b/i],
  ['MS Access', /\bms access\b|\baccess database\b/i],
  ['Power BI', /\bpower bi\b/i],
  ['Tableau', /\btableau\b/i],
  ['Git', /\bgit\b/i],
  ['Docker', /\bdocker\b/i],
  ['Kubernetes', /\bkubernetes\b|\bk8s\b/i],
  ['CI/CD', /\bci\/cd\b|\bcontinuous integration\b|\bcontinuous delivery\b/i],
  ['Microservices', /\bmicroservices?\b/i],
  ['Cloud Platforms', /\bcloud\b|\baws\b|\bazure\b|\bgcp\b/i],
  ['Azure', /\bazure\b/i],
  ['AWS', /\baws\b/i],
  ['GCP', /\bgcp\b|\bgoogle cloud\b/i],
  ['Linux', /\blinux\b|\bwsl2\b/i],
  ['MLOps', /\bmlops\b|\bmodel monitoring\b/i],
  ['Machine Learning', /\bmachine learning\b|\bml\b/i],
  ['Generative AI', /\bgenai\b|\bgenerative ai\b/i],
  ['LLMs', /\bllm\b|\blarge language model/i],
  ['OpenAI', /\bopenai\b|\bazure openai\b/i],
  ['TensorFlow', /\btensorflow\b/i],
  ['PyTorch', /\bpytorch\b/i],
  ['scikit-learn', /\bscikit\-learn\b/i],
  ['Prompt Engineering', /\bprompt engineering\b/i],
  ['RAG', /\brag\b|\bretrieval\-augmented generation\b/i],
  ['LangChain', /\blangchain\b/i],
  ['SAP S/4HANA', /\bs\/4hana\b|\bsap s\/4hana\b/i],
  ['SAP FICO', /\bfi\/co\b|\bfico\b/i],
  ['SAP SuccessFactors', /\bsuccessfactors\b/i],
  ['SAP Concur', /\bconcur\b/i],
  ['SAP C4C', /\bc4c\b|\bcloud for customer\b/i],
  ['SAP PS', /\bproject system\b|\bsap ps\b/i],
  ['SAP CHARM', /\bcharm\b|\bsolution manager\b/i],
  ['SAP TMS', /\btransportation management system\b|\btms\b/i],
  ['SAP Change Management', /\bchange management\b|\brelease management\b/i],
  ['CRM', /\bcrm\b|\bacculynx\b|\bsalesforce\b|\bjobnimbus\b|\bservicetitan\b/i],
  ['ERP', /\berp\b|\bsage intacct\b|\boracle\b/i],
  ['Smartsheet', /\bsmartsheet\b/i],
  ['Zoho Desk', /\bzoho desk\b/i],
  ['SharePoint', /\bsharepoint\b/i],
  ['PowerPoint', /\bpowerpoint\b|\bvisual storytelling\b/i],
  ['Video Editing', /\bvideo\b|\bcanva\b|\bfigma\b|\badobe\b/i],
  ['Survey Tools', /\bsurvey\b|\bsentiment analysis\b/i],
  ['SOX Compliance', /\bsox\b/i],
  ['GAAP', /\bgaap\b/i],
  ['Accounts Receivable', /\baccounts receivable\b|\bar cash application\b|\bcash application\b/i],
  ['Bank Reconciliation', /\breconcile\b|\bbank activity\b/i],
  ['Networking', /\bnetwork\b|\bfirewall\b|\bvpn\b|\bexpressroute\b/i],
  ['Palo Alto', /\bpalo alto\b|\bpcnse\b|\bpanorama\b|\bprisma access\b|\bglobalprotect\b/i],
  ['Zero Trust Security', /\bzero trust\b|\bapp\-id\b|\bcontent\-id\b|\buser\-id\b/i],
  ['Azure Networking', /\bvnet\b|\bnsg\b|\bapplication gateway\b|\bazure firewall\b/i],
  ['WAF', /\bwaf\b|\bcloudflare\b/i],
  ['Stakeholder Communication', /\bstakeholder\b|\bcommunication\b|\bpresentation\b/i],
  ['Problem Solving', /\bproblem\-solving\b|\btroubleshoot\b|\bdecision\-making\b/i],
  ['Testing / UAT', /\btesting\b|\buat\b|\bregression testing\b/i],
  ['Project Management', /\bproject management\b|\bworkshop\b|\bfit\-to\-standard\b/i]
];

const norm = (s) => String(s || '').replace(/\s+/g, ' ').trim();

const pickSkills = (job) => {
  const title = norm(job.title);
  const description = norm(job.description);
  const req = (Array.isArray(job.requirements) ? job.requirements : []).map(norm).filter(Boolean);
  const resp = (Array.isArray(job.responsibilities) ? job.responsibilities : []).map(norm).filter(Boolean);

  const score = new Map();
  const mustMap = new Map();

  for (const [skill, rx] of skillPatterns) {
    let points = 0;
    let must = 0;

    if (rx.test(title)) {
      points += 5;
      must += 2;
    }
    if (rx.test(description)) points += 2;

    for (const line of req) {
      if (rx.test(line)) {
        points += 4;
        if (/\b(must|required|mandatory|minimum|at least|strong|proven|hands\-on|expert)\b/i.test(line)) {
          must += 2;
        }
      }
    }

    for (const line of resp) {
      if (rx.test(line)) points += 2;
    }

    if (points > 0) {
      score.set(skill, points);
      mustMap.set(skill, must);
    }
  }

  const ranked = [...score.entries()]
    .map(([skill, points]) => ({ skill, points, must: mustMap.get(skill) || 0 }))
    .sort((a, b) => (b.points + b.must) - (a.points + a.must));

  let nonNegotiable = ranked
    .filter((x) => x.must > 0 || x.points >= 8)
    .slice(0, 8)
    .map((x) => x.skill);

  if (nonNegotiable.length === 0) {
    nonNegotiable = ranked.slice(0, 4).map((x) => x.skill);
  }

  const nonSet = new Set(nonNegotiable);
  const negotiable = ranked
    .filter((x) => !nonSet.has(x.skill))
    .slice(0, 8)
    .map((x) => x.skill);

  return { nonNegotiable, negotiable };
};

const output = jobs.map((job) => ({
  id: job.id,
  title: job.title,
  description: job.description,
  requirements: job.requirements,
  responsibilities: job.responsibilities,
  skills: pickSkills(job)
}));

fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf8');
console.log(`Generated: ${outPath}`);
console.log(`Jobs processed: ${output.length}`);
