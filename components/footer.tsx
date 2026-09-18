import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.fullName}</p>
        <div className="flex flex-wrap gap-5">
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <a href={profile.resumeHref} className="hover:text-foreground">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
