import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="pb-20 md:pb-28">
      <div className="section-shell">
        <h2 className="sr-only">Experience</h2>
        <p className="eyebrow">Experience</p>
        <ol className="mt-8 space-y-4">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.role}`}
              className="rounded-[1.5rem] border border-line bg-paper p-6 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">{job.role}</h3>
                  <p className="mt-1 text-ink-soft">
                    {job.company} · {job.place}
                  </p>
                </div>
                <p className="text-sm text-muted md:text-right">{job.dates}</p>
              </div>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
