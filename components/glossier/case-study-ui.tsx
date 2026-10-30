"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import type { CaseStudyMedia } from "@/lib/content";

const aspectClass: Record<CaseStudyMedia["aspect"], string> = {
  "16/9": "aspect-[16/9]",
  "5/3": "aspect-[5/3]",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "9/16": "aspect-[9/16]",
  "1/1": "aspect-square",
  tall: "cs-media-frame--tall",
};

type LightboxItem = {
  src: string;
  alt: string;
  caption?: string;
};

export function CaseStudyReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.dataset.visible = "true";
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="cs-reveal">
      {children}
    </div>
  );
}

export function CaseStudyProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="cs-reading-progress"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  );
}

export function CaseStudyStickyNav({
  sections,
  variant = "desktop",
}: {
  sections: readonly { id: string; label: string; index: string }[];
  variant?: "desktop" | "mobile";
}) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const updateActive = () => {
      const headerOffset = window.matchMedia("(min-width: 768px)").matches
        ? 140
        : 120;
      let current = sections[0]?.id ?? "";
      for (const section of sections) {
        const node = document.getElementById(section.id);
        if (!node) continue;
        if (node.getBoundingClientRect().top - headerOffset <= 0) {
          current = section.id;
        }
      }
      setActive(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("hashchange", updateActive);
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("hashchange", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [sections]);

  if (variant === "mobile") {
    return (
      <nav aria-label="Case study sections" className="cs-mobile-nav">
        <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs whitespace-nowrap transition-colors ${
                  isActive
                    ? "border-foreground bg-foreground text-paper"
                    : "border-line bg-paper text-muted"
                }`}
              >
                {section.index} {section.label}
              </a>
            );
          })}
        </div>
      </nav>
    );
  }

  return (
    <nav aria-label="Case study sections" className="cs-sticky-nav">
      <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
        On this page
      </p>
      <ul className="mt-3 space-y-1 border-l border-line">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-3 text-sm transition-colors ${
                  isActive
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                <span className="mr-2 text-xs text-accent">{section.index}</span>
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ExpandIcon() {
  return (
    <span className="cs-media-expand" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M6 2H2v4M10 2h4v4M2 10v4h4M14 10v4h-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function MediaSlot({
  media,
  onOpen,
  tone = "default",
}: {
  media: CaseStudyMedia;
  onOpen?: (item: LightboxItem) => void;
  tone?: "default" | "accent";
}) {
  const filled = Boolean(media.src);
  const canOpen = filled && onOpen;
  const fit = media.fit ?? "contain";
  const cover = fit === "cover";
  // Full-page Figma exports: static top-aligned cover preview; full file in lightbox.
  const exportPreview = filled && !cover;

  return (
    <figure className="cs-media flex h-full flex-col">
      <button
        type="button"
        className={`cs-media-frame ${
          filled
            ? `${aspectClass[media.aspect]} ${
                exportPreview
                  ? "cs-media-frame--export-preview"
                  : "cs-media-frame--cover"
              }`
            : aspectClass[media.aspect]
        } ${tone === "accent" ? "cs-media-frame--accent" : ""} ${
          filled ? "cs-media-frame--filled" : "cs-media-frame--empty"
        }`}
        disabled={!canOpen}
        onClick={() => {
          if (media.src && onOpen) {
            onOpen({ src: media.src, alt: media.alt, caption: media.caption });
          }
        }}
        aria-label={
          filled
            ? `Enlarge ${media.label}`
            : `${media.label} placeholder — image not available yet`
        }
      >
        {media.src ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            unoptimized
            sizes={
              media.aspect === "9/16"
                ? "(min-width: 900px) 400px, 40vw"
                : "(min-width: 1024px) 1440px, 80vw"
            }
            quality={100}
            className="cs-media-img object-cover object-top"
          />
        ) : (
          <div className="cs-media-empty">
            <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              Placeholder
            </p>
            <p className="mt-2 text-sm text-ink-soft">{media.label}</p>
          </div>
        )}
        {canOpen ? <ExpandIcon /> : null}
      </button>
      <figcaption className="cs-media-caption">
        <span className="font-medium text-foreground/80">{media.label}</span>
        {media.caption ? ` · ${media.caption}` : null}
      </figcaption>
    </figure>
  );
}

function LightboxView({
  item,
  onClose,
}: {
  item: LightboxItem;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        setZoom((current) => Math.min(3, Number((current + 0.25).toFixed(2))));
      }
      if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        setZoom((current) => Math.max(1, Number((current - 0.25).toFixed(2))));
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="cs-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged image"
      onClick={onClose}
    >
      <div
        className="cs-lightbox-toolbar"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="cs-lightbox-zoom" role="group" aria-label="Zoom controls">
          <button
            type="button"
            className="cs-lightbox-tool"
            onClick={() =>
              setZoom((current) => Math.max(1, Number((current - 0.25).toFixed(2))))
            }
            disabled={zoom <= 1}
            aria-label="Zoom out"
          >
            −
          </button>
          <span className="cs-lightbox-zoom-label">{Math.round(zoom * 100)}%</span>
          <button
            type="button"
            className="cs-lightbox-tool"
            onClick={() =>
              setZoom((current) => Math.min(3, Number((current + 0.25).toFixed(2))))
            }
            disabled={zoom >= 3}
            aria-label="Zoom in"
          >
            +
          </button>
        </div>
        <button
          ref={closeRef}
          type="button"
          className="cs-lightbox-close"
          onClick={onClose}
          aria-label="Close image"
        >
          Close
        </button>
      </div>
      <div
        className="cs-lightbox-inner"
        onClick={(event) => event.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt={item.alt}
          className="cs-lightbox-image"
          style={
            zoom === 1
              ? undefined
              : {
                  width: `${zoom * 100}%`,
                  maxWidth: "none",
                }
          }
        />
        {item.caption ? (
          <p className="mt-3 text-center text-sm text-paper/80">{item.caption}</p>
        ) : null}
        <p className="cs-lightbox-hint">
          Scroll to inspect · use + / − to zoom · Esc to close
        </p>
      </div>
    </div>
  );
}

export function Lightbox({
  item,
  onClose,
}: {
  item: LightboxItem | null;
  onClose: () => void;
}) {
  if (!item) return null;
  return <LightboxView key={item.src} item={item} onClose={onClose} />;
}

export function BeforeAfterSlider({
  before,
  after,
  onOpen,
}: {
  before: CaseStudyMedia;
  after: CaseStudyMedia;
  onOpen?: (item: LightboxItem) => void;
}) {
  const [value, setValue] = useState(50);
  const labelId = useId();
  const bothReady = Boolean(before.src && after.src);

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowLeft") {
      setValue((current) => Math.max(0, current - 2));
    }
    if (event.key === "ArrowRight") {
      setValue((current) => Math.min(100, current + 2));
    }
  };

  return (
    <div className="cs-compare">
      <div className="cs-compare-frame aspect-[16/9]">
        {bothReady ? (
          <>
            <div className="cs-compare-layer">
              <Image
                src={after.src!}
                alt={after.alt}
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-contain p-3 md:p-5"
              />
            </div>
            <div
              className="cs-compare-layer cs-compare-before"
              style={{ width: `${value}%` }}
            >
              <Image
                src={before.src!}
                alt={before.alt}
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-contain p-3 md:p-5"
              />
            </div>
            <div
              className="cs-compare-handle"
              style={{ left: `${value}%` }}
              aria-hidden="true"
            />
            <input
              id={labelId}
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={(event) => setValue(Number(event.target.value))}
              onKeyDown={onKeyDown}
              aria-label="Compare original and redesigned homepage"
              className="cs-compare-range"
            />
          </>
        ) : (
          <div className="cs-compare-placeholder">
            <div className="grid h-full grid-cols-2">
              <div className="flex flex-col justify-end border-r border-dashed border-line/80 p-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                  Before placeholder
                </p>
                <p className="mt-2 text-sm text-ink-soft">{before.label}</p>
              </div>
              <button
                type="button"
                className="flex flex-col justify-end p-4 text-left"
                disabled={!after.src || !onOpen}
                onClick={() => {
                  if (after.src && onOpen) {
                    onOpen({
                      src: after.src,
                      alt: after.alt,
                      caption: after.caption,
                    });
                  }
                }}
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                  {after.src ? "After · tap to enlarge" : "After placeholder"}
                </p>
                <p className="mt-2 text-sm text-ink-soft">{after.label}</p>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="cs-media-caption">
        <p>
          <span className="font-medium text-foreground/80">
            Before · original homepage
          </span>
          {" · "}
          After · redesigned homepage
        </p>
        {!bothReady ? (
          <p className="mt-1">
            Interactive slider unlocks when both before and after images are set
            in content.
          </p>
        ) : null}
      </div>
    </div>
  );
}

/** Build a Figma embed URL; strips clutter and prefers contain scaling for device frames. */
export function figmaEmbedSrc(url: string) {
  try {
    const parsed = new URL(url);
    parsed.searchParams.delete("show-proto-sidebar");
    parsed.searchParams.delete("t");
    // Contain keeps MacBook / iPhone presentations fully visible in the iframe.
    parsed.searchParams.set("scaling", "contain");
    parsed.searchParams.set("hide-ui", "1");
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(parsed.toString())}`;
  } catch {
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
  }
}

export function FigmaPreview({
  url,
  label,
}: {
  url: string;
  label: string;
}) {
  const ready = Boolean(url.trim());

  return (
    <div className="cs-figma">
      <div className="cs-figma-frame aspect-[16/9]">
        {ready ? (
          <iframe
            title="Figma prototype preview"
            src={figmaEmbedSrc(url)}
            className="h-full w-full border-0"
            allowFullScreen
          />
        ) : (
          <div className="cs-figma-empty">
            <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
              Prototype placeholder
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-ink-soft">
              Paste your Figma prototype or file URL into{" "}
              <code className="text-foreground">glossierCaseStudy.figmaUrl</code>{" "}
              in <code className="text-foreground">lib/content.ts</code> to embed
              an interactive preview here.
            </p>
          </div>
        )}
      </div>
      {ready ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="cs-media-caption text-link"
        >
          {label}
        </a>
      ) : (
        <p className="cs-media-caption">
          <span className="font-medium text-foreground/80">{label}</span>
          {" · awaiting URL"}
        </p>
      )}
    </div>
  );
}

/** Lazy-load a Figma proto so videos (and audio) don’t start until the user opts in. */
function ProtoEmbed({ url, title }: { url: string; title: string }) {
  const [active, setActive] = useState(false);

  if (!active) {
    return (
      <button
        type="button"
        className="cs-proto-activate"
        onClick={() => setActive(true)}
      >
        <span className="cs-proto-activate-label">View prototype</span>
        <span className="cs-proto-activate-hint">Loads on click · keeps audio off until then</span>
      </button>
    );
  }

  return (
    <iframe
      title={title}
      src={figmaEmbedSrc(url)}
      allowFullScreen
    />
  );
}

/** Overview hero: desktop + mobile Figma device presentations side by side. */
export function OverviewPrototypeShowcase({
  desktopUrl,
  mobileUrl,
  desktopLabel,
  mobileLabel,
}: {
  desktopUrl: string;
  mobileUrl: string;
  desktopLabel: string;
  mobileLabel: string;
}) {
  return (
    <div className="cs-proto-pair">
      <figure className="cs-proto-item cs-proto-item--desktop">
        <div className="cs-proto-frame cs-proto-frame--desktop">
          <ProtoEmbed url={desktopUrl} title={desktopLabel} />
        </div>
        <figcaption className="cs-media-caption">
          <a
            href={desktopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {desktopLabel}
          </a>
        </figcaption>
      </figure>
      <figure className="cs-proto-item cs-proto-item--mobile">
        <div className="cs-proto-frame cs-proto-frame--mobile">
          <ProtoEmbed url={mobileUrl} title={mobileLabel} />
        </div>
        <figcaption className="cs-media-caption">
          <a
            href={mobileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {mobileLabel}
          </a>
        </figcaption>
      </figure>
    </div>
  );
}

export function useLightbox() {
  const [item, setItem] = useState<LightboxItem | null>(null);
  const open = useCallback((next: LightboxItem) => setItem(next), []);
  const close = useCallback(() => setItem(null), []);
  return { item, open, close };
}
