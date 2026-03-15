export type LearningTrack = {
  slug: string;
  title: string;
  summary: string;
  outcome: string;
  source: string;
  modules: Array<{
    title: string;
    description: string;
    duration: string;
  }>;
};

export type InterventionPlaybook = {
  trigger: string;
  response: string;
  target: string;
};

export type MarketProject = {
  name: string;
  developer: string;
  zone: string;
  status: string;
  priceMin: number;
  priceMax: number;
  paymentPlan: string;
  unitTypes: string[];
  edge: string;
};

export type ZoneInsight = {
  zone: string;
  activeProjects: number;
  typicalDownPayment: string;
  positioning: string;
};

export type ReportWorkflow = {
  title: string;
  description: string;
  output: string;
};

export type ReportTemplate = {
  name: string;
  useCase: string;
  signals: string[];
};

export type XceliasRecommendation = {
  title: string;
  description: string;
  href: string;
  surface: "learning" | "market" | "report" | "operations";
};

export type CommandShortcut = {
  id: string;
  title: string;
  subtitle: string;
  url: string;
};

function buildHref(path: string, params: Record<string, string | undefined>) {
  const search = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      search.set(key, value);
    }
  });

  const query = search.toString();
  return query ? `${path}?${query}` : path;
}

export const learningTracks: LearningTrack[] = [
  {
    slug: "foundations",
    title: "Real-Estate Foundations",
    summary: "Structured academy fundamentals adapted from the Red Materials activity workspace and slide-driven training deck.",
    outcome: "Trainees build fluency in property types, finishing specs, and essential market language.",
    source: "Activities + Content workspaces",
    modules: [
      {
        title: "Property Types",
        description: "Residential, commercial, and land categories with subtypes like duplex, penthouse, townhouse, and twin house.",
        duration: "22 min",
      },
      {
        title: "Finishing Types",
        description: "Core and shell, semi-finished, fully finished, and fully furnished explained through practical selling context.",
        duration: "14 min",
      },
      {
        title: "Primary vs Resale",
        description: "Clarifies developer-led sales versus resale inventory, cash versus installment dynamics, and RTM versus off-plan framing.",
        duration: "12 min",
      },
    ],
  },
  {
    slug: "sales-psychology",
    title: "Sales Psychology",
    summary: "Converts the extracted instructional deck into guided modules around buying motives, needs versus wants, and client qualification.",
    outcome: "The team can diagnose what clients ask for versus why they actually buy.",
    source: "Activities workspace",
    modules: [
      {
        title: "Needs vs Wants",
        description: "Breaks down surface requests, emotional motives, and rational decision drivers.",
        duration: "16 min",
      },
      {
        title: "Buying Motives",
        description: "Frames status, safety, family comfort, convenience, and investment return as intervention points during calls.",
        duration: "18 min",
      },
      {
        title: "First Impression and Professionalism",
        description: "Confidence, presence, communication discipline, and closure technique expectations for academy operators.",
        duration: "10 min",
      },
    ],
  },
  {
    slug: "market-translation",
    title: "Market Translation",
    summary: "Turns project knowledge into a study layer by connecting destinations, developers, payment plans, and unit logic to coaching.",
    outcome: "Learners can move from project facts to persuasive, context-aware recommendations.",
    source: "Website workspace",
    modules: [
      {
        title: "Destination Vocabulary",
        description: "New Cairo, North Coast, Ain Sokhna, and other zones mapped to buyer intent and project positioning.",
        duration: "20 min",
      },
      {
        title: "Payment Plan Literacy",
        description: "Down payment percentages, installment years, and plan framing translated into objection-handling language.",
        duration: "15 min",
      },
      {
        title: "Unit Mix Strategy",
        description: "How villas, apartments, chalets, and admin spaces change sales conversations and qualification pathways.",
        duration: "17 min",
      },
    ],
  },
];

export const interventionPlaybooks: InterventionPlaybook[] = [
  {
    trigger: "Low assessment score in product knowledge",
    response: "Assign property types, finishing, and primary versus resale modules before the next live evaluation.",
    target: "Knowledge repair",
  },
  {
    trigger: "Frequent attendance gaps or lateness",
    response: "Push catch-up summaries, require a condensed learning path, and surface the issue in command-center oversight.",
    target: "Retention and intervention",
  },
  {
    trigger: "Weak objection handling on live calls",
    response: "Route the trainee into buying-motives and payment-plan practice blocks tied to real market examples.",
    target: "Sales execution",
  },
];

