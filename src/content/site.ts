import type {
  SiteConfig,
  Service,
  LadderRung,
  MethodStep,
  Project,
  TeamMember,
  Faq,
  TrustItem,
} from "./types";

// ---------------------------------------------------------------------------
// SITE CONFIG — brand constants. Edit here once; used across the whole site.
// ---------------------------------------------------------------------------
export const siteConfig: SiteConfig = {
  name: "Altamar Consulting",
  legalEntity: "Altamar Consulting — [CONFIRM legal entity line]",
  tagline: "AI for owner-led businesses that actually have to make it work.",
  hook: "Operator-led AI advisory for SMEs in Ireland and the UK.",
  description:
    "Altamar Consulting helps owner-led SMEs in Ireland and the UK adopt AI that actually works — strategy and custom builds, delivered by operators, not theorists.",
  url: "https://altamarconsulting.ie", // [CONFIRM final domain]
  contactEmail: "hello@altamarconsulting.ie", // [CONFIRM]
  bookingUrl: "#contact", // [CONFIRM — Calendly / Cal.com link]
  formEndpoint: "https://formspree.io/f/CONFIRM", // [CONFIRM — form endpoint]
  linkedin: {
    stephen: "https://www.linkedin.com/in/stephen-browne-a6b153/",
    simon: "https://www.linkedin.com/in/simon-lewis-7b212a2a/",
  },
};

// ---------------------------------------------------------------------------
// WHAT WE DO — two pillars
// ---------------------------------------------------------------------------
export const services: Service[] = [
  {
    pillar: "AI Strategy & Implementation",
    lead: "Stephen Browne",
    summary:
      "Roadmaps, prioritisation and governance — then getting the first use cases genuinely live. We sequence the highest-leverage work and stay until it runs.",
    points: [
      "A written roadmap of your 3–5 highest-leverage use cases",
      "Sequencing, risk and a governance model you can stand over",
      "Hands-on through the first deployments — not a deck and a handshake",
    ],
  },
  {
    pillar: "Agentic & Custom Builds",
    lead: "Simon Lewis",
    summary:
      "Custom agents, automations, MCP connectors and integrations on your own stack — the systems that turn a strategy into software your team uses every day.",
    points: [
      "Custom agents and automations built around your processes",
      "MCP connectors and integrations into your ERP and line-of-business tools",
      "Enrichment and data pipelines feeding human-reviewed workflows",
    ],
  },
];

// ---------------------------------------------------------------------------
// HOW WE WORK — engagement ladder (sequential, enter at any rung)
// ---------------------------------------------------------------------------
export const engagementLadder: LadderRung[] = [
  {
    step: 1,
    title: "AI Roadmap",
    duration: "2–4 weeks · on-site + remote",
    summary:
      "A written strategy: your 3–5 highest-leverage use cases, sequencing, risks, governance and a 12-month plan. Fixed fee.",
  },
  {
    step: 2,
    title: "Get It Working",
    duration: "4–8 weeks",
    summary:
      "Implementation sprints on your top 1–2 use cases. The goal is one thing genuinely working, so the organisation believes.",
  },
  {
    step: 3,
    title: "Custom Builds",
    summary:
      "Design and build of custom agents, automations, MCP connectors and integrations on your own tools.",
  },
  {
    step: 4,
    title: "Train the Owner",
    summary:
      "Structured 1:1 upskilling for the owner/CEO: prompting, tool selection, agentic workflows, governance, and how to teach your team.",
  },
  {
    step: 5,
    title: "Ongoing Advisory",
    summary:
      "Monthly or quarterly check-ins to keep momentum and surface the next use cases.",
  },
];

// ---------------------------------------------------------------------------
// SIGNATURE METHOD — "10 Steps to AI Mastery"
// Labels are placeholders. DO NOT invent — Stephen supplies the final ten.
// ---------------------------------------------------------------------------
export const methodSteps: MethodStep[] = Array.from({ length: 10 }, (_, i) => ({
  step: i + 1,
  label: `[CONFIRM — step ${i + 1} label]`,
}));

export const methodPlaybookUrl = "#contact"; // [CONFIRM — link to the full playbook]

