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
};

export const projects: readonly Project[] = [
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
  {
    id: "glossier",
    title: "Glossier Redesign",
    subtitle: "Conceptual UX/UI redesign for an e-commerce website",
    dates: "February 2025",
    role: "UX/UI Designer",
    cardRole: "UX/UI Designer",
    timeline: "1.5 weeks",
    tools: "Figma, Photoshop",
    image: "/work/glossier.png",
    imageAlt:
      "Desktop and mobile mockups of a Glossier-inspired e-commerce redesign with product photography and a shopping bag.",
    accent: "#E4D7C8",
    overview:
      "A conceptual redesign focused on enhancing Glossier's e-commerce experience while preserving its clean, minimalist aesthetic.",
    brief:
      "The brand already had a distinct visual voice. The opportunity was to strengthen how people browse and shop without losing that softness: clearer hierarchy, more confident product focus, and an easier path from discovery to bag.",
    approach:
      "I redesigned responsive desktop and mobile interfaces with a product-first layout, refined the visual hierarchy, and produced high-fidelity mockups that keep Glossier's minimal language while making shopping feel more intuitive.",
    highlights: [
      "Redesigned responsive desktop and mobile interfaces",
      "Refined product-focused visual hierarchy",
      "Enhanced browsing and shopping experience",
      "High-fidelity interface mockups",
    ],
  },
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
];
