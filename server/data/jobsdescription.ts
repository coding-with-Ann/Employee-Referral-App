export interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  experience: string;
  slug: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  culture: string[];
  skills: {
    nonNegotiable: string[];
    negotiable: string[];
  };
  applyLink?: string;    // Added property for Google Form link
  isNew?: boolean;      // Added property to flag new roles
  postedDate?: string; // Added property for listing date
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Python Engineer",
    location: "Remote",
    type: "Full-time",
    department: "IT",
    experience: "3+ Years with AI Exposure",
    slug: "python-engineer",
    description: "We are looking for a skilled Python Backend Engineer with 3+ years of professional experience to design, build, and optimize backend services that power our AI-driven applications. The ideal candidate is strong in backend fundamentals and has exposure to AI/ML engineering concepts.",
    skills: {
      nonNegotiable: ["Python", "Python Backend Development", "REST APIs", "SQL/NoSQL Databases", "Distributed Systems"],
      negotiable: ["Docker", "CI/CD", "Cloud Platforms (Azure/AWS/GCP)", "LLM/GenAI APIs", "Data Pipelines", "Linux/WSL2"]
    },
    requirements: [
      "3+ years of backend development experience in Python with strong software engineering skills.",
      "Strong knowledge of REST APIs, databases (SQL/NoSQL), and distributed systems.",
      "Familiarity with Git, Docker, CI/CD, and cloud deployment.",
      "Experience with LLM/GenAI APIs (OpenAI, HuggingFace, etc.).",
      "Exposure to AI/ML workflows (model serving, inference, or data pipelines).",
      "Solid understanding of scalability, reliability, and performance tuning.",
      "Strong problem-solving and communication skills.",
      "Knowledge of Linux/WSL2 needed for app development."
    ],
    responsibilities: [
      "Design, develop, and maintain scalable backend services using Python (FastAPI/Flask/Django).",
      "Implement and optimize APIs, microservices, and data pipelines.",
      "Collaborate with AI/ML and UI engineers to integrate models into production systems.",
      "Ensure best practices in testing, CI/CD, observability, and security.",
      "Optimize performance, reliability, and cost of backend services in cloud environments (Azure/AWS/GCP)."
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8", // Add the common Google Form link for this role
    postedDate: "2025-09-19"
  },
  {
    id: 2,
    title: "SAP Change and Release Specialist",
    location: "Remote",
    type: "Full-time",
    department: "IT",
    experience: "6 Years",
    slug: "sap-change-and-release-specialist",
    description: "This position is for a Technology Specialist and great communicator, who understands SAP technology and system change processes. Responsible for managing all aspects of SAP Environment, change and release management. The goal of this area is to safeguard our SaaS SAP landscape while facilitating project rollouts and changing deployments. Change Release specialist will oversee the planning, coordination, and governance of SAP S/4HANA Cloud (Public Edition) release and environment activities. This role focuses on managing quarterly SAP cloud releases, regression testing, migration configuration, and ensuring business readiness, in alignment with SAP's standard public cloud delivery model and the organization's change management framework.",
    skills: {
      nonNegotiable: ["SAP Change Management", "SAP Release Management", "SAP CHARM", "SAP TMS", "SAP S/4HANA Cloud"],
      negotiable: ["Regression Testing", "CAB Governance", "Build & Deployment Planning", "Risk and Compliance Reporting", "SAP ABAP/Java/HANA Exposure"]
    },
    requirements: [
      "Education: Bachelor's degree in science or related field. Degree in Computer Science, Engineering, or similar is a plus.",
      "Experience: Several years of experience in system management roles.",
      "Strong understanding of environmental laws and regulations.",
      "4+ years of experience in IT Change and Release management.",
      "2+ years of experience working with SAP Transportation Management System (TMS)",
      "2+ years of technical experience in SAP CHARM (Solution Manager)",
      "Ability to analyze data and generate reports.",
      "Excellent communication and interpersonal skills.",
      "Strong problem-solving and decision-making abilities.",
      "Ability to work independently and collaboratively across departments.",
      "Experience working with SAP technology (e.g. ABAP, Java, HANA).",
      "Ability to develop effective working relationships with peers and management internationally, in other areas of the IS/IT organization and in Business Streams.",
      "Work with stakeholders based in various time zones, flexibility is essential as you participate in calls and activities outside of standard business hours and weekends."
    ],
    responsibilities: [
      "Ensure that various teams working on different priorities and applications stay compliant with SAP system management processes, change control regulations, and availability of the environment.",
      "Convene Advisory Boards (e.g. CAB, chang control) and IT Freeze Boards.",
      "Lead and participate in global change and release team activities, test data refresh and continuous improvement initiatives, such as but not limited to SOP reviews and other targeted workgroups.",
      "Identify potential risks related to the SAP operations and escalate to the stakeholders/owners of impacted applications.",
      "Investigate incidents of environmental non-compliance and coordinate with different teams for corrective actions.",
      "Advise SAP CoE and IT Management teams on SAP environmental matters and help shape long-term environmental strategies.",
      "Conduct training sessions to raise awareness about SAP Change management best practices and sustainability efforts.",
      "Prepare reports for internal stakeholders and regulatory bodies regarding SAP environmental performance and compliance.",
      "Maintain accurate records for artifacts supporting audits, and compliance activities.",
      "Prepare Build summary for weekly, minor and major releases.",
      "Support Change Management Processes and SAP transport management operations.",
      "Be a trusted advisor for all matters related to SAP Change & Release Management for the business, vendors and technical teams."
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8", // Add the common Google Form link for this role
    postedDate: "2025-10-28"
  },

  // {
  //   id: 3,
  //   title: "Full Stack Developer",
  //   location: "Remote",
  //   type: "Full-time",
  //   department: "IT/Engineering",
  //   experience: "3 - 6 Years",
  //   slug: "full-stack-developer",
  //   description: "We are seeking a highly skilled and self-driven Full Stack Developer to join our technology team. The ideal candidate brings hands-on experience in React, Angular, Node.js, and Python, with a proven ability to manage projects independently from concept to deployment.",
  //   requirements: [
  //     "Strong expertise in React, Angular, Node.js, and Python FastAPI/Django/Flask).",
  //     "Proficient in JavaScript (ES6+), TypeScript, HTML5, CSS3.",
  //     "Experience with RESTful APIs or GraphQL development and integration.",
  //     "Strong understanding of SQL and NoSQL databases (PostgreSQL, MongoDB).",
  //     "Familiarity with Docker, CI/CD pipelines, and cloud platforms (Azure).",
  //     "Experience in troubleshooting, performance tuning, and debugging.",
  //     "Excellent problem-solving and analytical skills.",
  //     "Strong communication and collaboration abilities.",
  //     "Self-directed with the ability to manage multiple priorities and deliver independently.",
  //     "Bachelor's degree in Computer Science, Engineering, or related field."
  //   ],
  //   responsibilities: [
  //     "Design, develop, and maintain scalable web applications using React and Angular.",
  //     "Build robust backend services and APIs using Node.js and Python.",
  //     "Integrate front-end and back-end systems for seamless user experiences.",
  //     "Implement database models, perform query optimization, and manage data integrity.",
  //     "Ensure application security, scalability, and performance optimization. Debug and resolve production issues proactively.",
  //     "Take ownership of deliverables and ensure timely completion with minimal supervision.",
  //     "Collaborate with cross-functional teams to translate requirements into technical solutions."
  //   ],
  //   benefits: [
  //     "Competitive salary",
  //     "Health insurance",
  //     "Remote work flexibility",
  //     "Professional development budget"
  //   ],
  //   culture: [
  //     "Innovation-driven environment",
  //     "Collaborative team culture",
  //     "Work-life balance",
  //     "Regular team building activities"
  //   ],
  //   applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8", // Add the common Google Form link for this role
  //   postedDate: "2025-10-28"
  // },
  // {
  //   id: 5,
  //   title: "Associate Architect – SAP SuccessFactors, Concur",
  //   location: "Remote/ Onsite",
  //   type: "Full-time",
  //   department: "SAP Center of Excellence / IT / Enterprise Applications",
  //   experience: "5+ Years",
  //   slug: "associate-architect-sap-successfactors-concur",
  //   description: "We are looking for a highly skilled SAP SuccessFactors expert with a solid understanding of SAP Concur to support and enhance our cloud-based HR and Travel & Expense Systems.This role requires deep expertise in SAP SuccessFactors, preferably across multiple modules, and a hands-on knowledge of SAP Concur functionalities. The ideal candidate will help drive system optimization,process improvements, and global rollouts within a Public Cloud Environment.",
  //   requirements: [
  //     "Bachelor’s degree in information technology, HR, Business, Science or related field.",
  //     "Minimum of 5 years of experience with SAP SuccessFactors (Implementation and support) and SAP Concur.",
  //     "Solid understanding of HCM, Travel & Expense processes and how they interact with ERP processes.",
  //     "Demonstrated experience with SAP SuccessFactors & Concur integration to S/4HANA Public Cloud, including middleware/iFlow setup (SAP Cloud Integration / CPI).",
  //     "Familiarity with SAP Activate methodology and fit-to-standard project delivery.",
  //     "Excellent communication, presentation, and stakeholder management skills.",
  //     "Ability to work independently in a fast-paced environment."
  //   ],
  //   responsibilities: [
  //     "Design, configure, and implement SAP SuccessFactors solutions, including Customer Management and Opportunity Management functionalities.",
  //     "Serve as the subject matter expert (SME) for SAP SuccessFactors for multiple areas (e.g. Employee Central, Recruiting, Learning, Performance management etc.)",
  //     "Provide expert-level support for SAP Concur (Travel and Expense), including setup, configurations, problem and incident management, and integration support.",
  //     "Collaborate with cross-functional teams (global HR, Finance, Professional services, Customer Management and IT) to gather business requirements and translate them into functional solutions.",
  //     "Ensure end-to-end solution integrity and consistency in SAP SuccessFactors, SAP Concur and S/4HANA integration).",
  //     "Drive system enhancements, upgrades, and implementations. Provide support during UAT,training, and post-go-live stages.",
  //     "Create functional specifications for extensions, reports, and integrations as needed.",
  //     "Ensure alignment with SAP Best Practices for SAP SuccessFactors, SAP Concur and Public Cloud environments.",
  //     "Stay current on SAP SuccessFactors, SAP Concur and cloud innovations to support business transformation."
  //   ],
  //   benefits: [
  //     "Competitive salary",
  //     "Health insurance",
  //     "Remote work flexibility",
  //     "Professional development budget"
  //   ],
  //   culture: [
  //     "Innovation-driven environment",
  //     "Collaborative team culture",
  //     "Work-life balance",
  //     "Regular team building activities"
  //   ],
  //   applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8", // Add the common Google Form link for this role
  //   postedDate: "2025-11-25"
  // },
  // {
  //   id: 6,
  //   title: "Associate Architect – SAP FI/CO (S/4HANA Public Cloud)",
  //   location: "Remote/ Onsite",
  //   type: "Full-time",
  //   department: "SAP Center of Excellence / IT / Enterprise Applications",
  //   experience: "8+ Years",
  //   slug: "associate-architect-sap-fico-s4hana-public-cloud",
  //   description: "We are seeking a highly motivated and skilled Associate Architect with expertise in SAP Finance and Controlling System (FICO) on S/4HANA Public Cloud. The ideal candidate will have a solid understanding of SAP Finance processes, strong communication skills, and demonstrable experience integrating SAP Finance (FI/CO) with SAP PS. The candidate will play a key role in designing, configuring, and supporting SAP PS solutions in alignment with business needs and best practices for cloud deployments.",
  //   requirements: [
  //     "8+ years of hands-on experience with SAP FICO Implementation experience, including at least one full S/4 HANA implementation on SAP Public Cloud. Deep knowledge of S/4 HANA Public Cloud, SAP Activate and Fit-to-Standard approach.",
  //     "Knowledge of data migration tool (e.g. Migration cockpit etc).",
  //     "Proven background in SAP FI/CO integration with other SAP modules. Experience working with Cloud technologies, public cloud configurations and multi-tenant environments.",
  //     "Strong functional knowledge of: GL, AP/AR, Asset Accounting, Revenue Recognition, Banking, Cash Application, Cost Center/Profit Center Accounting, COPA, etc. Finance Embedded Analytics in S/4 HANA Public Cloud.",
  //     "Familiarity with SAP Activate methodology.",
  //     "Experience working in cloud-based deployment models and understanding their constraints (e.g., extensibility vs. customization).",
  //     "Excellent analytical, problem-solving, and communication skills.",
  //     "Ability to work independently in a fast-paced environment."
  //   ],
  //   responsibilities: [
  //     "Design and implement end-to-end SAP FICO, Group reporting solutions in S/4HANA Public  Cloud environment.",
  //     "Work closely with business stakeholders to lead business workshops, gather requirements, propose solutions, and deliver high-quality configurations.",
  //     "Drive process standardization and best practices adoption across Finance and Controlling functions.",
  //     "Collaborate with Finance teams to ensure seamless integration of SAP FI/CO with other modules e.g. PS, Concur, CRM etc.",
  //     "Develop functional specifications for RICEFW objects (Reports, Interfaces, Conversions, Enhancements, Forms, Workflows).",
  //     "Support data migration and testing efforts related to Finance and its integration points.",
  //     "Participate in fit-gap analysis, process design, testing, training, and go-live support.",
  //     "Ensure compliance with SAP Best Practices for Public Cloud.",
  //     "Provide expert-level support and troubleshooting of SAP FICO issues in production and project environments."
  //   ],
  //   benefits: [
  //     "Competitive salary",
  //     "Health insurance",
  //     "Remote work flexibility",
  //     "Professional development budget"
  //   ],
  //   culture: [
  //     "Innovation-driven environment",
  //     "Collaborative team culture",
  //     "Work-life balance",
  //     "Regular team building activities"
  //   ],
  //   applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8", // Add the common Google Form link for this role
  //   postedDate: "2025-11-25"
  // },

  // {
  //   id: 8,
  //   title: "SAP Business Analyst",
  //   location: "Remote",
  //   type: "Full-time",
  //   department: "SAP Center of Excellence / IT / Enterprise Applications",
  //   experience: "5+ Years",
  //   slug: "sap-business-analyst",
  //   description: "The Business Analyst (BA) will serve as the bridge between business stakeholders and the SAP  solution environment. The BA will be responsible for gathering, analyzing, and translating business requirements into functional solution options, ensuring alignment with global processes across project systems, professional services, billing, collection, finance, travel and expenses, timesheets and customer engagement. This role will also support solution evaluation, process harmonization, testing, and user adoption.",
  //   requirements: [
  //     "Bachelor’s degree in business, Information Systems, Finance, or related field.",
  //     "5+ years of experience as a Business Analyst or Functional Consultant in SAP environments.",
  //     "Hands-on exposure to SAP S/4HANA Cloud (Public Edition) in areas such as Project System, Professional Services, and Finance.",
  //     "Working knowledge of at least one of the following: SAP Cloud for Customer (C4C), SAP Concur, SAP SuccessFactors.",
  //     "Strong skills in requirements gathering, process documentation, and stakeholder facilitation.",
  //     "Experience in professional services or insurance/claims-related industries preferred."
  //   ],
  //   responsibilities: [
  //     "Business Requirements & Process Mapping: Engage with stakeholders across business units (Claims, Finance, HR, Operations)to capture business requirements.",
  //     "Document and analyze “as-is” and “to-be” processes, focusing on Project System (PS), Professional Services, Finance, and CRM.",
  //     "Identify process harmonization opportunities for the global rollout and evolutionary optimizations of business processes.",
  //     "SAP Solution Alignment: Map requirements to solution capabilities in SAP S/4 HANA Public Cloud, SAP C4C, SAP Concur, and SAP SuccessFactors.",
  //     "Collaborate with SAP functional consultants to evaluate solution options and recommend fit-to-standard or extension approaches.",
  //     "Ensure solutions comply with industry regulations and internal governance standards.",
  //     "Implementation Support: Support preparation phases of implementation projects, including workshops, system demos, and solution validation.",
  //     "Assist in defining test scenarios, coordinating UAT, and validating system outputs against business requirements.",
  //     "Contribute to deployment readiness and post-go-live support.",
  //     "Stakeholder Management & Communication: Act as the liaison between business users, IT teams, and system integrators.",
  //     "Facilitate clear communication of requirements, risks, and dependencies.",
  //     "Support change management and training initiatives to drive adoption.",
  //     "Continuous Improvement: Monitor system usage, collect feedback, and identify improvement opportunities.",
  //     "Support analytics and reporting needs using available SAP tools."
  //   ],
  //   benefits: [
  //     "Competitive salary",
  //     "Health insurance",
  //     "Remote work flexibility",
  //     "Professional development budget"
  //   ],
  //   culture: [
  //     "Innovation-driven environment",
  //     "Collaborative team culture",
  //     "Work-life balance",
  //     "Regular team building activities"
  //   ],
  //   applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8", // Add the common Google Form link for this role
  //   postedDate: "2025-11-25"
  // },

  {
    id: 9,
    title: "Senior Power Automate Developer",
    location: "Remote / Shift Timings 3:00 PM - 12:00 AM",
    type: "Full-time",
    department: "IT",
    experience: "5-7 Years",
    slug: "senior-power-automate-developer",
    description: "We are seeking a highly skilled Senior Power Automate Developer to design, develop, and implement enterprise-grade automation solutions. You will collaborate with stakeholders to streamline complex business processes, integrate with Microsoft 365 and third-party systems, and mentor junior team members.",
    skills: {
      nonNegotiable: ["Power Automate", "Power Apps", "Dataverse", "Workflow Automation", "API Integration"],
      negotiable: ["SharePoint Integration", "Dynamics 365 Integration", "Azure Functions", "SQL", "PowerShell/VBScript", "RPA Mentoring"]
    },
    requirements: [
      "Proficiency in Power Automate (Cloud and Desktop flows), Power Apps (Canvas and Model-driven), and Dataverse.",
      "Proven experience developing solutions using Microsoft Power Automate.",
      "Proficiency in databases (e.g., SQL Server or MySQL) and scripting (PowerShell, VBScript, Excel Macros, Python).",
      "Familiarity with IT infrastructure and application-level troubleshooting.",
      "Strong communication and collaboration skills.",
      "Knowledge of API integration and workflow automation.",
      "Ability to work in a fast-paced production environment and manage multiple priorities.",
      "Bachelor’s degree in computer science, Information Technology, or related field.",
      "5–7 years of overall RPA experience, with at least 2–3 years specifically in Power Automate."
    ],
    responsibilities: [
      "Lead the design and development of Power Automate flows and integrations across SharePoint, Dynamics 365, Dataverse, Azure Functions, and REST APIs.",
      "Collaborate with business analysts and project managers to gather requirements and translate them into scalable, low-code solutions.",
      "Troubleshoot and resolve issues related to workflow performance, exceptions, and production support.",
      "Continuously optimize workflows for performance tuning and error reduction.",
      "Create and maintain detailed documentation, including process diagrams, user guides, and deployment plans.",
      "Mentor and train junior developers and business users on Power Platform capabilities and best practices."
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work flexibility", "Professional development budget"],
    culture: ["Innovation-driven environment", "Collaborative team culture", "Work-life balance", "Regular team building activities"],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8", // Add the common Google Form link for this role
    postedDate: "2025-12-05"
  },
  {
    id: 10,
    title: "PowerApps Support Role",
    location: "Remote / Shift Timings 3:00 PM - 12:00 AM (On-call during non-business hours and weekends)",
    type: "Full-time",
    department: "IT/Engineering",
    experience: "2-3 Years",
    slug: "powerapps-support-role",
    description: "We are looking for a skilled PowerApps Support Engineer to provide technical support, troubleshooting, and maintenance for Microsoft Power Platform solutions. The role includes on-call support during non-business hours and weekends.",
    skills: {
      nonNegotiable: ["Power Apps Support", "Power Automate", "Dataverse", "Troubleshooting", "Ticketing/ITIL Process"],
      negotiable: ["SharePoint Integration", "Power Apps Connectors", "API/SQL Basics", "Performance Monitoring", "End-user Training"]
    },
    requirements: [
      "Strong knowledge of Power Automate, Dataverse, and integration with SharePoint and other data sources.",
      "Familiarity with PowerApps formulas, connectors, and troubleshooting techniques.",
      "Basic understanding of JavaScript, SQL, and APIs for issue resolution.",
      "Experience with ticketing systems and ITIL processes.",
      "Excellent communication and problem-solving skills.",
      "Ability to work in a fast-paced environment and manage multiple priorities.",
      "Bachelor’s degree in computer science, Information Technology, or a related field.",
      "PowerApps development/support experience (1+ years preferred)."
    ],
    responsibilities: [
      "Provide Level 1 and Level 2 support for PowerApps applications and workflows.",
      "Troubleshoot and resolve issues related to PowerApps Canvas and Model-Driven apps.",
      "Monitor and manage support tickets, ensuring timely resolution and communication with stakeholders.",
      "Document issues and solutions for future reference and maintain the knowledge base.",
      "Perform regular health checks and performance tuning of PowerApps solutions.",
      "Apply updates and patches as required.",
      "Assist end-users with queries, training, and guidance on PowerApps functionality.",
      "Work closely with development teams for bug fixes and enhancements.",
      "Coordinate with business users to understand recurring issues and suggest improvements."
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work flexibility", "Professional development budget"],
    culture: ["Innovation-driven environment", "Collaborative team culture", "Work-life balance", "Regular team building activities"],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8", // Add the common Google Form link for this role
    postedDate: "2025-12-05"
  },
  {
    id: 12,
    title: "Senior PowerApps Developer",
    location: "Remote / Shift Timings 3:00 PM - 12:00 AM",
    type: "Full-time",
    department: "IT/Engineering",
    experience: "5+ Years",
    slug: "senior-powerapps-developer",
    description: "We are seeking a skilled Senior PowerApps Developer responsible for designing, developing, and managing applications on the Microsoft Power Apps platform, optimizing performance and ensuring successful deployment.",
    skills: {
      nonNegotiable: ["Power Apps (Canvas/Model-driven)", "Power Automate", "Dataverse", "SQL and API Integration", "App Performance Optimization"],
      negotiable: ["Power BI", "SharePoint Online", "Agile Delivery", "Security Best Practices", "Documentation and User Training"]
    },
    requirements: [
      "Extensive experience in Microsoft Power Platform (PowerApps, Power Automate, Power BI).",
      "Experience in complex Canvas and Model-driven app development and integrations.",
      "Familiarity with Dataverse, SharePoint Online, SQL and APIs.",
      "Knowledge of best practices for app performance optimization and security.",
      "Strong business-to-technology translation skills and Agile experience.",
      "Bachelor’s degree in computer science, IT, or related field.",
      "PowerApps development experience (3+ years)."
    ],
    responsibilities: [
      "Develop applications with Microsoft Power Apps to meet business requirements and streamline processes.",
      "Collaborate with stakeholders to gather, analyze, and translate requirements into functional solutions.",
      "Design, test, and deploy applications incorporating UI, workflows, and data integrations.",
      "Ensure applications are efficient, scalable, secure, and user-friendly.",
      "Provide training and support to end-users and maintain documentation.",
      "Troubleshoot and resolve technical issues and stay updated with platform best practices.",
      "Document application development processes, including design specifications and user guides.",
      "Stay updated with the latest features and best practices for Microsoft Power Apps to improve application"
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work flexibility", "Professional development budget"],
    culture: ["Innovation-driven environment", "Collaborative team culture", "Work-life balance", "Regular team building activities"],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8", // Add the common Google Form link for this role
    postedDate: "2025-12-05"
  },
  {
    id: 15,
    title: "Senior Technical Specialist – User Support",
    location: "Remote",
    type: "Full-time",
    department: "User Support",
    experience: "4–6+ years in IT User Support",
    slug: "senior-technical-specialist-user-support",
    description: "We are looking for a capable and proactive Senior Technical Specialist to join our User Support team. This role provides advanced troubleshooting, thorough diagnostic checks, and high-quality support for end-users across the organisation. Acting as an escalation point for the Service Desk, the position requires strong technical understanding across cloud services (especially Azure), core systems, user environment technologies, and basic network/security concepts such as NGFW. The role does not include system or network configuration, but requires the ability to perform in-depth checks, gather diagnostic information, and prepare clear escalations for L3 teams. The Senior Technical Specialist will also mentor junior staff and support continuous improvement within the team.",
    skills: {
      nonNegotiable: ["Windows & Microsoft 365 Support", "Azure AD & Intune", "L2/L3 Troubleshooting", "Endpoint Support"],
      negotiable: ["Networking Fundamentals", "NGFW Log Analysis", "MFA/Conditional Access Troubleshooting", "PowerShell", "ITSM Tools (ServiceNow/Jira)", "Shift/On-call Support"]
    },
    requirements: [
      "4–6+ years in IT User Support / Service Desk roles, ideally in an enterprise environment.",
      "Strong technical understanding of Windows OS, Microsoft 365, Azure AD, Intune, and common workplace technologies.",
      "Solid grasp of networking fundamentals (DNS, DHCP, VLANs, routing basics).",
      "Familiarity with NGFW concepts and log interpretation (Fortinet, Palo Alto, Sophos, etc.).",
      "Strong diagnostic and analytical thinking with the ability to solve issues within access limits.",
      "Excellent customer service, communication, and documentation skills.",
      "Ability to mentor and guide junior team members.",
      "Willingness to work in shift-based schedules.",
      "Preferred: Certifications such as AZ-900, MD-102, ITIL Foundation, CCNA, or equivalent.",
      "Preferred: Experience using PowerShell for log collection or data gathering.",
      "Preferred: Exposure to ITSM tools (ServiceNow, ManageEngine, Jira Service Management, etc.)."
    ],
    responsibilities: [
      "Serve as Level 2.5 / advanced escalation point for complex incidents and service requests (Advanced User Support & Escalation Handling).",
      "Conduct comprehensive pre-diagnostic checks on issues related to Azure, M365, endpoints, authentication, and networking.",
      "Gather detailed logs, error codes, and relevant data before escalating issues to L3 engineers and ensure escalations are well-documented, structured, and actionable.",
      "Provide hands-on support for desktops, laptops, mobile devices, business applications, and user access issues (End-User Troubleshooting).",
      "Troubleshoot network connectivity problems using non-administrative tools (ping, traceroute, DNS checks, reviewing logs).",
      "Handle issues related to MFA, conditional access failures, and general security alerts.",
      "Review dashboards, alerts, and logs within Azure AD, Intune, and M365 (within permitted access level) and validate device compliance/health indicators without performing configuration changes.",
      "Review endpoint and firewall-related logs to support initial incident investigation and interpret NGFW error patterns.",
      "Mentor junior User Support team members; develop and maintain knowledge base articles, troubleshooting steps, and user guides.",
      "Identify recurring issues and propose improvements or automation opportunities; promote user security hygiene and triage potential security issues.",
      "Work in rotational shifts as part of a 24/7 or extended-hours support model, ensure smooth handovers between shifts, and participate in on-call rotations if required."
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work flexibility", "Professional development budget"],
    culture: ["Innovation-driven environment", "Collaborative team culture", "Work-life balance", "Regular team building activities"],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8", // Add the common Google Form link for this role
    postedDate: "2025-12-05"
  },
  {
    id: 20,
    title: "Director - Business Transformation",
    location: "Remote / 3:00 PM – 12:00 AM",
    type: "Full-time",
    department: "Business",
    experience: "12 - 18 Years",
    slug: "director-business-transformation",
    description: "The Director of Business Transformation leads cross-regional initiatives that improve operational performance, financial outcomes, and process consistency. The role partners with senior leadership to set priorities, create roadmaps, and ensure adoption of new processes and operating models.",
    skills: {
      nonNegotiable: ["Business Transformation", "Operating Model Design", "Process Improvement", "Executive Stakeholder Management"],
      negotiable: ["Program Governance", "Change Management", "KPI & Financial Analysis", "Lean/Continuous Improvement", "Cross-regional Delivery"]
    },
    requirements: [
      "Bachelor's degree required; MBA preferred.",
      "12-18 years in transformation, operational excellence, consulting, or enterprise program leadership.",
      "Experience influencing senior executives across regions.",
      "Strong analytical capability with understanding of operational-financial linkages.",
      "Proven ability to lead global, cross-functional initiatives.",
      "Strong facilitation, communication, and presentation skills.",
      "Preferred: Experience in insurance services, loss adjusting, or professional services.",
      "Preferred: Familiarity with project management methodologies (PMP, Agile).",
      "Preferred: Understanding of financial reporting and working capital metrics.",
      "Preferred: Experience with Lean or structured improvement methods preferred.",
      "Preferred: Ability to manage multiple priorities in a distributed environment.",
      "Preferred: Willingness to travel internationally."
    ],
    responsibilities: [
      "Senior Leadership Engagement and Influence: Align with regional CEOs, CFO, EXCO members, and functional leaders. Facilitate discussions to identify risks, dependencies, and improvement areas. Present recommendations clearly to support executive decisions. Represent Transformation in strategic planning and governance forums.",
      "Transformation Strategy and Execution: Convert organizational goals into transformation themes, KPIs, and roadmaps. Lead multi-region programs focused on efficiency and working capital improvement. Conduct diagnostics, reviews, and root-cause assessments. Define and implement global standard processes and operating models.",
      "Change Leadership: Lead change management to ensure adoption of new systems and processes. Communicate expectations and impacts of transformation initiatives. Facilitate workshops and training to build transformation capability.",
      "Cross-Functional Collaboration and Governance: Work with business units to confirm feasibility of proposed changes. Establish governance to track progress and manage risks. Align stakeholders on priorities, timelines, and resources.",
      "People Leadership: Coach analysts, consultants, and managers. Support hiring, onboarding, and capability building. Promote consistent communication and ways of working."
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
    postedDate: "2025-12-17"
  },
  {
    id: 23,
    title: "SR Transformational Consultant",
    location: "Remote/ 3:00 PM – 12:00 AM",
    type: "Full-time",
    department: "Business",
    experience: "10-15 years",
    slug: "sr-transformational-consultant",
    description: "The Senior Transformation Consultant is a hands-on delivery Lead responsible for independently driving complex transformation initiatives across regions and functions. This role reports into the Transformation Director and operates as the primary execution owner for initiatives once direction and priorities are set. The role is expected to lead from day one with minimal ramp-up and act as a coach and quality bar for Consultants and Senior PI Analysts.",
    skills: {
      nonNegotiable: ["Lean Six Sigma Black Belt", "Transformation Delivery", "Process Optimization", "Stakeholder Management"],
      negotiable: ["Automation (RPA/Power Apps)", "Analytics and Insights", "Project Governance", "Change Enablement", "Coaching and Mentoring"]
    },
    requirements: [
      "Bachelor’s degree in Engineering, Business, Finance, or a related field",
      "10–15 years of experience in Business Transformation, Operational Excellence, or Consulting",
      "Lean Six Sigma Black Belt certification (mandatory)",
      "Strong experience leading complex, cross-functional initiatives independently",
      "Working knowledge of automation technologies (RPA, Power Apps, low-code platforms) and analytics tools",
      "Strong understanding of operational–financial linkages (DSO, WIP, billing, productivity, cost)",
      "Excellent stakeholder management, communication, and executive presentation skills",
      "Comfortable operating in ambiguous, high-urgency, and multi-time-zone environments",
      "Preferred: Professional services, insurance services, or multi-region operations",
      "Preferred: Working capital, billing transformation, or operational efficiency programs",
      "Preferred: Exposure to AI-enabled analytics or process automation initiatives",
      "Preferred: Experience mentoring or coaching consultants and analysts"
    ],
    responsibilities: [
      "Lead end-to-end transformation initiatives aligned to Director-defined priorities",
      "Convert broad problem statements into structured hypotheses, workplans, and milestones",
      "Own delivery across cycle time, working capital, operational efficiency, cost, productivity, and service metrics",
      "Track benefits realization and escalate risks early with clarity",
      "Apply Lean Six Sigma Black Belt methodologies (DMAIC, root cause analysis, statistical thinking)",
      "Perform deep process diagnostics across operations, finance, and systems",
      "Identify true constraint points rather than surface-level inefficiencies",
      "Balance analytical rigor with practical, implementable solutions",
      "Design future-state processes, operating models, and control mechanisms",
      "Identify automation and digital enablement opportunities using tools such as RPA, Power Apps, low-code platforms, and AI-enabled solutions",
      "Partner with Technology teams to translate process improvements into system or automation requirements",
      "Leverage data visualization and analytics tools (e.g., Power BI, Tableau, Qlik) to support insight generation and tracking",
      "Ensure solutions are deployable, scalable, and aligned with enterprise standards",
      "Run initiative-level governance including actions, risks, dependencies, and timelines",
      "Engage confidently with senior regional and functional leaders on progress, blockers, and trade-offs",
      "Prepare crisp, executive-ready updates and decision papers for Directors and leadership forums",
      "Act as the single point of accountability for assigned initiatives",
      "Coach Transformation Consultants and Senior PI Analysts on problem structuring, analysis quality, and storytelling",
      "Review and raise the bar on deliverables such as process maps, analyses, dashboards, and presentations",
      "Contribute to internal playbooks, templates, and standard ways of working"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
    postedDate: "2025-12-30"
  },

  {
    id: 25,
    title: "HR Technical Lead – IT & Technology Recruiting",
    location: "Remote",
    type: "Full-time",
    department: "Human Resources",
    experience: "6-10 years",
    slug: "hr-technical-lead-it-technology-recruiting",
    description: "We are seeking an HR Technical Lead – IT & Technology Recruiting to lead and scale our technology hiring efforts. This is a hands-on, player–coach role responsible for both managing technical recruiters and personally closing IT and technology-focused roles. This role requires deep experience hiring for IT, engineering, data, automation, and digital roles, and the ability to balance execution with leadership in a fast-growing environment.",
    skills: {
      nonNegotiable: ["Technical Recruiting", "IT Hiring", "Talent Acquisition Strategy", "Stakeholder Management"],
      negotiable: ["ATS/Recruiting Tools", "Employer Branding", "Recruitment Analytics", "Hiring Process Automation", "Team Leadership"]
    },
    requirements: [
      "6–10 years of experience in IT or technical recruiting",
      "Proven experience managing recruiters while remaining hands-on",
      "Strong background hiring for software, IT, or technology roles",
      "Experience working in fast-paced, high-growth environments",
      "Strong communication and stakeholder management skills",
      "Preferred: Experience hiring for consulting, professional services, BPO, or technology firms",
      "Preferred: Exposure to US-based or global technology hiring",
      "Preferred: Familiarity with ATS tools and recruiting analytics",
      "Preferred: Experience supporting offshore or global delivery models"
    ],
    responsibilities: [
      "Personally own and close IT and technology roles including software engineering, automation, data, AI, and IT systems roles",
      "Conduct sourcing, screening, technical interviews, and offer coordination",
      "Partner with hiring managers to deeply understand technical requirements",
      "Drive full-cycle recruiting from intake to offer acceptance",
      "Ensure a high-quality candidate experience",
      "Lead and manage a team of technical recruiters",
      "Assign and prioritize technical requisitions across the team",
      "Coach recruiters on sourcing strategies and technical screening",
      "Review candidate quality and improve hiring outcomes",
      "Act as escalation point for hard-to-fill roles",
      "Improve technical hiring pipelines and time-to-fill",
      "Establish consistent hiring standards and interview frameworks",
      "Track recruiting metrics and pipeline health",
      "Partner with HR leadership on workforce planning",
      "Ensure compliance with hiring policies and local regulations",
      "Work closely with engineering, IT, automation, and product leaders",
      "Partner with US-based stakeholders on technical hiring needs",
      "Provide regular hiring updates, risks, and recommendations",
      "Support hiring across India and global delivery teams"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
    postedDate: "2025-12-30"
  },
  {
    id: 26,
    title: "Director of Human Resources",
    location: "Remote",
    type: "Full-time",
    department: "Human Resources",
    experience: "12+ years",
    slug: "director-of-human-resources",
    description: "The Director of Human Resources will own the end-to-end HR function and play a critical leadership role in scaling the organization globally, with a primary focus on India-based talent and recruiting operations. The company has a growing recruiting and HR function, and this role will lead and scale talent acquisition while building strong, end-to-end HR practices. This is a hands-on, builder role for someone who has led HR through rapid growth and understands how to balance speed with structure.",
    skills: {
      nonNegotiable: ["HR Strategy", "HR Operations", "Talent Management", "Employee Relations", "HR Compliance"],
      negotiable: ["Organizational Development", "HRIS Systems", "Change Management", "Workforce Planning", "Leadership Coaching"]
    },
    requirements: [
      "12+ years of progressive HR experience",
      "Strong experience leading recruiting and talent acquisition",
      "Prior experience scaling HR in a fast-growing organization",
      "Solid understanding of India HR practices, labor laws, and compliance",
      "Ability to operate hands-on while thinking strategically",
      "Comfort working with global teams and US-based leadership across time zones",
      "Preferred: Experience in professional services, consulting, BPO, or technology-enabled firms",
      "Preferred: Experience building or significantly upgrading HR processes",
      "Preferred: Exposure to global or distributed workforce models",
      "Preferred: Experience supporting offshore delivery organizations"
    ],
    responsibilities: [
      "Lead and scale the recruiting function to support rapid business growth",
      "Define and execute talent acquisition strategy aligned with business priorities",
      "Improve hiring pipelines, quality of hire, and time-to-fill",
      "Partner with business leaders on workforce planning and future hiring needs",
      "Establish consistent hiring standards, interview processes, and candidate experience",
      "Strengthen employer branding and recruiting operations",
      "Own all core HR functions including employee relations, performance management, compensation and benefits, HR policies, compliance, onboarding, and offboarding",
      "Build scalable HR processes and frameworks that support growth",
      "Serve as the primary HR partner for managers and leadership",
      "Ensure alignment between local HR practices and global standards",
      "Build and reinforce a strong employee-first culture",
      "Design programs focused on engagement, retention, and career development",
      "Implement consistent performance management and feedback frameworks",
      "Coach and support managers on people leadership and employee development",
      "Act as a trusted and approachable HR leader for employees at all levels",
      "Partner with US-based leadership on people and talent strategy",
      "Provide insights and recommendations on organizational design and scaling",
      "Identify gaps in HR and recruiting processes and proactively implement improvements",
      "Prepare the HR function for future growth through systems, tools, and structure"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
    postedDate: "2025-12-30"
  },
  // {
  //   id: 27,
  //   title: "Client Success Manager",
  //   location: "Texas (Remote / Work From Home)",
  //   type: "Full-time",
  //   department: "Business",
  //   experience: "3-5 years",
  //   slug: "client-success-manager",
  //   description: "Navsan is seeking a Client Success Manager to serve as the primary point of contact for our clients and a key coordinator across internal teams. This role sits at the intersection of client relationships, pre-sales support, and delivery coordination. While the role is fully remote, occasional travel will be required for client meetings, project kickoffs, and relationship-building activities.",
  //   requirements: [
  //     "3–5 years of experience in Client Success, Account Management, Engagement Management, or Consulting",
  //     "Experience working with offshore or global delivery teams",
  //     "Strong communication and stakeholder management skills",
  //     "Ability to manage multiple engagements simultaneously",
  //     "Willingness to travel occasionally"
  //   ],
  //   responsibilities: [
  //     "Own day-to-day client relationships and act as the primary point of contact",
  //     "Lead regular client check-ins, status updates, and planning calls",
  //     "Coordinate delivery across onshore and offshore teams",
  //     "Translate client needs into clear internal requirements",
  //     "Support pre-sales activities including discovery calls, proposals, and SOWs",
  //     "Identify opportunities for renewals and account expansion",
  //     "Travel occasionally for client meetings and onsite workshops"
  //   ],
  //   benefits: [
  //     "Competitive compensation with performance bonus",
  //     "Health benefits including medical, dental, and vision coverage",
  //     "20 days of paid time off (PTO) annually, in addition to 10 paid company holidays",
  //     "Benefits that grow with tenure, including eligibility for 401(k) match contributions after completion of one year of service",
  //     "Fully remote role with flexibility",
  //     "High visibility and growth opportunity",
  //     "Collaborative and entrepreneurial environment"
  //   ],
  //   culture: [
  //     "Innovation-driven environment",
  //     "Collaborative team culture",
  //     "Work-life balance",
  //     "Regular team building activities"
  //   ],
  //   applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
  //   postedDate: "2025-12-30"
  // },
  {
    id: 28,
    title: "General Ledger Accountant (UK)",
    location: "Remote",
    type: "Full-time",
    department: "Finance",
    experience: "7 Years",
    slug: "general-ledger-accountant-uk",
    description: "We are seeking a highly experienced and detail-oriented GL Accountant to join our finance team. The ideal candidate brings minimum of 7 years of hands - on experience into accounting with proven expertise in Advanced Excel.",
    skills: {
      nonNegotiable: ["General Ledger Accounting", "UK GAAP/IFRS", "Month-end Close", "Reconciliations", "Advanced Excel"],
      negotiable: ["Financial Reporting", "ERP (SAP/Oracle)", "Audit Support", "Intercompany Accounting", "Process Improvement"]
    },
    requirements: [
      "Ability to deal with large amounts of data across many different tables or sources.",
      "Analyze and draw findings and/or recommend action plans.",
      "Advanced Excel (PowerPivot, Power Query, lookups, pivots)",
      "Good communication skills.",
      "Excellent time management skills.",
      "Proven ability to drive problems to closure.",
      "Self-directed, with ability to prioritize multiple tasks.",
      "Bachelor’s degree in Accounting or Finance."
    ],
    responsibilities: [
      "Strong knowledge in Month End Close.",
      "Preparation of journal entries like amortization and accrual.",
      "Balance sheet reconciliation, including bank recon, subledger recon, etc.",
      "Able to research on discrepancies and take proper follow up action to close the gap.",
      "Excellent time management skills.",
      "Proven ability to drive problems to closure."
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
    isNew: true,
    postedDate: "2026-01-08"
  },
  {
    id: 29,
    title: "Lead Analyst - AP & AR",
    location: "Remote",
    type: "Full-time",
    department: "Finance & Accounting",
    experience: "8 - 12 Years",
    slug: "lead-analyst-ap-ar",
    description: "The Lead Analyst – AP & AR will oversee end-to-end accounts payable and accounts receivable operations, ensuring accuracy, compliance, and timely processing of payments and collections. The role requires strong analytical skills, team leadership, stakeholder management, and a continuous improvement mindset to optimize cash flow and financial controls.",
    skills: {
      nonNegotiable: ["Accounts Payable", "Accounts Receivable", "Cash Flow Management", "Financial Controls", "Team Leadership"],
      negotiable: ["ERP Systems", "KPI Reporting", "Process Improvement", "Vendor/Customer Reconciliation", "AP/AR Automation"]
    },
    requirements: [
      "Bachelor’s / master’s degree in commerce, Accounting, or Finance",
      "8–12 years of experience in Accounts Payable and Accounts Receivable",
      "Strong understanding of accounting principles",
      "Hands-on experience with ERP systems (SAP, Oracle, NetSuite, etc.)",
      "Advanced knowledge of MS Excel, SQL and reporting tools",
      "Strong analytical, problem-solving, and decision-making skills",
      "Excellent communication, leadership, and stakeholder management abilities"
    ],
    responsibilities: [
      "### Accounts Payable (AP)",
      "Lead end-to-end Accounts Payable operations including invoice processing, 2-way/3-way matching, and payment cycles",
      "Review and approve invoices and high-value vendor payments",
      "Ensure timely vendor payments while maintaining cash flow efficiency",
      "Manage vendor escalations, discrepancies, and SLA adherence",
      "Ensure compliance with SOX and internal control requirements",
      "Oversee AP reconciliations, accruals, and month-end close activities",
      "### Accounts Receivable (AR)",
      "Lead Accounts Receivable operations including billing, collections, and cash application",
      "Monitor AR aging and drive reduction in Days Sales Outstanding (DSO)",
      "Handle customer escalations, disputes, and payment negotiations",
      "Ensure accurate revenue accounting and AR reconciliations",
      "Prepare and analyze collection and cash flow reports",
      "### Leadership & Process Improvement",
      "Act as a subject matter expert (SME) for AP & AR processes",
      "Guide and mentor junior analysts and team members",
      "Drive process improvements, standardization, and automation initiatives",
      "Maintain MIS, dashboards, and management reports",
      "Support internal and external audits and ensure timely closure of findings",
      "Collaborate with procurement, sales, treasury, and senior stakeholders"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
    isNew: true,
    postedDate: "2026-01-09"
  },

  {
    id: 32,
    title: "Data Migration Expert/Lead",
    location: "Remote",
    type: "Full Time",
    department: "IT",
    experience: "5 Years",
    slug: "data-migration-expert/lead",
    description: "This role will responsible for planning, executing, and validating the migration of data from legacy systems to modern platforms. This role ensures data integrity, quality, and consistency throughout the migration lifecycle while minimizing disruption to business operations. The expert will work closely with business stakeholders, project teams, data architects, and technical teams to deliver seamless, accurate, and secure data transitions.",
    skills: {
      nonNegotiable: ["Data Migration Strategy", "ETL", "SQL", "Data Mapping & Validation", "Data Cleansing", "ERP/SAP Migration"],
      negotiable: ["Cloud Data Platforms (Azure/AWS/GCP)", "Python/Shell Scripting", "Data Governance", "Master Data Management", "Data Reconciliation", "Agile Delivery"]
    },
    requirements: [
      "Proven experience (over 5 years) in data migration roles.",
      "Strong technical expertise in databases, data integration, and data migration tools.",
      "Experience with ETL tools for extracting data from SQL databases.",
      "Strong ability to write SQL scripts.",
      "Proficiency in performing data extraction, transformation, cleansing, validation, file uploads, and data loading to SAP.",
      "Experience in data migration within S/4HANA or other ERP systems.",
      "Experience with cloud data platforms such as Azure, AWS, or Google Cloud.",
      "Proficiency in SQL, Python, or Shell scripting for data manipulation and automation.",
      "Knowledge of data modelling, data quality, and master data management principles.",
      "Strong analytical and problem-solving skills with attention to detail.",
      "Excellent communication skills and ability to collaborate across technical and non-technical teams.",
      "Experience migrating data between on-premise and cloud systems.",
      "Experience with ERP, CRM, or enterprise data migration projects (e.g., SAP, Salesforce, Dynamics).",
      "Project management or Agile delivery experience."
    ],
    responsibilities: [
      "Design and implement end-to-end data migration strategies and plans.",
      "Conduct detailed data assessments, data mapping, and transformation analysis.",
      "Validate migrated data to ensure completeness, accuracy, and integrity.",
      "Collaborate with business and technical teams to define migration scope, timelines, and quality standards.",
      "Identify and mitigate risks, dependencies, and issues throughout the data migration process.",
      "Develop scripts, automation, and documentation to streamline migration activities.",
      "Support data cleansing, reconciliation, and post-migration verification activities.",
      "Provide regular migration progress reports and communicate status to stakeholders.",
      "Ensure compliance with data governance, security, and privacy policies during migration."
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
    isNew: true,
    postedDate: "2026-01-22"
  },
  {
    id: 33,
    title: "CRM & ERP Support Specialist",
    location: "Remote / Hybrid(6:30 PM - 3:30 AM)",
    type: "Full Time",
    department: "IT",
    experience: "5–10 years",
    slug: "crm-erp-support-specialist",
    description: "We are seeking a CRM & ERP Support Specialist to provide functional and light technical support across our core business systems. This role is not a developer position and not traditional IT or O365 support. The focus is on system configuration support, troubleshooting, user assistance, and basic workflow analysis.The ideal candidate will work closely with operations and business teams, acting as a bridge between technical systems and end users by translating complex concepts into clear, practical guidance.",
    skills: {
      nonNegotiable: ["CRM Support", "ERP Support", "System Configuration", "Troubleshooting", "Workflow Analysis"],
      negotiable: ["Sage Intacct", "AccuLynx/Salesforce/JobNimbus", "Smartsheet", "Zoho Desk", "User Training and Enablement"]
    },
    requirements: [
      "4-8 years of relevant experience supporting CRM and/or ERP platforms (more experienced candidates will also be considered).",
      "Strong functional understanding of business systems, workflows, and operational processes.",
      "Proven experience supporting system configurations, troubleshooting issues, and handling end-user queries.",
      "Ability to analyze existing processes and recommend practical, scalable system improvements.",
      "Comfortable working directly with business and operations stakeholders to gather requirements and resolve issues.",
      "Excellent verbal and written communication skills.",
      "Ability to explain technical concepts clearly in plain, non-technical language.",
      "Strong problem-solving mindset with high attention to detail.",
      "High level of approachability, professionalism, and interpersonal skills.",
      "Comfortable working independently in a remote or hybrid environment.",
      "Ability to collaborate effectively across technical and non-technical teams.",
      "Self-motivated, organized, and capable of managing priorities with minimal supervision.",
      "### Core Systems & Tools",
      "Sage Intacct – ERP",
      "Smartsheet – Project Management",
      "AccuLynx – CRM",
      "Experience with Salesforce or JobNimbus is highly preferrable",
      "ServiceTitan – Potential future CRM",
      "Zoho Desk – Ticketing and issue tracking"

    ],

    responsibilities: [
      "Provide day-to-day functional and technical support for CRM and ERP platforms.",
      "Support system configuration, user access, and basic setup changes.",
      "Troubleshoot system issues and resolve user queries in a timely manner.",
      "Analyze and support light workflow improvements across platforms.",
      "Act as a point of contact for operations teams regarding system-related questions.",
      "Document issues, resolutions, and process improvements using the ticketing system.",
      "Participate in regular meetings and collaborate with cross-functional teams.",
      "Support future system implementations or transitions as needed."
    ],


    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
    isNew: true,
    postedDate: "2026-01-23"
  },

  {
    id: 34,
    title: "Communication and Content Lead",
    location: "Remote",
    type: "Full Time",
    department: "IT",
    experience: "6–10 years",
    slug: "communication-and-content-lead",
    description: "Communication and Content Lead is responsible for designing and delivering clear,engaging, and high-quality internal communications and content across enterprise-wide initiatives. This role partners with leadership and program teams to translate complex work into compelling narratives using presentations, digital platforms, video, and targeted communications",
    skills: {
      nonNegotiable: ["Internal Communications", "Content Writing", "PowerPoint Storytelling", "SharePoint"],
      negotiable: ["Video Editing", "Survey and Sentiment Analysis", "Canva/Figma/Adobe", "Stakeholder Communication", "Change Communications"]
    },
    requirements: [
      "6–10 years of experience in internal communications, content, or related roles",
      "Exceptional PowerPoint and visual storytelling skills",
      "Strong written communication skills",
      "Hands-on SharePoint experience handling company SharePoint home page",
      "Ability to work across stakeholders and initiatives",

      "### Preferred Qualifications",
      "Experience supporting enterprise IT or operating model initiatives",
      "Video creation/editing experience",
      "Familiarity with survey tools and sentiment analysis",
      "Basic design tool experience (Canva, Figma, Adobe)",

      "### Success Profile",
      "Creative but structured",
      "Comfortable with ambiguity",
      "High attention to quality and consistency",
      "Strong audience-focused mindset"
    ],
    responsibilities: [
      "Lead organization-wide communications for major initiatives.",
      "Create executive-ready PowerPoint presentations and visual storytelling content.",
      "Manage and curate SharePoint sites and digital content experiences.",
      "Produce short, professional-quality videos (interviews, explainers, highlights).",
      "Draft clear and structured internal communications.",
      "Design and deploy surveys; perform basic sentiment analysis.",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
    isNew: true,
    postedDate: "2026-01-30"
  },

  {
    id: 35,
    title: "AI Developer",
    location: "Remote (3 PM - 12 AM IST)",
    type: "Full Time",
    department: "Technology / AI & Automation",
    experience: "10+ years in software development, with at least 3+ years in AI/ML",
    slug: "ai-developer",
    description: "We are seeking an experienced AI Developer to join our team and contribute to enterprise-level AI solutions. The ideal candidate will be a self-driven professional who can independently manage projects, collaborate effectively with IT partners, and drive technical conversations with internal teams and stakeholders. This role requires a strong blend of technical expertise, communication skills, and the ability to translate business requirements into AI-powered solutions.",
    skills: {
      nonNegotiable: ["Python", "AI/ML", "GenAI & LLMs", "REST/FastAPI", "Cloud AI Deployment", "Stakeholder Communication"],
      negotiable: ["TensorFlow/PyTorch/scikit-learn", "LangChain/RAG/Prompt Engineering", "MLOps", "SQL/NoSQL", "Docker/Kubernetes"]
    },
    requirements: [
      "Minimum 10 years of overall software development experience",
      "At least 3 years of hands-on experience in GENAI, Artificial Intelligence and Machine Learning",
      "Strong programming skills in Python, with experience in AI/ML frameworks (TensorFlow, PyTorch, scikit-learn, etc.)",
      "Experience with Large Language Models (LLMs) and Generative AI technologies (OpenAI, Azure OpenAI, or similar)",
      "Proficiency in cloud platforms (Azure, AWS, or GCP) for AI/ML deployments",
      "Strong understanding of data engineering, ETL processes, and database technologies (SQL/NoSQL)",
      "Experience with API development and integration (REST, FastAPI, etc.)",
      "Excellent communication and stakeholder management skills",
      "Proven ability to work independently with minimal supervision",
      "Bachelor's degree in Computer Science, Engineering, or related field (Master's preferred)",
    ],
    responsibilities: [
      "Design, develop, and deploy AI/ML models and solutions for enterprise applications",
      "Lead technical discussions with IT partners, vendors, and internal stakeholders",
      "Independently manage end-to-end AI project lifecycles from conception to production",
      "Collaborate with cross-functional teams to understand business requirements and translate them into technical solutions",
      "Evaluate and recommend AI technologies, tools, and platforms for organizational needs",
      "Implement best practices for MLOps, model monitoring, and performance optimization",
      "Conduct proof-of-concepts (POCs) and technical assessments of AI/ML platforms",
      "Mentor junior developers and contribute to knowledge sharing within the team",
      "Document technical architectures, design decisions, and implementation guidelines",
      "Stay updated with latest trends in AI/ML and propose innovative solutions",
      "### Preferred Skills",
      "Experience in insurance/finance domain",
      " Knowledge of LangChain, Langfuse, or similar LLM frameworks",
      "Exposure to Prompt Engineering and Retrieval-Augmented Generation (RAG)",
      "Experience with Azure services (Azure OpenAI, Azure ML, Cognitive Services)",
      "Understanding of containerization (Docker, Kubernetes) and CI/CD pipelines , Biceps",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
    isNew: true,
    postedDate: "2026-02-04"
  },

  {
    id: 36,
    title: "AR Cash Application Specialist",
    location: "Remote - US (5:30 PM - 2:30 AM)",
    type: "Full Time",
    department: "Finance",
    experience: "5+ years",
    slug: "ar-cash-application-specialist",
    description: "Under the direction of the Cash Application Supervisor, the Cash Application Specialist will be responsible for accurately reconciling and posting daily customer payments (EFT/ACH, wires and checks) to Accounts Receivable (AR), in compliance with Company policies, GAAP and SOX controls. Key skills include a high attention to detail and analysis with a strong problem-solving aptitude.",
    skills: {
      nonNegotiable: ["AR Cash Application", "Payment Reconciliation", "ERP Posting", "GAAP/SOX Compliance"],
      negotiable: ["Advanced Excel", "Bank Reconciliation", "Billing/Collections Collaboration", "Journal Entries", "Reporting and Analysis"]
    },
    requirements: [
      "5+ years in Accounting with focus on Accounts Receivable Cash application",
      "Bachelor’s degree in finance, Accounting, or Business.",
      "Proficiency in ERP systems (SAP, Oracle), MS Excel and Outlook.",
      "Strong analytical skills; accurate adherence to Company’s financial policies and procedures; and high level of attention to detail. ",
      "Excellent English written and verbal communication for interacting with customers and internal teams.",
      "SAP or other project-based ERP, preferably experience withDeltek Vision",
      " MS Excel, Outlook  ",
    ],
    responsibilities: [
      "Accurately record and apply high-volume and complex daily customer payments to invoices through sub-ledger accounting.",
      "Post journal entries to ERP system on a timely basis in accordance with daily and monthly financial goals and deadlines.",
      "Effectively resolve discrepancies, thoroughly investigate unknown/unapplied payments, and ensure accurate financial reporting.",
      "Collaborate with Billing and Collections teams to identify incomplete payment remittances.",
      "Reconcile daily bank activity with AR postings.",
      "Proactively investigate and resolve any payment discrepancies including unknown, unapplied, misapplied, or short payments.",
      "Actively contributes to efficiency by maintaining compliance with internal controls, GAAP and SOX requirements, and confidentiality standards.",
      "Prepare accurate ad-hoc reporting and projects as requested by the Cash Application management. ",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
    isNew: true,
    postedDate: "2026-02-05"
  },

  {
    id: 37,
    title: "Network Administrator",
    location: "Remote (3 PM - 12 AM IST)",
    type: "Full Time",
    department: "IT",
    experience: "10 years",
    slug: "network-administrator",
    description: "We are seeking a highly experienced Senior Network Administrator with a strong focus on cloud-based infrastructure, particularly Microsoft Azure. The ideal candidate will bring 10+ years of enterprise network administration experience, with at least 3 years of hands-on expertise in Palo Alto firewalls and application-layer security.This role is pivotal in supporting our cloud-first strategy and leading network transition/migration projects, ensuring secure, scalable, and high-performing connectivity across a global footprint.Experience with Palo Alto's extended security suite, including GlobalProtect, Prisma Access,Panorama, Cortex Data Lake, and DLP, is essential.",
    skills: {
      nonNegotiable: ["Azure Networking", "Palo Alto Firewalls", "PCNSE Certification", "Network Security", "VPN/GlobalProtect", "Zero Trust Architecture"],
      negotiable: ["Prisma Access/Panorama/Cortex", "WAF (Cloudflare)", "ExpressRoute/Hybrid Connectivity", "Network Monitoring", "Disaster Recovery Planning"]
    },
    requirements: [
      "Minimum 10 years in enterprise network administration.",
      "Palo Alto Networks Certified Network Security Engineer (PCNSE) is mandatory.",
      "Hands-on experience with virtual Palo Alto firewalls and GlobalProtect.",
      "Proven track record in network migration projects (preferably cloud or hybrid environments)",
      "Strong understanding of application-layer security and Zero Trust frameworks.",
      "Advanced knowledge of cloud networking components andarchitecture. (Azure preferred)",
      "Demonstrated success in leading or supporting network transition efforts to Azure or hybrid environments.",
      "Deep experience with Palo Alto firewalls, Panorama, Prisma Access,GlobalProtect, Cortex Data Lake, and DLP.",
      "Proven experience configuring Layer 7 security and App-ID,Content-ID, and User-ID policies.",
      "Hands-on with WAF deployments (CloudFlare or 3rd party) and Zero Trust frameworks.",
      "Configuration and support of GlobalProtect VPN for secure, scalable remote workforce access."
    ],
    responsibilities: [
      "Architect, deploy, and manage Azure-based network infrastructure, including VNets, Azure Firewall, Application Gateway, NSGs, Load Balancers, Private Endpoints, VPN, and ExpressRoute.",
      "Support and lead network migration and transformation initiatives, especially from on-prem to Azure cloud.",
      "Configure, manage, and optimize Palo Alto Networks firewalls, including centralized management using Panorama and security extension through Prisma Access.",
      "Deploy and administer GlobalProtect for secure remote access across endpoints and locations.",
      "Leverage Cortex Data Lake for threat visibility and log analytics; implement and monitor Data Loss Prevention (DLP) policies.",
      "Collaborate with cloud, application, and infrastructure teams to align networking with business services.",
      "Implement modern Zero Trust architectures, segmentation, and secure access controls.",
      "Monitor network health, security events, and performance using Azure Monitor, Network Watcher, or third-party tools.",
      "Manage connectivity and SLAs with ISPs and cloud providers globally.",
      "Contribute to business continuity planning with cloud-first DR and failover strategies."
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
    isNew: true,
    postedDate: "2026-02-05"
  },

  {
    id: 38,
    title: "Senior Data & MIS Analyst",
    location: "Remote (5:30 PM - 2:30 AM IST)",
    type: "Full Time",
    department: "IT Services & Consulting",
    experience: "10+ years",
    slug: "senior-data-mis-analyst",
    description: "A highly skilled Data & MIS Analyst responsible for managing, transforming, and analysing large volumes of data across Excel, MS Access, SQL databases, and other enterprise systems. This role will serve as a critical link between operational data and executive decision‑making, delivering accurate, timely, and actionable insights to C‑level leadership on a daily basis.",
    skills: {
      nonNegotiable: ["Advanced Excel", "Power Query", "Power Pivot", "SQL", "MS Access", "Data Analysis", "MIS Reporting"],
      negotiable: ["Power BI/Tableau", "VBA", "Data Automation", "Data Modeling", "Executive Dashboards", "Forecasting and KPI Analysis"]
    },
    requirements: [
      "Expert‑level proficiency in Excel (Power Query, Power Pivot, advanced formulas, VBA preferred).",
      "Strong experience with MS Access including database design, queries, forms, and automation.",
      "Advanced SQL skills with hands‑on experience querying large relational databases.",
      "Ability to work with large, complex datasets and deliver high‑quality insights under tight timelines.",
      "Strong communication skills with the ability to present data to senior leadership.",
      "Experience with BI tools (Power BI, Tableau) is an advantage",
    ],
    responsibilities: [
      "### Data Management & Integration",
      "Consolidate and manage large datasets from Excel, MS Access, SQL databases, and internal systems.",
      "Build automated data pipelines to reduce manual effort and improve data accuracy.",
      "Ensure data integrity, consistency, and quality across all reporting sources.",

      "### Advanced Analytics & SQL Expertise",
      "Write complex SQL queries, stored procedures, and views to extract, transform, and analyse data from multiple databases.",
      "Optimise queries for performance and reliability when dealing with high-volume datasets.",
      "Develop analytical models to identify trends, risks, and opportunities.",

      "### Reporting & Executive Dashboards",
      "Create daily, weekly, and monthly MIS dashboards tailored for C-suite consumption.",
      "Present insights in a clear, concise, and business-focused manner to support strategic decisions.",
      "Build automated reporting frameworks using Excel (Power Query, Power Pivot), Access, and BI tools.",

      "### Business Insights & Decision Support",
      "Translate raw data into meaningful insights that drive operational efficiency and business growth.",
      "Provide scenario analysis, forecasting, and KPI tracking for leadership teams.",
      "Partner with cross-functional teams to understand data needs and deliver customised reports.",

      "### Process Improvement & Automation",
      "Identify gaps in current reporting processes and implement automation to streamline workflows.",
      "Introduce best practices for data governance, documentation, and version control.",
      "Support digital transformation initiatives by modernising legacy reporting systems."

    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work flexibility",
      "Professional development budget"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture",
      "Work-life balance",
      "Regular team building activities"
    ],
    applyLink: "https://forms.gle/u4JCu4yaYxPFLLRJ8",
    isNew: true,
    postedDate: "2026-02-05"
  },

];