// ---------------------------------------------------------------------------
// SELECTED WORK — anonymised case studies. Lead with the outcome.
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    outcome: "AI embedded across sales, finance, ops and governance — no added headcount",
    descriptor: "Our own tech-distribution business",
    sector: "B2B distribution",
    flagship: true,
    challenge:
      "Adopt AI across a whole owner-led business without hiring, and without it fizzling out after the first demo.",
    whatWeDid:
      "A full internal AI strategy: project architecture, a single-source-of-truth skills library, a financial-data security model, a traffic-light data policy, and the 10-step adoption ladder — rolled out across six daily users.",
    tags: ["Strategy", "Governance", "Adoption"],
    lead: "Stephen Browne",
  },
  {
    outcome: "Manual document cross-checking removed for a state agency",
    descriptor: "State agency",
    sector: "Public sector",
    challenge:
      "Caseworkers manually checked emailed document folders against legislative criteria — slow and inconsistent.",
    whatWeDid:
      "A Copilot + SharePoint + Power Apps agent that reviews incoming document folders against the criteria, flags gaps and logs results to a shared workspace.",
    tags: ["Agentic build", "Compliance", "Microsoft 365"],
    lead: "Simon Lewis",
    confirm: "Representative of live demand — keep anonymised.",
  },
  {
    outcome: "Board-pack prep cut from days to a scheduled, repeatable workflow",
    descriptor: "Irish tech distributor",
    sector: "B2B distribution",
    challenge:
      "Monthly board reporting pulled data from several systems by hand and ate days of senior time.",
    whatWeDid:
      "A workflow that consolidates bank statements, ERP sales data, stock and meeting notes into a board-quality monthly summary, backed by a working-capital discipline framework.",
    tags: ["Finance", "Automation", "Reporting"],
    lead: "Stephen Browne",
  },
  {
    outcome: "Live ERP data available to AI workflows — no manual exports",
    descriptor: "B2B distribution",
    sector: "B2B distribution",
    challenge:
      "AI tools couldn't see operational data without someone exporting it from the ERP first.",
    whatWeDid:
      "A custom Model Context Protocol (MCP) connector linking the ERP / line-of-business system directly to the team's AI tools.",
    tags: ["MCP", "Integration", "ERP"],
    lead: "Simon Lewis",
  },
  {
    outcome: "A tiered outbound pipeline run by one person instead of a team",
    descriptor: "B2B services",
    sector: "Professional services",
    challenge:
      "Building a qualified outbound pipeline needed more headcount than the business wanted to add.",
    whatWeDid:
      "Agent-driven scraping, enrichment and personalised draft generation feeding a human-reviewed outbound motion.",
    tags: ["Agentic build", "Sales", "Enrichment"],
    lead: "Simon Lewis",
  },
  {
    outcome: "Weekly back-office prep automated — significant time saved, no extra headcount",
    descriptor: "SME, multi-function",
    sector: "SME operations",
    challenge:
      "Recurring sales, inventory and finance prep, plus meeting agendas and minutes, consumed hours every week.",
    whatWeDid:
      "Scheduled sales / inventory / finance reports, auto-generated agendas and minutes, and uniform output via shared skills.",
    tags: ["Automation", "Operations", "Reporting"],
    lead: "Stephen Browne",
  },
  // --- Empty templates for future engagements (not rendered) ---
  {
    outcome: "[CONFIRM — outcome/metric]",
    descriptor: "[CONFIRM]",
    sector: "[CONFIRM]",
    challenge: "[CONFIRM]",
    whatWeDid: "[CONFIRM]",
    tags: [],
    lead: "[CONFIRM]",
    draft: true,
  },
  {
    outcome: "[CONFIRM — outcome/metric]",
    descriptor: "[CONFIRM]",
    sector: "[CONFIRM]",
    challenge: "[CONFIRM]",
    whatWeDid: "[CONFIRM]",
    tags: [],
    lead: "[CONFIRM]",
    draft: true,
  },
];

