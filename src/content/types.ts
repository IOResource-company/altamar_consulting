// Typed content model for Altamar Consulting.
// Mirrors the Sanity schema in the brief, but lives in code for v1.
// Edit the data in ./site.ts — these are just the shapes.

export interface SiteConfig {
  name: string;
  legalEntity: string; // footer entity line — [CONFIRM]
  tagline: string; // the hook line
  hook: string; // short positioning line
  description: string; // meta description
  url: string; // canonical site URL
  contactEmail: string; // [CONFIRM]
  bookingUrl: string; // Calendly / Cal.com — [CONFIRM]
  formEndpoint: string; // Formspree-style POST endpoint — [CONFIRM]
  linkedin: { stephen: string; simon: string };
}

export interface Service {
  pillar: string;
  lead: string; // partner name
  summary: string;
  points: string[];
}

export interface LadderRung {
  step: number;
  title: string;
  duration?: string;
  summary: string;
}

export interface MethodStep {
  step: number;
  label: string; // [CONFIRM] — supplied by Stephen, never invented
}

export interface Project {
  outcome: string; // lead with the metric/outcome — this is the card headline
  descriptor: string; // anonymised client descriptor
  sector: string;
  challenge: string;
  whatWeDid: string;
  tags: string[];
  lead: string; // partner/lead
  flagship?: boolean;
  confirm?: string; // [CONFIRM] note, if any
  draft?: boolean; // empty template / not for render
}

export interface TeamMember {
  name: string;
  role: string;
  kind: "partner" | "associate" | "silent";
  focus: string;
  bio: string;
  linkedin?: string;
  affiliation?: string;
  order: number;
  confirm?: string;
  published: boolean; // silent partner / empty slots = false
}

export interface Faq {
  question: string;
  answer: string;
}

export interface TrustItem {
  label: string;
  kind: "credential" | "sector" | "geo";
}
