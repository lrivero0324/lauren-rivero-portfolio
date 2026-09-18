"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/content";

export function Contact() {
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  };

  return (
    <section id="contact" className="pb-20 md:pb-28">
      <div className="section-shell overflow-hidden rounded-[2rem] bg-foreground px-6 py-12 text-paper md:px-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#e8c4b6]">
              Contact
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
              Let&apos;s create something thoughtful together.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-paper/75">
              I&apos;m currently open to UX/UI design, web design, and creative
              opportunities. If you&apos;re hiring for an entry-level or new-grad
              role, I&apos;d love to hear from you.
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <p className="text-xs tracking-[0.18em] uppercase text-paper/50">
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-lg underline-offset-4 hover:underline"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <p className="text-xs tracking-[0.18em] uppercase text-paper/50">
                  Phone
                </p>
                <a
                  href={profile.phoneHref}
                  className="text-lg underline-offset-4 hover:underline"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <p className="text-xs tracking-[0.18em] uppercase text-paper/50">
                  LinkedIn
                </p>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg underline-offset-4 hover:underline"
                >
                  linkedin.com/in/lauren-rivero
                </a>
              </li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-paper/70">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-paper outline-none placeholder:text-paper/30 focus:border-[#e8c4b6]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-paper/70">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-paper outline-none placeholder:text-paper/30 focus:border-[#e8c4b6]"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-paper/70">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-paper outline-none placeholder:text-paper/30 focus:border-[#e8c4b6]"
                placeholder="Tell me about the role or project."
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-paper px-5 py-3 text-sm text-foreground transition-transform hover:scale-[1.03]"
            >
              Send a note
            </button>
            {status ? (
              <p className="text-sm text-paper/70" role="status">
                {status}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
