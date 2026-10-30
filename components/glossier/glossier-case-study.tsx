"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import {
  BeforeAfterSlider,
  CaseStudyReveal,
  CaseStudyStickyNav,
  FigmaPreview,
  Lightbox,
  MediaSlot,
  OverviewPrototypeShowcase,
  useLightbox,
} from "@/components/glossier/case-study-ui";
import { glossierCaseStudy } from "@/lib/content";

function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <header className="mb-5 border-b border-line pb-4 md:mb-7">
      <p className="font-serif text-sm tracking-[0.2em] text-accent uppercase">
        {index}
      </p>
      <h2 className="mt-2 font-serif text-3xl tracking-tight md:text-4xl">
        {title}
      </h2>
    </header>
  );
}

function Subheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-serif text-2xl tracking-tight md:text-[1.65rem]">
      {children}
    </h3>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return <div className="cs-prose">{children}</div>;
}

export function GlossierCaseStudy() {
  const study = glossierCaseStudy;
  const { item, open, close } = useLightbox();

  return (
    <>
      <Nav activeHref="#projects" />

      <main className="pb-20 pt-28 md:pb-28 md:pt-32">
        <div className="cs-shell">
          <Link href="/#projects" className="text-link text-sm">
            <span aria-hidden="true">←</span>
            Return to projects
          </Link>

          <p className="eyebrow mt-7">UX case study · {study.dates}</p>
          <h1 className="cs-prose mt-4 font-serif text-[2.35rem] leading-[1.12] tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]">
            {study.heroTitle}
          </h1>
          <p className="cs-prose mt-5 text-lg leading-8 text-ink-soft">
            {study.heroSubtitle}
          </p>
        </div>

        <div className="cs-mobile-nav-bar lg:hidden">
          <div className="cs-shell">
            <CaseStudyStickyNav sections={study.sections} variant="mobile" />
          </div>
        </div>

        <div className="cs-shell mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[168px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[180px_minmax(0,1fr)] xl:gap-14">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <CaseStudyStickyNav sections={study.sections} variant="desktop" />
            </div>
          </aside>

          <div className="min-w-0 space-y-14 md:space-y-16">
            {/* 01 Overview */}
            <CaseStudyReveal>
              <section id="overview" className="scroll-mt-28">
                <SectionHeading index="01" title="Project overview" />
                <div className="cs-showcase">
                  {study.overview.desktopProtoUrl &&
                  study.overview.mobileProtoUrl ? (
                    <OverviewPrototypeShowcase
                      desktopUrl={study.overview.desktopProtoUrl}
                      mobileUrl={study.overview.mobileProtoUrl}
                      desktopLabel={study.overview.desktopProtoLabel}
                      mobileLabel={study.overview.mobileProtoLabel}
                    />
                  ) : (
                    <div className="cs-final-stage">
                      <MediaSlot
                        media={study.overview.heroMockup}
                        onOpen={open}
                        tone="accent"
                      />
                    </div>
                  )}
                </div>
                <dl className="mt-8 grid gap-5 border-y border-line py-5 sm:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <dt className="text-xs tracking-[0.18em] text-muted uppercase">Role</dt>
                    <dd className="mt-2 text-sm leading-6">{study.role}</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.18em] text-muted uppercase">Timeline</dt>
                    <dd className="mt-2 text-sm leading-6">{study.timeline}</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.18em] text-muted uppercase">Tools</dt>
                    <dd className="mt-2 text-sm leading-6">{study.tools.join(" · ")}</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.18em] text-muted uppercase">Dates</dt>
                    <dd className="mt-2 text-sm leading-6">{study.dates}</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.18em] text-muted uppercase">Platform</dt>
                    <dd className="mt-2 text-sm leading-6">{study.platform}</dd>
                  </div>
                  <div>
                    <dt className="text-xs tracking-[0.18em] text-muted uppercase">Team</dt>
                    <dd className="mt-2 text-sm leading-6">{study.team}</dd>
                  </div>
                </dl>
              </section>
            </CaseStudyReveal>

            {/* 02 Problem */}
            <CaseStudyReveal>
              <section id="problem" className="scroll-mt-28">
                <SectionHeading index="02" title="The problem" />
                <Prose>
                  <p className="text-lg leading-8 text-ink-soft">{study.problem.context}</p>
                  <p className="mt-4 leading-7 text-ink-soft">
                    {study.problem.businessContext}
                  </p>
                </Prose>
                <ol className="mt-8 space-y-5 border-t border-line pt-6">
                  {study.problem.painPoints.map((point, index) => (
                    <li
                      key={point.title}
                      className="grid gap-2 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5"
                    >
                      <span className="font-serif text-xl text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="cs-prose">
                        <h3 className="font-serif text-xl tracking-tight">{point.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-ink-soft">{point.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="cs-showcase mt-8">
                  <MediaSlot media={study.problem.originalScreenshot} onOpen={open} />
                </div>
                <div className="mt-8">
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Website performance baselines
                  </p>
                  <p className="cs-prose mt-2 text-sm leading-6 text-muted">
                    Existing site baselines — kept separate from redesign outcomes.
                  </p>
                  <div className="mt-5 grid gap-6 border-t border-line pt-5 sm:grid-cols-3">
                    {study.problem.performanceStats.map((stat) => (
                      <div key={stat.id}>
                        <p className="font-serif text-3xl tracking-tight md:text-4xl">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-sm font-medium">{stat.label}</p>
                        <p className="mt-1 text-xs leading-5 text-muted">{stat.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </CaseStudyReveal>

            {/* 03 Research */}
            <CaseStudyReveal>
              <section id="research" className="scroll-mt-28">
                <SectionHeading index="03" title="Research & discovery" />
                <Prose>
                  <p className="text-lg leading-8 text-ink-soft">{study.research.intro}</p>
                </Prose>

                <div className="cs-showcase mt-7">
                  <MediaSlot media={study.research.annotatedHomepage} onOpen={open} />
                </div>

                <div className="mt-9 grid gap-8 border-t border-line pt-7 md:grid-cols-2">
                  <div>
                    <Subheading>{study.research.audit.title}</Subheading>
                    <p className="mt-3 leading-7 text-ink-soft">{study.research.audit.body}</p>
                  </div>
                  <div>
                    <Subheading>{study.research.audience.title}</Subheading>
                    <p className="mt-3 leading-7 text-ink-soft">{study.research.audience.body}</p>
                  </div>
                </div>

                <div className="mt-9 border-t border-line pt-7">
                  <Subheading>{study.research.competitive.title}</Subheading>
                  <p className="cs-prose mt-3 leading-7 text-ink-soft">
                    {study.research.competitive.body}
                  </p>
                  <div className="cs-compare-refs mt-6">
                    {study.research.competitive.references.map((media) => (
                      <MediaSlot key={media.id} media={media} onOpen={open} />
                    ))}
                  </div>
                </div>

                <div className="mt-9 border-t border-line pt-7">
                  <Subheading>Key insights</Subheading>
                  <ol className="mt-5 space-y-5">
                    {study.research.insights.map((insight, index) => (
                      <li
                        key={insight.title}
                        className="grid gap-2 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5"
                      >
                        <span className="font-serif text-xl text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="cs-prose">
                          <h4 className="font-serif text-xl tracking-tight">{insight.title}</h4>
                          <p className="mt-2 leading-7 text-ink-soft">{insight.body}</p>
                          <p className="mt-2 text-sm leading-6 text-muted">{insight.evidence}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            </CaseStudyReveal>

            {/* 04 Process */}
            <CaseStudyReveal>
              <section id="process" className="scroll-mt-28">
                <SectionHeading index="04" title="Design process" />
                <Prose>
                  <p className="text-lg leading-8 text-ink-soft">{study.process.strategy}</p>
                </Prose>
                <ul className="mt-7 space-y-5 border-t border-line pt-6">
                  {study.process.decisions.map((decision, index) => (
                    <li
                      key={decision.title}
                      className="grid gap-2 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5"
                    >
                      <span className="font-serif text-xl text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="cs-prose">
                        <h3 className="font-serif text-xl tracking-tight">{decision.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-ink-soft">{decision.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Subheading>Low-fidelity exploration</Subheading>
                  <p className="cs-prose mt-2 text-sm text-muted">
                    Wide desktop frame with paired mobile — tap to enlarge when images are added.
                  </p>
                  <div className="cs-pair mt-5">
                    <div className="cs-pair-desktop min-w-0">
                      <MediaSlot media={study.process.desktopWire} onOpen={open} />
                    </div>
                    <div className="cs-pair-mobile min-w-0">
                      <MediaSlot media={study.process.mobileWire} onOpen={open} />
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Subheading>High-fidelity Figma frames</Subheading>
                  <p className="cs-prose mt-2 text-sm text-muted">
                    Final visual direction at desktop and mobile proportions.
                  </p>
                  <div className="cs-pair mt-5">
                    <div className="cs-pair-desktop min-w-0">
                      <MediaSlot media={study.process.desktopHifi} onOpen={open} />
                    </div>
                    <div className="cs-pair-mobile min-w-0">
                      <MediaSlot media={study.process.mobileHifi} onOpen={open} />
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-line pt-7">
                  <Subheading>{study.process.designSystem.title}</Subheading>
                  <p className="cs-prose mt-2 text-sm text-muted">
                    {study.process.designSystem.note}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4">
                    {study.process.designSystem.colors.map((swatch) => (
                      <div key={swatch.name} className="min-w-[6.5rem]">
                        <div
                          className="h-14 w-full rounded-lg border border-line"
                          style={{ backgroundColor: swatch.value }}
                        />
                        <p className="mt-2 text-sm">{swatch.name}</p>
                        <p className="text-xs text-muted">{swatch.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </CaseStudyReveal>

            {/* 05 Final design */}
            <CaseStudyReveal>
              <section id="final-design" className="scroll-mt-28">
                <SectionHeading index="05" title="Final design" />
                <Prose>
                  <p className="text-lg leading-8 text-ink-soft">{study.finalDesign.intro}</p>
                </Prose>

                <div className="cs-showcase cs-final-stage mt-7">
                  <MediaSlot
                    media={study.finalDesign.desktop}
                    onOpen={open}
                    tone="accent"
                  />
                </div>

                <div className="mt-10">
                  <Subheading>Responsive mobile designs</Subheading>
                  <div className="cs-mobile-gallery mt-5">
                    {study.finalDesign.mobile.map((media) => (
                      <MediaSlot key={media.id} media={media} onOpen={open} />
                    ))}
                  </div>
                </div>

                <div className="mt-12 border-t border-line pt-8">
                  <Subheading>Interaction Highlights</Subheading>
                  <p className="cs-prose mt-2 text-sm leading-6 text-muted">
                    Key interactive moments from the prototype — image or short video exports.
                  </p>
                  <div className="cs-interactions mt-6">
                    {study.finalDesign.interactionHighlights.map((media) => (
                      <MediaSlot key={media.id} media={media} onOpen={open} />
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <Subheading>Before &amp; after comparison</Subheading>
                  <p className="cs-prose mt-2 text-sm leading-6 text-muted">
                    Interactive slider unlocks when both images are supplied.
                  </p>
                  <div className="cs-showcase mt-5">
                    <BeforeAfterSlider
                      before={study.finalDesign.beforeAfter.before}
                      after={study.finalDesign.beforeAfter.after}
                      onOpen={open}
                    />
                  </div>
                </div>

                <div className="mt-12">
                  <Subheading>Figma prototype</Subheading>
                  <p className="cs-prose mt-2 text-sm leading-6 text-muted">
                    Set <code className="text-foreground">figmaUrl</code> in{" "}
                    <code className="text-foreground">lib/content.ts</code> to embed the
                    interactive prototype.
                  </p>
                  <div className="cs-showcase mt-5">
                    <FigmaPreview url={study.figmaUrl} label={study.figmaLabel} />
                  </div>
                </div>
              </section>
            </CaseStudyReveal>

            {/* 06 Results */}
            <CaseStudyReveal>
              <section id="results" className="scroll-mt-28">
                <SectionHeading index="06" title="Results & impact" />
                <Prose>
                  <p className="text-lg leading-8 text-ink-soft">{study.results.summary}</p>
                </Prose>

                <div className="mt-8 grid gap-10 border-t border-line pt-7 md:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                      Design Outcomes
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {study.results.designOutcomes.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                      Success Metrics
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {study.results.successMetrics.map((metric) => (
                        <li key={metric.label}>
                          <p className="text-sm font-medium">{metric.label}</p>
                          <p className="mt-1 text-sm leading-6 text-muted">{metric.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-line pt-6">
                  <h3 className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Usability findings
                  </h3>
                  <p className="cs-prose mt-3 leading-7 text-ink-soft">
                    {study.results.usabilityNote}
                  </p>
                </div>
              </section>
            </CaseStudyReveal>

            {/* 07 Reflection */}
            <CaseStudyReveal>
              <section id="reflection" className="scroll-mt-28">
                <SectionHeading index="07" title="Reflection" />
                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <Subheading>Key takeaways</Subheading>
                    <ul className="mt-5 space-y-4">
                      {study.reflection.takeaways.map((item, index) => (
                        <li
                          key={item}
                          className="grid gap-2 sm:grid-cols-[2.5rem_1fr]"
                        >
                          <span className="font-serif text-lg text-accent">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="leading-7 text-ink-soft">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Subheading>Challenges &amp; lessons</Subheading>
                    <ul className="mt-5 space-y-3">
                      {study.reflection.challenges.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-9 border-t border-line pt-7">
                  <Subheading>Next steps</Subheading>
                  <ul className="mt-5 space-y-3">
                    {study.reflection.nextSteps.map((step) => (
                      <li key={step} className="flex gap-3 text-sm leading-6">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
                        {step}
                      </li>
                    ))}
                  </ul>
                  <Link href="/#projects" className="text-link mt-8 text-sm">
                    <span aria-hidden="true">←</span>
                    Return to projects
                  </Link>
                </div>
              </section>
            </CaseStudyReveal>
          </div>
        </div>
      </main>

      <Footer />
      <Lightbox item={item} onClose={close} />
    </>
  );
}
