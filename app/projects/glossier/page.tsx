import type { Metadata } from "next";
import { GlossierCaseStudy } from "@/components/glossier/glossier-case-study";
import { glossierCaseStudy, profile } from "@/lib/content";

export const metadata: Metadata = {
  title: `${glossierCaseStudy.cardTitle} — ${profile.name}`,
  description: glossierCaseStudy.heroSubtitle,
};

export default function GlossierCaseStudyPage() {
  return <GlossierCaseStudy />;
}
