import { about, education, skillGroups } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="pb-20 md:pb-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight md:text-5xl">
            {about.title}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-ink-soft">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.school}
                className="rounded-[1.25rem] border border-line bg-paper p-5"
              >
                <p className="text-sm text-muted">{item.dates}</p>
                <h3 className="mt-2 font-serif text-xl">{item.school}</h3>
                <p className="mt-1 text-sm text-ink-soft">{item.degree}</p>
                <p className="mt-1 text-sm text-muted">
                  {item.detail} · {item.place}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h3 className="sr-only">Capabilities</h3>
          <p className="eyebrow">Capabilities</p>
          <div className="mt-8 space-y-8">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-semibold tracking-wide uppercase text-muted">
                  {group.label}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
