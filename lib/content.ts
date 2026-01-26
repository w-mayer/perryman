/**
 * Centralized content for the site
 * This file consolidates content from mockupData and inline definitions.
 *
 * Key items requiring confirmation with client before launch:
 * - TESTIMONIAL: Entire content is placeholder (J. Smith, Technology Executive)
 * - SOCIAL_LINKS in constants.ts: Need full profile URLs
 * - SITE_CONFIG.email in constants.ts: Verify correct email
 */

// =============================================================================
// HERO SECTION
// =============================================================================

export const HERO_CONTENT = {
  name: "Sean Perryman",
  title: "Speaker. Consultant. Strategist. Coach.",
  tagline: "AI Strategy, Policy, and Ethics",
  primaryCTA: "Schedule a Consultation",
  secondaryCTA: "Learn More",
  image: "/images/headshots/sean-hero.jpg",
} as const;

// =============================================================================
// ABOUT SECTION
// =============================================================================

export const ABOUT_CONTENT = {
  bio: "Sean Perryman works at the intersection of AI policy, corporate strategy, and ethical implementation—helping organizations navigate one of the most consequential technology transitions of our time. His career spans Capitol Hill, Silicon Valley, and law school classrooms. He translates congressional intent for engineers, explains technical constraints to policymakers, and helps executives understand when ethical concerns are actually business risks in disguise.",
  image: "/images/headshots/sean-formal.jpg",
} as const;

export const CAREER_HIGHLIGHTS = [
  {
    iconName: "Briefcase" as const,
    title: "Global Head of AI Policy at Uber",
    description:
      "Created Uber's first EU Algorithmic Transparency Report and served as core team member on Uber's first Civil Rights Assessment.",
  },
  {
    iconName: "Users" as const,
    title: "Congressional Counsel",
    description:
      "Advised the late Congressman Elijah Cummings on the House Oversight Committee on facial recognition, algorithmic accountability, and technology governance.",
  },
  {
    iconName: "GraduationCap" as const,
    title: "Academic Leadership",
    description:
      "Designed Vanderbilt Law School's first AI ethics course. Currently teaches law and policy at Vanderbilt and Marymount University.",
  },
  {
    iconName: "Award" as const,
    title: "Board & Advisory Roles",
    description:
      "Center for Democracy & Technology Advisory Board member. Former FCC Advisory Committee on Diversity and Digital Empowerment appointee.",
  },
] as const;

// =============================================================================
// CREDIBILITY (for hero chips if re-enabled)
// =============================================================================

export const CREDIBILITY = {
  title: "First Global Head of AI Policy at Uber",
  subtitle: "Former Congressional Counsel",
  logos: ["Vanderbilt AI Governance Symposium", "SXSW", "AI Action Summit"],
} as const;

// =============================================================================
// SERVICES
// =============================================================================

export const SERVICE_DESCRIPTIONS = {
  "public-speaking":
    "Cutting through AI hype to deliver strategic insight—from keynotes at major conferences to executive briefings that audiences describe as immediately actionable.",
  consulting:
    "Translating complex AI policy into business strategy. Governance frameworks, risk assessment, regulatory intelligence, and ethics that scale.",
  coaching:
    "One-on-one executive coaching for leaders navigating AI strategy, governance decisions, and organizational transformation.",
} as const;

// =============================================================================
// COACHING CONTENT
// =============================================================================

export const COACHING_OFFERINGS = [
  {
    iconName: "Users" as const,
    title: "Leading Through Technological Disruption",
    description:
      "Your team is anxious. Your board has questions. Your customers have concerns. We work on the human dimension of AI leadership—communicating uncertainty, building trust, making ethical calls when there's no clear answer.",
  },
  {
    iconName: "Compass" as const,
    title: "Strategic Decision-Making in Ambiguity",
    description:
      "Million-dollar AI investments with incomplete information. We develop frameworks that help you move decisively while managing technical, regulatory, and reputational uncertainty.",
  },
  {
    iconName: "Target" as const,
    title: "Personal Leadership Development",
    description:
      "We work to unblock professional and personal barriers that prevent you from reaching the next level of your career.",
  },
] as const;

export const COACHING_CLIENT_TYPES = [
  "C-suite executives implementing AI strategy across their organizations",
  "General Counsels and Policy Leaders translating regulation into competitive advantage",
  "Founders, Executives, and Senior Leaders navigating personal and professional challenges and transitions in their career.",
] as const;

// =============================================================================
// CONTACT FAQ
// =============================================================================

export const CONTACT_FAQ = [
  {
    question: "What happens after I submit?",
    answer:
      "I'll review your message and respond within 24 hours with next steps or any clarifying questions.",
  },
  {
    question: "What types of engagements do you offer?",
    answer:
      "I offer keynote speaking, workshops, consulting retainers, and executive coaching. We'll find the right fit for your needs.",
  },
] as const;

// =============================================================================
// CTA CONTENT
// =============================================================================

export const CTA_CONTENT = {
  headline: "Let's Work Together",
  subtext:
    "Whether you need strategic guidance on AI governance, executive education for your team, or a speaker who can make complex policy accessible, Sean brings a practitioner's perspective to every engagement.",
  buttonText: "Get in Touch",
} as const;

// =============================================================================
// TESTIMONIAL (PLACEHOLDER - needs real content from client)
// =============================================================================

/**
 * TODO: PLACEHOLDER TESTIMONIAL - Need real testimonial from client
 * Current content: "J. Smith", "Technology Executive", "Enterprise Client" are all fake
 */
export const TESTIMONIAL = {
  quote:
    "Sean's guidance was instrumental in shaping our AI governance strategy. His ability to translate complex policy considerations into actionable frameworks helped us move confidently into AI adoption while maintaining stakeholder trust.",
  author: "J. Smith", // PLACEHOLDER
  role: "Technology Executive", // PLACEHOLDER
  company: "Enterprise Client", // PLACEHOLDER
} as const;

// =============================================================================
// FOCUS AREAS (for potential future use)
// =============================================================================

export const FOCUS_AREAS = [
  {
    title: "AI Strategy & Implementation",
    description:
      "Develop comprehensive AI roadmaps aligned with business objectives and ethical principles.",
    icon: "strategy",
  },
  {
    title: "Governance Framework Design",
    description:
      "Build robust governance structures that ensure responsible AI deployment at scale.",
    icon: "governance",
  },
  {
    title: "Policy Advisory & Compliance",
    description:
      "Navigate evolving regulations and establish proactive compliance frameworks.",
    icon: "policy",
  },
  {
    title: "Executive Education & Speaking",
    description:
      "Keynotes and workshops that prepare leadership teams for the AI-driven future.",
    icon: "speaking",
  },
] as const;
