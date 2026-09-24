import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laurenalexisrivero.com"),
  title: `${profile.name} — ${profile.role}`,
  description:
    "Portfolio of Lauren Rivero, an entry-level UX/UI designer and University of Florida graduate student. Recently an Experience Design Intern at Truist.",
  authors: [{ name: profile.fullName }],
  keywords: [
    "UX designer",
    "UI designer",
    "new graduate",
    "portfolio",
    "Figma",
    "Truist",
    "University of Florida",
  ],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description:
      "Projects, experience, and contact for Lauren Rivero, UX/UI designer.",
    type: "website",
    locale: "en_US",
    url: "https://www.laurenalexisrivero.com",
    siteName: profile.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description:
      "Projects, experience, and contact for Lauren Rivero, UX/UI designer.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-clip bg-background text-foreground">
        <div className="grain" aria-hidden="true" />
        <div className="page-wash" aria-hidden="true" />
        <div className="relative z-[1]">{children}</div>
      </body>
    </html>
  );
}
