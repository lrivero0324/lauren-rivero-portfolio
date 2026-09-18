import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero relative pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="section-shell relative grid items-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <p className="eyebrow">
            {profile.role} · {profile.location}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-[2.35rem] leading-[1.12] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            {profile.headline}
          </h1>
          <p className="mt-6 w-full max-w-xl text-lg leading-8 text-ink-soft">
            {profile.intro}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="rounded-full bg-foreground px-5 py-3 text-center text-sm text-paper transition-transform hover:scale-[1.03]"
            >
              View recent projects
            </a>
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-foreground/15 bg-paper px-5 py-3 text-center text-sm transition-transform hover:scale-[1.03]"
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="px-2 py-3 text-center text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
