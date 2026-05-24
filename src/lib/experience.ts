/**
 * Structured experience data — drawn from Joe's 2026 resume.
 * Edit here to update the Experience page.
 */

export type Role = {
  company: string;
  location: string;
  title: string;
  dates: string;
  summary: string;
  highlights: string[];
};

export const currentRole: Role = {
  company: "Broadcom (formerly VMware)",
  location: "Palo Alto, CA / Remote — Houston, TX",
  title: "Platform Adoption Services Architect",
  dates: "2024 — Present",
  summary:
    "Lead customer adoption of the VMware Cloud Foundation (VCF) platform across the TOLA and Midwest regions. Engage customers post-purchase to translate Broadcom and VMware investments into rapid, measurable value — orchestrating delivery across internal services, customer-purchased professional services, and partner resources.",
  highlights: [
    "Helped 24+ enterprise customers successfully adopt and implement VCF, combining internal Broadcom and partner services to accelerate time-to-value.",
    "Run technical and outcome-focused workshops with customer leadership to assess current footprint, define future state, and produce actionable adoption roadmaps.",
    "Translate VCF capabilities into customer business outcomes — platform consolidation, operational efficiency, developer productivity, and risk reduction.",
    "Orchestrate cross-organizational delivery across Broadcom services, customer teams, and certified partners to keep adoption engagements on track.",
    "Serve as the customer's trusted technical advisor through the adoption journey and feedback channel back into Broadcom services leadership.",
  ],
};

export const previousRoles: Role[] = [
  {
    company: "Broadcom (formerly VMware)",
    location: "Houston, TX",
    title: "Senior Staff Business Solution Strategist",
    dates: "2016 — 2024",
    summary:
      "Regional strategist for Enterprise and Strategic accounts across TOLA (Texas, Oklahoma, Louisiana, Arkansas). Partnered with AEs, SAs, and CSMs to translate customer business priorities into multi-year transformation strategies aligned to the Broadcom/VMware portfolio.",
    highlights: [
      "Led executive-level business case development, translating customer KPIs (TCO, time-to-market, developer productivity) into multi-year value narratives that justified strategic investments.",
      "Anchored CIO and CTO-level customer engagements — framing technology decisions in the language of finance, risk, and competitive advantage.",
      "Coached and enabled account teams on outcome-based selling and strategic deal construction; mentored newer strategists across adjacent regions.",
      "Led account planning and territory strategy sessions for the region's largest opportunities.",
      "Influenced portfolio messaging by feeding regional customer insights back into product marketing and sales enablement.",
    ],
  },
  {
    company: "Broadcom (formerly VMware)",
    location: "Houston, TX",
    title: "Senior Staff Solutions Architect, Pre-Sales",
    dates: "2014 — 2016",
    summary:
      "Pre-sales technical lead for named Strategic and Enterprise accounts. Transitioned from delivery into pre-sales to bring real implementation experience into the customer's buying conversation.",
    highlights: [
      "Owned technical strategy for a portfolio of high-value customers — discovery, solution design, executive briefings, POCs, and competitive positioning.",
      "Built services-led sales motions that paired licensing decisions with the operational transformation work required to realize value.",
      "Acted as the technical conscience in deal pursuit, ensuring proposed architectures were deliverable, supportable, and aligned to the customer's operating model.",
    ],
  },
  {
    company: "VMware",
    location: "Houston, TX",
    title: "Senior Consulting Architect, Professional Services",
    dates: "2012 — 2014",
    summary:
      "Senior architect in VMware Professional Services, designing and delivering enterprise private cloud (SDDC) implementations for Fortune 500 customers. Full-stack architect responsible for the working private cloud at handoff — compute, storage, networking, automation, operations, and cost management.",
    highlights: [
      "Architected and deployed private clouds spanning vSphere, vSAN, NSX, vRealize/Aria Automation, Aria Operations, Aria Log Insight, vRealize Business for Cloud, and Site Recovery Manager.",
      "Mentored colleagues across the Cloud Management practice and contributed to delivery methodology, intellectual capital, and Service Delivery Kits used by field consultants globally.",
      "Engaged with customer operations leadership on capacity, performance, incident, and problem management process integration.",
    ],
  },
  {
    company: "NetApp",
    location: "Sunnyvale, CA",
    title: "Professional Services Architect / Program Manager",
    dates: "Oct 2005 — Jul 2012",
    summary:
      "Global Professional Services lead for NetApp's management, operations, and orchestration/automation products. Program-managed delivery methodology, training, and field readiness for OnCommand Insight and Workflow Automator.",
    highlights: [
      "Built and ran the global enablement program for storage management consultants — curriculum, certification, metrics, and corrective-action plans.",
      "Acted as escalation SME for field engineers, consultants, account teams, and pre-sales engineers across the regions.",
      "Facilitated customer workshops mapping deployed solutions into ITIL processes — capacity, availability, financial, incident, problem, and configuration management.",
    ],
  },
  {
    company: "Avanade",
    location: "Houston, TX",
    title: "Systems Engineer",
    dates: "Jul 2004 — Oct 2005",
    summary:
      "Led multiple Avanade and joint Accenture/Avanade engagements focused on enterprise Microsoft platforms, directory services, and infrastructure compliance.",
    highlights: [
      "Architected consolidated messaging platform and migration tooling for a 50,000-mailbox airline.",
      "Designed consolidated directory service strategy across dozens of user repositories for a major energy services company.",
      "Led a joint Accenture/Avanade team bringing global Windows infrastructure into Sarbanes-Oxley compliance for a global energy provider.",
    ],
  },
  {
    company: "IBM Global Services",
    location: "Houston, TX",
    title: "Advisory IT Consultant",
    dates: "Sep 2000 — Jul 2004",
    summary:
      "Senior consultant for Microsoft messaging and operations management products, leading multi-customer engagements across messaging migration, consolidation, and global deployment.",
    highlights: [
      "Architected messaging consolidation for a major semiconductor manufacturer, migrating from Lotus Domino to Microsoft Exchange.",
      "Led engineer team in Exchange 5.5 to Exchange 2000 migration for a national call center operator.",
      "Led global team deploying server solutions across data centers in the US, France, and Singapore.",
    ],
  },
];