export const zoneInsights: ZoneInsight[] = [
  {
    zone: "New Cairo",
    activeProjects: 48,
    typicalDownPayment: "5% to 10%",
    positioning: "Balanced end-user and investor demand with dense developer competition and broad unit mix.",
  },
  {
    zone: "North Coast",
    activeProjects: 31,
    typicalDownPayment: "10%",
    positioning: "Lifestyle-led destination where seasonal urgency and premium positioning shape the sales narrative.",
  },
  {
    zone: "Ain Sokhna",
    activeProjects: 18,
    typicalDownPayment: "10% to 15%",
    positioning: "Access-driven coastal market suited to weekend-home objections and installment-plan comparisons.",
  },
  {
    zone: "6th of October",
    activeProjects: 22,
    typicalDownPayment: "5% to 10%",
    positioning: "Residential growth corridor where family utility and long-term expansion dominate qualification.",
  },
];

export const featuredProjects: MarketProject[] = [
  {
    name: "5A Administrative",
    developer: "The Waterway Developments",
    zone: "New Cairo",
    status: "Delivered",
    priceMin: 15168445,
    priceMax: 35772704,
    paymentPlan: "5% down payment, 8 years installments",
    unitTypes: ["Admin", "Commercial"],
    edge: "Useful for teaching premium admin-product framing and payment-plan positioning.",
  },
  {
    name: "Aria",
    developer: "LMD (Landmark Sabbour)",
    zone: "New Cairo",
    status: "Delivered",
    priceMin: 14623646,
    priceMax: 27177342,
    paymentPlan: "5% down payment, 8 years installments",
    unitTypes: ["Villa", "Apartment"],
    edge: "Strong example of broad-bedroom inventory and end-user qualification logic.",
  },
  {
    name: "Azad",
    developer: "Tameer",
    zone: "New Cairo",
    status: "Delivered",
    priceMin: 14800844,
    priceMax: 31756172,
    paymentPlan: "5% down payment, 8 years installments",
    unitTypes: ["Villa", "Apartment"],
    edge: "Good benchmark for comparing family demand, location convenience, and finished inventory.",
  },
  {
    name: "Azzar New Cairo",
    developer: "Reedy Group",
    zone: "New Cairo",
    status: "Delivered",
    priceMin: 14416914,
    priceMax: 31010208,
    paymentPlan: "5% down payment, 8 years installments",
    unitTypes: ["Villa", "Apartment"],
    edge: "Useful for coaching around differentiation in a saturated destination cluster.",
  },
  {
    name: "Cali Coast",
    developer: "Maven",
    zone: "North Coast",
    status: "Under Construction",
    priceMin: 8900000,
    priceMax: 22600000,
    paymentPlan: "10% down payment, 8 years installments",
    unitTypes: ["Chalet", "Villa"],
    edge: "Anchors seasonal-sales storytelling and coastal lifestyle positioning.",
  },
  {
    name: "IL Monte Galala",
    developer: "Tatweer Misr",
    zone: "Ain Sokhna",
    status: "Delivered",
    priceMin: 7300000,
    priceMax: 21900000,
    paymentPlan: "10% down payment, 9 years installments",
    unitTypes: ["Chalet", "Apartment"],
    edge: "Useful for destination comparison, accessibility objections, and ready-to-use framing.",
  },
];

export const reportWorkflows: ReportWorkflow[] = [
  {
    title: "Evidence ingestion",
    description: "Accept screenshots, attendance signals, assessment inputs, and OCR-readable artifacts in one capture layer.",
    output: "Unified evidence set",
  },
  {
    title: "Narrative synthesis",
    description: "Transform raw scores and notes into a manager-readable summary with intervention-ready language.",
    output: "Executive evaluation narrative",
  },
  {
    title: "Export and distribution",
    description: "Generate polished shareable reports for trainees, managers, and company stakeholders without duplicate entry.",
    output: "PDF and internal handoff",
  },
];