// ---------------------------------------------------------------------------
// TEAM & NETWORK
// ---------------------------------------------------------------------------
export const team: TeamMember[] = [
  {
    name: "Stephen Browne",
    role: "Founding Partner — AI Strategy & Implementation",
    kind: "partner",
    focus: "Strategy, implementation, governance",
    bio: "Owner and MD of IO Resource, an Irish tech-distribution company he has run since 2002. Stephen has personally deployed AI across his own business — sales, finance, operations, governance and brand — and documented the playbook. He now advises owner-led firms on adopting AI that actually works. A Trinity College engineering graduate with an MBA. Sells judgement, not theory.",
    linkedin: "https://www.linkedin.com/in/stephen-browne-a6b153/",
    order: 1,
    published: true,
    confirm: "Confirm Trinity College engineering degree + MBA wording.",
  },
  {
    name: "Simon Lewis",
    role: "Founding Partner — Agentic & Custom Builds",
    kind: "partner",
    focus: "Agents, automation, integrations",
    bio: "A Trinity College software engineer with 20+ years across Irish and international tech firms — the last eight at Meta, deploying agents at scale. Simon builds the custom agents, enrichment pipelines and integrations that turn strategy into working systems.",
    linkedin: "https://www.linkedin.com/in/simon-lewis-7b212a2a/",
    order: 2,
    published: true,
  },
  {
    name: "Marshall Taplits",
    role: "Associate",
    kind: "associate",
    focus: "[CONFIRM focus]",
    bio: "[CONFIRM bio]",
    linkedin: "https://www.linkedin.com/in/marshalltaplits",
    order: 3,
    published: true,
    confirm: "Confirm bio and focus.",
  },
  {
    name: "Doug Deverman",
    role: "Associate",
    kind: "associate",
    focus: "AI education & enablement",
    bio: "Founder/operator of the Long Island AI Academy, focused on AI education and enablement.",
    linkedin: "https://www.linkedin.com/in/deverman",
    affiliation: "Long Island AI Academy",
    order: 4,
    published: true,
    confirm: "Confirm bio; verify the exact LinkedIn slug.",
  },
  {
    name: "D. Menelly",
    role: "Associate",
    kind: "associate",
    focus: "[CONFIRM focus]",
    bio: "[CONFIRM bio]",
    linkedin: "https://www.linkedin.com/in/dmenelly",
    order: 5,
    published: true,
    confirm: "Confirm full name, bio and focus.",
  },
  // --- Empty network slots (not rendered) ---
  { name: "[CONFIRM]", role: "Associate", kind: "associate", focus: "", bio: "", order: 6, published: false },
  { name: "[CONFIRM]", role: "Associate", kind: "associate", focus: "", bio: "", order: 7, published: false },
  { name: "[CONFIRM]", role: "Associate", kind: "associate", focus: "", bio: "", order: 8, published: false },
  // --- Silent partner: kept on file, omitted from the public site by default ---
  {
    name: "Barry [CONFIRM full name]",
    role: "Silent / financial partner",
    kind: "silent",
    focus: "",
    bio: "",
    order: 99,
    published: false,
    confirm: "Full name + decision to feature or omit. Default: omit.",
  },
];

// ---------------------------------------------------------------------------
// TRUST STRIP
// ---------------------------------------------------------------------------
export const trustItems: TrustItem[] = [
  { label: "Operator-led", kind: "credential" },
  { label: "Ex-Meta & international practitioners", kind: "credential" },
  { label: "Independent — no equity, no vendor stakes", kind: "credential" },
  { label: "Ireland & UK", kind: "geo" },
  { label: "Distribution", kind: "sector" },
  { label: "Public sector", kind: "sector" },
  { label: "Professional services", kind: "sector" },
  { label: "Food & FMCG", kind: "sector" },
];

// ---------------------------------------------------------------------------
// WHO WE'RE NOT FOR (confident, short)
// ---------------------------------------------------------------------------
export const notFor: string[] = [
  "Enterprises over €50m with IT committees and innovation departments",
  "Buyers who aren't the owner or CEO — we don't sell to CTOs or innovation leads",
  "Generic staff “AI awareness” training — we train the owner",
  "Engagements where we'd take equity — independence is the asset",
  "Undisclosed vendor recommendations — we stay independent",
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export const faqs: Faq[] = [
  {
    question: "Who do you work with?",
    answer:
      "Owner-led SMEs in Ireland and the UK, roughly €500k–€50m in revenue. The owner or CEO is the buyer — and the person we work alongside.",
  },
  {
    question: "Do you build software, or just advise?",
    answer:
      "Both. Strategy and implementation, and custom agentic builds — agents, automations, MCP connectors and integrations on your own stack.",
  },
  {
    question: "How big are your clients?",
    answer:
      "Roughly €500k–€50m in revenue. We're not built for enterprises with IT committees and innovation departments.",
  },
  {
    question: "Ireland and the UK only?",
    answer:
      "That's our focus. We work on-site and remotely across both.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Fixed fee, day rate or retainer, depending on the engagement. Book a call and we'll scope it — we don't publish price lists.",
  },
  {
    question: "What makes you different from a generic AI consultant?",
    answer:
      "We're operators, not theorists. We've deployed this in our own businesses, and we stay until it's working.",
  },
  {
    question: "Do you take equity?",
    answer:
      "No. Independence is the asset — no equity, and no undisclosed vendor stakes.",
  },
];