export const competencies = {
  "Strategic Sales & GTM": [
    "Executive Business Case Development",
    "Value Engineering",
    "Outcome-Based Selling",
    "Account Planning",
    "Territory Strategy",
    "CXO Engagement",
    "Deal Strategy & Influence",
  ],
  "Enablement & Leadership": [
    "Account Team Coaching (AEs, SAs, CSMs)",
    "Strategist Mentorship",
    "Cross-Functional Collaboration",
    "Customer Workshop Facilitation",
    "Thought Leadership",
  ],
  "Private & Hybrid Cloud": [
    "VMware Cloud Foundation (VCF)",
    "vSphere · vSAN · NSX",
    "Aria Operations / Automation / Logs / Business",
    "Site Recovery Manager",
    "Tanzu",
  ],
  "IT Operations & Process": [
    "ITIL v4",
    "Capacity & Availability Management",
    "Incident & Problem Management",
    "ITSM Integration",
    "FinOps / Showback & Chargeback",
  ],
  "Architecture & Frameworks": [
    "TOGAF",
    "Enterprise Architecture",
    "Reference Architecture Design",
    "Solution Sizing",
    "Multi-Site DR Design",
  ],
};

export const industriesServed = [
  "Energy & Utilities",
  "Financial Services",
  "Telecommunications",
  "Manufacturing",
  "Public Sector",
  "Entertainment",
  "Healthcare",
];

export const certifications = [
  "VMware Certified Professional — Data Center Virtualization (VCP-DCV)",
  "ITIL v4 Foundation",
  "TOGAF 9 Foundation",
  "MCSE — Windows Server 2003 / 2000 (legacy)",
];

export const recognitions = [
  {
    title: "$200M / 5-year strategic transformation deal",
    detail:
      "Architected the executive business case for the largest deal in territory — quantifying $1.2B+ in customer business value ($300M developer efficiency, $400M reduced hardware costs, $100M cloud operations efficiency).",
  },
  {
    title: "Broadcom/VMware President's Club, 2020",
    detail:
      "Top-tier recognition for individual contributors who materially influenced strategic revenue.",
  },
  {
    title: "Strategist of the Year, 2019",
    detail:
      "Named top Business Solution Strategist company-wide; Strategist of the Quarter on two additional occasions.",
  },
];
