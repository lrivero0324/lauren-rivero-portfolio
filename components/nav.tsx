"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { navLinks, profile } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#projects");

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      setScrolled(window.scrollY > 12);
      setProgress(max > 0 ? window.scrollY / max : 0);

      const sections = navLinks.map((link) => link.href.slice(1));
      let current: string = navLinks[0].href;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) {
          current = `#${id}`;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-[90] transition-colors duration-300 ${
        scrolled || open ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div
        className="nav-progress h-[2px] bg-accent"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div className="section-shell flex h-16 items-center justify-between gap-3 md:h-[4.5rem]">
        <a href="#content" className="flex shrink-0 items-center" aria-label="Lauren Rivero, home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                active === link.href
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground px-4 py-2 text-sm text-paper transition-transform hover:scale-[1.03]"
          >
            Resume
          </a>
        </nav>
        <div className="flex shrink-0 items-center lg:hidden">
          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute h-[1.5px] w-4 bg-foreground transition ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 bg-foreground transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 bg-foreground transition ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>
    </header>
      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-[80] flex flex-col bg-background px-6 pb-10 pt-24 lg:hidden"
        >
          <nav className="flex flex-col gap-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-serif text-4xl"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit rounded-full bg-foreground px-5 py-3 text-paper"
              onClick={() => setOpen(false)}
            >
              Download resume
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
