export const profile = {
  name: "Lauren Rivero",
  fullName: "Lauren Alexis Rivero",
  role: "UX/UI Designer",
  location: "Miami, FL",
  headline: "Creating intuitive, user-centered digital experiences.",
  intro:
    "I blend thoughtful visual design with technical understanding to build solutions that feel seamless and easy to use. I recently completed an Experience Design internship at Truist and am finishing an M.A. in Mass Communication / Web Design at the University of Florida in December 2026.",
  email: "laurenr0324@gmail.com",
  phone: "(786) 795-9898",
  phoneHref: "tel:+17867959898",
  linkedin: "https://www.linkedin.com/in/lauren-rivero-49a21721b",
  resumeHref: "/Lauren-Rivero-Resume.pdf",
} as const;

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const about = {
  eyebrow: "About",
  title: "I design digital experiences that help people feel sure of the next step.",
  paragraphs: [
    "Before I designed digital experiences, I spent time teaching, explaining, and helping people move through new ideas. That background still shapes the way I approach UX/UI design today.",
    "With experience in education, communication, and web design, I've learned that good design is not just about how something looks. It is about how clearly it guides someone, supports decision-making, and helps people complete what they came to do.",
    "As an emerging UX/UI designer, I enjoy turning early ideas into user flows, wireframes, prototypes, and polished screens that feel purposeful, accessible, and easy to understand.",
  ],
};

export const skillGroups = [
  {
    label: "Design",
    items: [
      "Figma",
      "Wireframing",
      "Interactive Prototyping",
      "User Flows",
      "Design Systems",
      "Visual Design",
    ],
  },
  {
    label: "Research & Handoff",
    items: [
      "User Research",
      "Accessibility Annotations",
      "Design Documentation",
      "Developer Handoff",
    ],
  },
  {
    label: "Technical",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Airtable",
      "Microsoft Copilot",
    ],
  },
] as const;

export const education = [
  {
    school: "University of Florida",
    place: "Gainesville, Florida",
    degree: "Master of Arts in Mass Communication / Web Design",
    detail: "GPA 4.0 / 4.0",
    dates: "December 2026",
  },
  {
    school: "Florida International University",
    place: "Miami, Florida",
    degree: "Bachelor of Science in Crime Science",
    detail: "GPA 3.96 / 4.0",
    dates: "July 2024",
  },
] as const;

export const experience = [
  {
    role: "Experience Design Intern (Tech)",
    company: "Truist",
    place: "Charlotte, North Carolina",
    dates: "May 2026 — August 2026",
    points: [
      "Supported Truist's Acquisition Design and Digital Commerce team in 2026 on a channel that drove 12% of new-to-bank clients.",
      "Design end-to-end user flows and customer journeys for digital banking products and account-opening experiences.",
      "Build wireframes and interactive prototypes in Figma while adhering to enterprise design system standards and UX best practices.",
      "Synthesize UX research findings from moderated user sessions into actionable insights that inform design decisions.",
      "Produce accessibility annotations and implementation-ready documentation to support developer handoff and inclusive experiences.",
    ],
  },
  {
    role: "Business & Technology Teacher",
    company: "Saint Brendan High School",
    place: "Miami, Florida",
    dates: "January 2023 — June 2026",
    points: [
      "Taught Web Design and Game Programming, covering HTML, CSS, FTP, search engines, and core coding concepts.",
      "Guided students through projects to design web pages and develop games with a focus on usability and creativity.",
      "Delivered honors-level Business Law and Management, covering legal systems, contracts, leadership, and ethics.",
      "Incorporated emerging tech trends and UX/UI principles to prepare students for higher education and tech careers.",
    ],
  },
  {
    role: "Student Learning Assistant",
    company: "Florida International University",
    place: "Miami, Florida",
    dates: "August 2022 — September 2023",
    points: [
      "Provided math and statistics tutoring and support to undergraduate students enrolled in math and statistics courses at Florida International University.",
      "Collaborated with planning, development, and implementing department projects.",
      "Facilitated with presentations and workshops at the instructions of the Program Manager.",
      "Utilized specialized software tools to support math instruction and assist students.",
    ],
  },
] as const;

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  dates: string;
  role: string;
  cardRole: string;
  timeline: string;
  tools: string;
  image: string;
  imageAlt: string;
  accent: string;
  overview: string;
  brief: string;
  approach: string;
  highlights: readonly string[];
  caseStudyAvailable?: boolean;
  caseStudyHref?: string;
};

