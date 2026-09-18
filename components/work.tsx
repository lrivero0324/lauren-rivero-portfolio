"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects, type Project } from "@/lib/content";

export function Work() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.replace("#", "");
      if (projects.some((project) => project.id === id)) {
        setOpenId(id);
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const toggle = (project: Project) => {
    const next = openId === project.id ? null : project.id;
    setOpenId(next);
    if (next) {
      history.replaceState(null, "", `#${project.id}`);
    }
  };

  return (
    <section id="projects" className="pb-20 md:pb-28">
      <div className="section-shell">
        <h2 className="sr-only">Recent projects</h2>
        <p className="eyebrow">Recent projects</p>
        <div className="mt-8 space-y-6">
          {projects.map((project) => {
            const isOpen = openId === project.id;
            return (
              <article
                key={project.id}
                id={project.id}
                className="overflow-hidden rounded-[1.75rem] border border-line bg-paper"
                style={{ backgroundColor: isOpen ? project.accent : undefined }}
              >
                <button
                  type="button"
                  className="grid w-full items-stretch text-left lg:grid-cols-[1.15fr_0.85fr]"
                  aria-expanded={isOpen}
                  aria-controls={`${project.id}-study`}
                  aria-label={`${isOpen ? "Close" : "Open"} case study: ${project.title}`}
                  onClick={() => toggle(project)}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ backgroundColor: project.accent }}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={2500}
                      height={1500}
                      quality={90}
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="aspect-[5/3] h-auto w-full object-contain p-4 md:p-6"
                    />
                  </div>
                  <div className="flex h-full flex-col p-6 md:p-8">
                    <div>
                      <p className="text-sm text-muted">{project.dates}</p>
                      <h3 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-ink-soft">{project.subtitle}</p>
                    </div>
                    <div className="mt-auto grid grid-cols-[1fr_auto] items-center gap-4 pt-8">
                      <p className="text-sm text-muted">
                        {project.cardRole} · {project.timeline}
                      </p>
                      <span className="justify-self-end rounded-full border border-foreground/15 bg-background/70 px-4 py-2 text-sm whitespace-nowrap">
                        {isOpen ? "Close study" : "Read case study"}
                      </span>
                    </div>
                  </div>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                  inert={!isOpen}
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden">
                    <div
                      id={`${project.id}-study`}
                      className="grid gap-8 border-t border-foreground/10 px-6 py-8 lg:grid-cols-12 lg:px-8"
                    >
                      <div className="lg:col-span-7">
                        <h4 className="font-serif text-2xl">The brief</h4>
                        <p className="mt-3 leading-7 text-ink-soft">{project.brief}</p>
                        <h4 className="mt-8 font-serif text-2xl">Approach</h4>
                        <p className="mt-3 leading-7 text-ink-soft">
                          {project.approach}
                        </p>
                      </div>
                      <div className="lg:col-span-5">
                        <dl className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <dt className="text-muted">Role</dt>
                            <dd className="mt-1">{project.role}</dd>
                          </div>
                          <div>
                            <dt className="text-muted">Timeline</dt>
                            <dd className="mt-1">{project.timeline}</dd>
                          </div>
                          <div className="col-span-2">
                            <dt className="text-muted">Tools</dt>
                            <dd className="mt-1">{project.tools}</dd>
                          </div>
                        </dl>
                        <h4 className="mt-6 text-sm font-semibold tracking-wide uppercase">
                          Highlights
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {project.highlights.map((item) => (
                            <li key={item} className="flex gap-2 text-sm leading-6">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
