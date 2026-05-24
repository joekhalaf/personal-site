import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — ${siteConfig.title} based in ${siteConfig.location}.`,
};

export default function AboutPage() {
  return (
    <Section className="pt-16 sm:pt-20 pb-20">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo dark:text-indigo-soft">
        About
      </p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
        Senior IC tech leader who lives in the gap between architecture and
        business outcomes.
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[280px_1fr]">
        {/* Headshot column */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-ink/10 dark:border-cream/10 bg-cream-soft dark:bg-ink-soft">
            {/*
              Headshot placeholder. Drop a JPG/PNG at
              public/headshot.jpg (square, ~600px) and this will render it.
              Until then, you'll see the placeholder copy below.
            */}
            <Image
              src="/joe-telescope.jpg"
              alt={`${siteConfig.name}, ${siteConfig.title}`}
              fill
              priority
              sizes="(min-width: 1024px) 280px, 280px"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-xs text-fog dark:text-fog-light">
            To swap this photo, replace <code className="font-mono">public/joe-telescope.jpg</code>.
          </p>
        </div>

        {/* Bio column */}
        <div className="prose-content text-ink/85 dark:text-cream/85">
          <p>
            I&rsquo;m Joe Khalaf — a Houston-based{" "}
            <strong>Technology and Business Strategist</strong> with 25+ years
            of enterprise IT experience that spans hands-on architecture,
            professional services delivery, pre-sales strategy, and post-sales
            platform adoption. The thread through all of it: I help Fortune 500
            customers translate technology investments into outcomes their
            CFO and CEO can defend in a board meeting.
          </p>
          <p>
            Today I&rsquo;m a Platform Adoption Services Architect at Broadcom,
            driving VMware Cloud Foundation adoption across the TOLA and
            Midwest regions. I&rsquo;ve helped over two dozen enterprise
            customers stand up VCF — orchestrating delivery across internal
            Broadcom services, customer-purchased professional services, and
            certified partners to ship measurable value, not just deployed
            software.
          </p>
          <p>
            Before adoption, I spent eight years as the regional Business
            Solution Strategist for TOLA Enterprise & Strategic accounts —
            building executive business cases that quantified cost takeout,
            developer productivity, and operational efficiency. That work
            anchored CIO and CTO conversations and helped land deals up to a{" "}
            <strong>$200M / 5-year strategic transformation</strong>, with
            $1.2B+ in quantified customer value. Broadcom/VMware named me{" "}
            <em>Strategist of the Year</em> in 2019 and a{" "}
            <em>President&rsquo;s Club</em> honoree in 2020.
          </p>
          <p>
            Before VMware (now Broadcom), I led global Professional Services
            programs at NetApp, ran enterprise Microsoft and SOX-compliance
            engagements at Avanade, and consulted for Fortune 500 customers
            from IBM Global Services. The pattern across all of it: enterprise
            architecture that respects how customers actually operate.
          </p>
          <p>
            Outside of work, I&rsquo;m a NASA/JPL{" "}
            <Link href="/astronomy">Solar System Ambassador</Link>, a past
            President of the Houston Astronomical Society, and currently
            Operations Coordinator for the Texas Star Party. The constant: a
            love of dark skies and the people who look up.
          </p>

          <h2>What I&rsquo;m doing right now</h2>
          <ul>
            <li>
              Leading VCF adoption engagements across TOLA and the Midwest at
              Broadcom.
            </li>
            <li>
              Coordinating operations for the Texas Star Party (2025–present).
            </li>
            <li>
              Speaking on NASA missions and directives as a Solar System
              Ambassador across the Houston area.
            </li>
            <li>
              Reading, building, and learning in public — see the{" "}
              <Link href="/blog">Journal</Link>.
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap gap-3 not-prose">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-full bg-indigo text-cream hover:bg-indigo-soft px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Full experience →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 dark:border-cream/20 hover:border-indigo dark:hover:border-indigo-soft hover:text-indigo dark:hover:text-indigo-soft px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Work with me
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