export const projects: readonly Project[] = [
  {
    id: "pawse",
    title: "Pawse",
    subtitle: "Weather web app for safer dog walks",
    dates: "November 2025",
    role: "UX/UI Designer & Front-End Developer",
    cardRole: "Designer & Developer",
    timeline: "2 weeks",
    tools: "HTML, CSS, JavaScript",
    image: "/work/pawse.png",
    imageAlt:
      "Desktop and mobile mockups of the Pawse weather app showing a sunny forecast and a walk-safety recommendation for a dog.",
    accent: "#D9E0D4",
    overview:
      "A responsive web app that helps dog owners decide whether weather conditions are safe for walking their pets, pairing real-time weather data with a calm, quick-read interface.",
    brief:
      "Checking the weather is easy. Deciding whether it is actually safe to walk a dog is not. Pawse needed to turn conditions into a clear yes, no, or wait — without making owners hunt through a forecast.",
    approach:
      "I designed a mobile-first interface for fast decision-making, then built the front end in HTML, CSS, and JavaScript. Real-time weather information sits inside a simple visual system so the recommendation is readable at a glance.",
    highlights: [
      "Responsive mobile-first design",
      "Real-time weather information",
      "Intuitive, user-friendly interface",
      "Front-end implementation with HTML, CSS, and JavaScript",
    ],
  },
  {
    id: "glossier",
    title: "Glossier Redesign",
    subtitle: "Swiss-minimal homepage with a Saie-style product rail",
    dates: "February 2025 — March 2025",
    role: "UX/UI Designer",
    cardRole: "UX/UI Designer",
    timeline: "2 weeks",
    tools: "Figma, Photoshop",
    image: "/work/glossier.png",
    imageAlt:
      "Swiss-minimal Glossier homepage redesign mockups for desktop and mobile with a horizontal bestsellers carousel.",
    accent: "#F5E6E2",
    caseStudyAvailable: true,
    caseStudyHref: "/projects/glossier",
    overview:
      "A homepage redesign that brings Swiss Euro clarity to Glossier — real site copy, a VBB-inspired icons rail, and a working Saie-style horizontal scroll.",
    brief:
      "As Glossier faced growing competition and a shifting beauty market, its digital storefront presented an opportunity for improvement. The redesign aimed to strengthen product discovery, refine visual hierarchy, and create a more intuitive shopping experience while preserving the brand's recognizable identity.",
    approach:
      "I evaluated Glossier's existing homepage and explored design patterns from competing beauty brands before developing responsive wireframes, high-fidelity interfaces, and interactive prototypes. The redesign emphasized minimalist layouts, product-focused merchandising, and seamless navigation across desktop and mobile.",
    highlights: [
      "Responsive homepage redesign (desktop + mobile)",
      "Refined navigation and product discovery",
      "Interactive fragrance carousel and shopping experience",
      "Product imagery and visual assets refined in Photoshop",
      "Lo-fi, hi-fi, and interactive Figma prototypes",
    ],
  },
  {
    id: "keybeauty",
    title: "KeyBeauty by Yeny",
    subtitle: "Responsive website for a beauty services business",
    dates: "September–October 2024",
    role: "Lead UX/UI Designer",
    cardRole: "Lead UX/UI Designer",
    timeline: "4 weeks",
    tools: "Figma, Canva",
    image: "/work/keybeauty.png",
    imageAlt:
      "Desktop and mobile mockups of the KeyBeauty by Yeny website, showing a spa treatment hero and a services menu.",
    accent: "#E8D4C8",
    overview:
      "A modern online presence for a local beauty business that communicates services, builds trust, and encourages bookings across desktop and mobile.",
    brief:
      "KeyBeauty by Yeny needed a cohesive digital home that felt as considered as the in-person experience. The site had to present services clearly, feel trustworthy at a glance, and make booking the obvious next step on any device.",
    approach:
      "I led the website from wireframe through UI layout and high-fidelity design, then partnered closely with the lead software engineer so the final build stayed efficient and visually aligned. Client reviews throughout kept the work tied to business goals.",
    highlights: [
      "Responsive desktop and mobile design",
      "Cohesive visual design system",
      "Improved navigation and information hierarchy",
      "High-fidelity Figma prototypes",
      "Close designer–developer collaboration and client alignment",
    ],
  },
];