export const reportTemplates: ReportTemplate[] = [
  {
    name: "Trainee Performance Brief",
    useCase: "Condenses assessment results, attendance behavior, and coach commentary into a single handoff artifact.",
    signals: ["Technical score", "Soft skills", "Attendance ratio", "Instructor comment"],
  },
  {
    name: "Batch Intervention Pack",
    useCase: "Flags repeated cohort issues and maps them to remediation content and manager action items.",
    signals: ["Trend deviations", "Late-arrival clusters", "Skill-gap themes", "Suggested learning blocks"],
  },
  {
    name: "Company Stakeholder Snapshot",
    useCase: "Turns academy outcomes into a clean external-facing summary for partner review.",
    signals: ["Outcome mix", "Top strengths", "Risk markers", "Next-cycle recommendation"],
  },
];

export const commandShortcuts: CommandShortcut[] = [
  {
    id: "learning-hub",
    title: "Learning Hub",
    subtitle: "Open academy tracks, remediation content, and skill-recovery paths.",
    url: "/learning-hub",
  },
  {
    id: "market-intelligence",
    title: "Market Intelligence",
    subtitle: "Explore destinations, payment patterns, and project-led sales context.",
    url: "/market-intelligence",
  },
  {
    id: "report-studio",
    title: "Report Studio",
    subtitle: "Open reporting workflows, evidence ingestion, and export-ready templates.",
    url: "/report-studio",
  },
  {
    id: "command-center",
    title: "Command Center",
    subtitle: "Return to the protected operations workspace for academy execution.",
    url: "/command-center",
  },
];

export function getAssessmentRecommendations(input: {
  mapping: number;
  productKnowledge: number;
  presentability: number;
  softSkills: number;
  overallScore: number;
  outcome?: string | null;
}): XceliasRecommendation[] {
  const recommendations: XceliasRecommendation[] = [];
  const techAverage = ((input.mapping + input.productKnowledge) / 10) * 100;
  const softAverage = ((input.presentability + input.softSkills) / 10) * 100;

  if (techAverage < 70) {
    recommendations.push({
      title: "Repair product foundations",
      description: "Send the trainee into property types, finishing specs, and primary versus resale review before the next assessment.",
      href: buildHref("/learning-hub", { focus: "product-foundations", source: "assessment" }),
      surface: "learning",
    });
  }

  if (input.mapping <= 2 || input.productKnowledge <= 2) {
    recommendations.push({
      title: "Study destination and project context",
      description: "Use the market-intelligence surface to translate project facts, payment plans, and zone positioning into stronger sales fluency.",
      href: buildHref("/market-intelligence", { focus: "destination-context", source: "assessment" }),
      surface: "market",
    });
  }

  if (softAverage < 70) {
    recommendations.push({
      title: "Rebuild sales psychology",
      description: "Route the trainee into needs-versus-wants, buying motives, and professional presence content.",
      href: buildHref("/learning-hub", { focus: "sales-psychology", source: "assessment" }),
      surface: "learning",
    });
  }

  if (input.overallScore < 70 || input.outcome === "Failed" || input.outcome === "Needs Improvement") {
    recommendations.push({
      title: "Generate intervention brief",
      description: "Open Report Studio to prepare a trainee performance brief and next-step plan from the weak evaluation.",
      href: buildHref("/report-studio", { template: "trainee-performance-brief", source: "assessment" }),
      surface: "report",
    });
  }

  return recommendations.slice(0, 3);
}

export function getTraineeJourneyRecommendations(input: {
  attendanceRate: number;
  attendanceEligible: boolean;
  avgAssessmentScore: number;
  latestAssessment?: {
    mapping: number;
    productKnowledge: number;
    presentability: number;
    softSkills: number;
    overallScore: number;
    outcome?: string | null;
  } | null;
}): XceliasRecommendation[] {
  const recommendations: XceliasRecommendation[] = [];

  if (input.attendanceEligible && input.attendanceRate < 80) {
    recommendations.push({
      title: "Escalate attendance intervention",
      description: "Review 10-day attendance patterns and route the trainee through catch-up actions before the batch drifts further.",
      href: buildHref("/attendance/10-day", { focus: "attendance-recovery", source: "journey" }),
      surface: "operations",
    });
  }

  if (input.avgAssessmentScore < 75) {
    recommendations.push({
      title: "Create a performance recovery brief",
      description: "Summarize weak scores, comments, and attendance behavior inside Report Studio for trainer follow-up.",
      href: buildHref("/report-studio", { template: "trainee-performance-brief", source: "journey" }),
      surface: "report",
    });
  }

  if (input.latestAssessment) {
    recommendations.push(...getAssessmentRecommendations(input.latestAssessment));
  }

  return recommendations.slice(0, 4);
}