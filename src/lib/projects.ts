/**
 * Anonymized project case studies, drawn from resume project highlights.
 * Customer names are kept generic to respect confidentiality.
 */

export type Project = {
  slug: string;
  industry: string;
  title: string;
  role: string;
  era: string;
  outcome: string;
  details: string[];
};

export const projects: Project[] = [
  {
    slug: "aerospace-iaas",
    industry: "Commercial & Military Aerospace Manufacturer",
    title: "Infrastructure-as-a-Service private cloud, with tiered capacity policies",
    role: "Co-Lead Architect",
    era: "VMware Professional Services era",
    outcome:
      "Higher utilization and density, identified system waste, and informed capital purchase timing through formal capacity management policy.",
    details: [
      "Co-designed and deployed the customer's IaaS private cloud platform.",
      "Built capacity management policies for tiered IaaS services.",
      "Developed thresholds and processes that identified system waste and drove higher utilization and density.",
    ],
  },
  {
    slug: "beverage-operations",
    industry: "International Beverage Company",
    title: "Capacity management workstream within an IT operational transformation",
    role: "Lead Architect, Capacity Workstream",
    era: "VMware Professional Services era",
    outcome:
      "Single pane of glass across monitoring systems; customer staff trained and equipped to own day-2 operations.",
    details: [
      "Integrated multiple monitoring systems into a single pane of glass.",
      "Ran process discovery and improvement workshops.",
      "Trained customer staff on day-2 operations and standing up new capabilities.",
    ],
  },
  {
    slug: "energy-services-adoption",
    industry: "Energy Services Conglomerate",
    title: "Root-cause analysis turned into enterprise-wide platform adoption",
    role: "Lead Architect",
    era: "VMware Professional Services era",
    outcome:
      "Customer purchased and adopted the full suite for incident and problem management following the trial.",
    details: [
      "Identified root cause of severe performance issues in a commercial software service.",
      "Used vCenter Operations Manager (now Aria Operations) during a trial engagement.",
      "Outcome led to customer's purchase and enterprise-wide adoption of the full suite.",
    ],
  },
  {
    slug: "commercial-bank-cost-takeout",
    industry: "Global Commercial Bank",
    title: "Post-2008 IT cost-takeout via virtualization and storage consolidation",
    role: "Discovery & Reduction Lead",
    era: "NetApp era",
    outcome:
      "Reduced ongoing operational expenditure through array retirement and storage consolidation.",
    details: [
      "Led discovery and reduction strategy for IT operational expenditure following the global financial crisis.",
      "Identified virtualization and consolidation opportunities across the estate.",
      "Retired older arrays and consolidated storage to reduce ongoing cost.",
    ],
  },
  {
    slug: "communications-storage-mgmt",
    industry: "National Communications Provider",
    title: "Storage management operationalization across a regionally dispersed business",
    role: "Program Lead",
    era: "NetApp era",
    outcome:
      "IT leadership gained full visibility into consumption; regional teams equipped to manage availability incidents.",
    details: [
      "Led an 18-month, multi-line-of-business program to deploy and operationalize a storage management infrastructure.",
      "Spanned a regionally dispersed operating model.",
      "Delivered consumption visibility and regional incident management capability.",
    ],
  },
  {
    slug: "info-services-data-center-refresh",
    industry: "Global Information Services Company",
    title: "$20M data center technical refresh — Microsoft apps & storage management",
    role: "Architectural Lead",
    era: "NetApp era",
    outcome:
      "Right-sized Microsoft application infrastructure with backup/recovery tuned to RTO/RPO; full monitoring of availability, performance, and capacity trends.",
    details: [
      "Sized Exchange, SharePoint, and SQL Server environments.",
      "Architected backup/recovery to meet RTO and RPO targets.",
      "Designed monitoring for availability, performance, and capacity trends.",
    ],
  },
];