export type CaseStudyMedia = {
  id: string;
  label: string;
  /** Frame proportion for the placeholder / export. Prefer "tall" for full-page desktop Figma frames. */
  aspect: "16/9" | "5/3" | "4/3" | "3/4" | "9/16" | "1/1" | "tall";
  /**
   * How the filled image sits in its preview frame.
   * - contain (default): full export, no crop — use for complete Figma frames
   * - cover: cropped hero-style preview — use only for overview teasers
   */
  fit?: "contain" | "cover";
  /** Intrinsic pixel size of the export — used for sharp, proportional previews. */
  width?: number;
  height?: number;
  /** Set a public path when the asset is ready; leave null for placeholder. */
  src: string | null;
  alt: string;
  caption?: string;
};

export const glossierCaseStudy = {
  cardTitle: "Glossier Redesign",
  heroTitle: "Glossier Homepage Redesign",
  heroSubtitle:
    "Reimagining Glossier's digital storefront through intentional minimalism and improved product discovery.",
  dates: "February 2025 — March 2025",
  role: "UX/UI Designer",
  timeline: "2 weeks",
  tools: ["Figma", "Photoshop"],
  methods: [
    "[Placeholder] Research method",
    "Low-fidelity wireframing",
    "High-fidelity UI design",
    "Interactive prototyping",
  ],
  platform: "Responsive web (desktop + mobile)",
  team: "Solo concept project",
  accent: "#F5E6E2",
  image: "/work/glossier.png",
  imageAlt: "Desktop and mobile mockups of the Glossier homepage redesign.",
  figmaUrl: "",
  figmaLabel: "Open interactive Figma prototype",
  sections: [
    { id: "overview", label: "Overview", index: "01" },
    { id: "problem", label: "Problem", index: "02" },
    { id: "research", label: "Research", index: "03" },
    { id: "process", label: "Process", index: "04" },
    { id: "final-design", label: "Final design", index: "05" },
    { id: "results", label: "Results", index: "06" },
    { id: "reflection", label: "Reflection", index: "07" },
  ] as const,
  overview: {
    heroMockup: {
      id: "overview-hero-mockup",
      label: "Figma export · Hero preview (cropped composition)",
      aspect: "16/9" as const,
      fit: "cover" as const,
      src: null,
      alt: "Placeholder for a cropped hero preview of the redesigned Glossier homepage.",
      caption:
        "[Placeholder] Compelling cropped preview — not the full-page Final Design export.",
    } satisfies CaseStudyMedia,
    /** Overview hero: interactive Figma device presentations (MacBook + iPhone). */
    desktopProtoUrl:
      "https://www.figma.com/proto/xrLU3g8q0xRH82QfCFL7yv/Glossier-Homepage-Redesign-%E2%80%94-Lauren-Rivero?node-id=371-842&scaling=min-zoom&content-scaling=fixed&page-id=138%3A2&starting-point-node-id=371%3A842",
    mobileProtoUrl:
      "https://www.figma.com/proto/xrLU3g8q0xRH82QfCFL7yv/Glossier-Homepage-Redesign-%E2%80%94-Lauren-Rivero?node-id=371-2086&scaling=min-zoom&content-scaling=fixed&page-id=138%3A2&starting-point-node-id=371%3A2086",
    desktopProtoLabel: "Desktop prototype · MacBook Air",
    mobileProtoLabel: "Mobile prototype · iPhone",
  },
  problem: {
    context:
      "[Placeholder] Describe the UX challenges on the original Glossier homepage.",
    businessContext:
      "[Placeholder] Describe the business or product context for improving the storefront experience.",
    painPoints: [
      {
        title: "[Placeholder] Pain point 1",
        body: "[Placeholder] Explain the first primary pain point.",
      },
      {
        title: "[Placeholder] Pain point 2",
        body: "[Placeholder] Explain the second primary pain point.",
      },
      {
        title: "[Placeholder] Pain point 3",
        body: "[Placeholder] Explain the third primary pain point.",
      },
    ],
    originalScreenshot: {
      id: "problem-original-homepage",
      label: "Original Glossier homepage screenshot",
      aspect: "16/9" as const,
      src: null,
      alt: "Placeholder for the original Glossier homepage screenshot.",
      caption: "[Placeholder] Add original homepage screenshot.",
    } satisfies CaseStudyMedia,
    performanceStats: [
      {
        id: "stat-1",
        label: "[Placeholder] Baseline metric 1",
        value: "—",
        note: "Placeholder · company/site baseline, separate from redesign outcomes",
        kind: "placeholder" as const,
      },
      {
        id: "stat-2",
        label: "[Placeholder] Baseline metric 2",
        value: "—",
        note: "Placeholder · company/site baseline, separate from redesign outcomes",
        kind: "placeholder" as const,
      },
      {
        id: "stat-3",
        label: "[Placeholder] Baseline metric 3",
        value: "—",
        note: "Placeholder · company/site baseline, separate from redesign outcomes",
        kind: "placeholder" as const,
      },
    ],
  },
  research: {
    intro:
      "[Placeholder] Introduce the research and discovery approach used for this project.",
    audit: {
      title: "UX audit",
      body: "[Placeholder] Summarize the UX audit process and what you reviewed.",
    },
    audience: {
      title: "Target audience",
      body: "[Placeholder] Describe the target audience for the homepage experience.",
    },
    competitive: {
      title: "Competitive analysis",
      body: "[Placeholder] Summarize competitor patterns relevant to homepage UX and product discovery.",
      references: [
        {
          id: "comp-vbb",
          label: "Figma export · Competitor — Victoria Beckham Beauty",
          aspect: "16/9" as const,
          src: null,
          alt: "Placeholder for Victoria Beckham Beauty homepage reference.",
          caption:
            "[Placeholder] Brief note on Shop The Icons / discovery pattern.",
        },
        {
          id: "comp-saie",
          label: "Figma export · Competitor — Saie",
          aspect: "16/9" as const,
          src: null,
          alt: "Placeholder for Saie homepage reference.",
          caption:
            "[Placeholder] Brief note on Essentials / Newness scroll pattern.",
        },
      ] satisfies CaseStudyMedia[],
    },
    insights: [
      {
        title: "[Placeholder] Insight 1",
        body: "[Placeholder] Write the first key research insight.",
        evidence: "[Placeholder] Optional supporting evidence or observation.",
      },
      {
        title: "[Placeholder] Insight 2",
        body: "[Placeholder] Write the second key research insight.",
        evidence: "[Placeholder] Optional supporting evidence or observation.",
      },
      {
        title: "[Placeholder] Insight 3",
        body: "[Placeholder] Write the third key research insight.",
        evidence: "[Placeholder] Optional supporting evidence or observation.",
      },
    ],
    annotatedHomepage: {
      id: "research-annotated",
      label: "Figma export · Annotated original homepage",
      aspect: "tall" as const,
      src: null,
      alt: "Placeholder for annotated original homepage.",
      caption: "[Placeholder] Annotated screenshot with callouts.",
    } satisfies CaseStudyMedia,
  },
  process: {
    strategy:
      "[Placeholder] Describe the design strategy and objectives that guided the process.",
    decisions: [
      {
        title: "[Placeholder] Design decision 1",
        body: "[Placeholder] Explain this design decision.",
      },
      {
        title: "[Placeholder] Design decision 2",
        body: "[Placeholder] Explain this design decision.",
      },
      {
        title: "[Placeholder] Design decision 3",
        body: "[Placeholder] Explain this design decision.",
      },
    ],
    desktopWire: {
      id: "wire-desktop",
      label: "Figma export · Lo-fi desktop wireframe",
      aspect: "tall" as const,
      fit: "contain" as const,
      width: 2880,
      height: 9116,
      src: "/work/glossier/glossier-lofi-desktop.png",
      alt: "Low-fidelity desktop wireframe of the Glossier homepage redesign, showing full-page layout structure.",
      caption: "[Placeholder] Annotation for the lo-fi desktop structure.",
    } satisfies CaseStudyMedia,
    mobileWire: {
      id: "wire-mobile",
      label: "Figma export · Lo-fi mobile wireframe",
      aspect: "9/16" as const,
      fit: "contain" as const,
      width: 780,
      height: 9956,
      src: "/work/glossier/glossier-lofi-mobile.png",
      alt: "Low-fidelity mobile wireframe of the Glossier homepage redesign, showing full-page mobile structure.",
      caption: "[Placeholder] Annotation for the lo-fi mobile structure.",
    } satisfies CaseStudyMedia,
    desktopHifi: {
      id: "hifi-desktop",
      label: "Figma export · Hi-fi desktop homepage",
      aspect: "tall" as const,
      fit: "contain" as const,
      width: 2880,
      height: 10026,
      src: "/work/glossier/glossier-hifi-desktop.png",
      alt: "High-fidelity desktop homepage design for the Glossier redesign, including hero, navigation, and product modules.",
      caption: "[Placeholder] Annotation for the hi-fi desktop direction.",
    } satisfies CaseStudyMedia,
    mobileHifi: {
      id: "hifi-mobile",
      label: "Figma export · Hi-fi mobile homepage",
      aspect: "9/16" as const,
      fit: "contain" as const,
      width: 780,
      height: 10896,
      src: "/work/glossier/glossier-hifi-mobile.png",
      alt: "High-fidelity mobile homepage design for the Glossier redesign, including product imagery and UI details.",
      caption: "[Placeholder] Annotation for the hi-fi mobile direction.",
    } satisfies CaseStudyMedia,
    designSystem: {
      title: "Design system preview",
      note: "[Placeholder] Replace with exported tokens from Figma when ready.",
      colors: [
        { name: "[Placeholder] Color 1", value: "#111111" },
        { name: "[Placeholder] Color 2", value: "#FFFFFF" },
        { name: "[Placeholder] Color 3", value: "#E8A598" },
        { name: "[Placeholder] Color 4", value: "#F5E6E2" },
      ],
    },
  },
  finalDesign: {
    intro:
      "[Placeholder] Introduce the final homepage design and what reviewers should notice.",
    desktop: {
      id: "final-desktop",
      label: "Figma export · Complete desktop homepage",
      aspect: "tall" as const,
      fit: "contain" as const,
      src: null,
      alt: "Placeholder for the complete final desktop homepage export.",
      caption:
        "[Placeholder] Full-page desktop homepage — distinct from the Overview hero preview.",
    } satisfies CaseStudyMedia,
    mobile: [
      {
        id: "final-mobile-1",
        label: "Figma export · Mobile homepage screen 1",
        aspect: "9/16" as const,
        src: null,
        alt: "Placeholder for mobile screen 1.",
        caption: "[Placeholder] Annotation for mobile screen 1.",
      },
      {
        id: "final-mobile-2",
        label: "Figma export · Mobile homepage screen 2",
        aspect: "9/16" as const,
        src: null,
        alt: "Placeholder for mobile screen 2.",
        caption: "[Placeholder] Annotation for mobile screen 2.",
      },
      {
        id: "final-mobile-3",
        label: "Figma export · Mobile homepage screen 3",
        aspect: "9/16" as const,
        src: null,
        alt: "Placeholder for mobile screen 3.",
        caption: "[Placeholder] Annotation for mobile screen 3.",
      },
    ] satisfies CaseStudyMedia[],
    interactionHighlights: [
      {
        id: "interaction-desktop-nav",
        label: "Desktop Navigation",
        aspect: "16/9" as const,
        src: null,
        alt: "Placeholder for desktop navigation hover-menu interaction.",
        caption:
          "[Placeholder] Hover-menu interactions — describe the desktop nav behavior.",
      },
      {
        id: "interaction-shopping-bag",
        label: "Shopping Bag",
        aspect: "16/9" as const,
        src: null,
        alt: "Placeholder for shopping bag slide-out drawer.",
        caption:
          "[Placeholder] Slide-out drawer — describe the bag / cart experience.",
      },
      {
        id: "interaction-mobile-nav",
        label: "Mobile Navigation",
        aspect: "9/16" as const,
        src: null,
        alt: "Placeholder for mobile expanded hamburger menu.",
        caption:
          "[Placeholder] Expanded hamburger menu — describe the mobile nav pattern.",
      },
      {
        id: "interaction-product-discovery",
        label: "Product Discovery",
        aspect: "16/9" as const,
        src: null,
        alt: "Placeholder for featured collections and product carousel.",
        caption:
          "[Placeholder] Featured collections and product carousel — describe discovery.",
      },
    ] satisfies CaseStudyMedia[],
    beforeAfter: {
      before: {
        id: "ba-before",
        label: "Figma export · Before — original homepage",
        aspect: "tall" as const,
        src: null,
        alt: "Placeholder for original homepage comparison image.",
        caption: "[Placeholder] Original homepage screenshot",
      } satisfies CaseStudyMedia,
      after: {
        id: "ba-after",
        label: "Figma export · After — redesigned homepage",
        aspect: "tall" as const,
        src: null,
        alt: "Placeholder for redesigned homepage comparison image.",
        caption: "[Placeholder] Redesigned homepage screenshot",
      } satisfies CaseStudyMedia,
    },
  },
  results: {
    summary:
      "[Placeholder] Summarize intended UX improvements. Do not invent measured company results.",
    designOutcomes: [
      "[Placeholder] Design outcome 1 — what was produced",
      "[Placeholder] Design outcome 2 — what was produced",
      "[Placeholder] Design outcome 3 — what was produced",
      "[Placeholder] Design outcome 4 — what was produced",
    ],
    successMetrics: [
      {
        label: "Product discoverability",
        detail:
          "[Placeholder] How improved product discovery could be evaluated.",
      },
      {
        label: "Navigation efficiency",
        detail:
          "[Placeholder] How clearer navigation paths could be evaluated.",
      },
      {
        label: "Product engagement",
        detail:
          "[Placeholder] How engagement with product modules could be evaluated.",
      },
    ],
    usabilityNote:
      "[Placeholder] Room for measured usability findings if testing is completed. Leave blank or replace when available.",
  },
  reflection: {
    takeaways: [
      "[Placeholder] Key takeaway 1",
      "[Placeholder] Key takeaway 2",
      "[Placeholder] Key takeaway 3",
    ],
    challenges: [
      "[Placeholder] Challenge or lesson learned 1",
      "[Placeholder] Challenge or lesson learned 2",
    ],
    nextSteps: [
      "[Placeholder] Next step 1",
      "[Placeholder] Next step 2",
      "[Placeholder] Next step 3",
    ],
  },
} as const;
