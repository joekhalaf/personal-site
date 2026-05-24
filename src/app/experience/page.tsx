import type { Metadata } from "next";
import { Section } from "@/components/Section";
import {
  currentRole,
  previousRoles,
  competencies,
  industriesServed,
  certifications,
  recognitions,
  type Role,
} from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "25+ years across enterprise IT — Broadcom/VMware, NetApp, Avanade, IBM Global Services.",
};

export default function ExperiencePage() {
  return (
    <Section className="pt-16 sm:pt-20 pb-24">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo dark:text-indigo-soft">
        Experience
      </p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
        25+ years across enterprise IT — delivery, pre-sales, strategy, and adoption.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-ink/75 dark:text-cream/75 leading-relaxed">
        I&rsquo;ve worn most of the hats — architect, consultant, pre-sales
        SA, strategist, and now adoption services architect. Below is the
        trajectory, the recognition, and the toolkit.
      </p>

      {/* Selected recognition */}
      <div className="mt-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Selected recognition
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {recognitions.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-ink/10 dark:border-cream/10 bg-cream-soft/40 dark:bg-ink-soft/40 p-5"
            >
              <p className="font-display text-base font-semibold text-indigo dark:text-indigo-soft">
                {r.title}
              </p>
              <p className="mt-2 text-sm text-ink/75 dark:text-cream/75 leading-relaxed">
                {r.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Career timeline
        </h2>

        <div className="mt-8 space-y-12">
          <RoleBlock role={currentRole} current />
          {previousRoles.map((role, i) => (
            <RoleBlock key={`${role.company}-${role.dates}-${i}`} role={role} />
          ))}
        </div>

        <p className="mt-8 text-sm text-fog dark:text-fog-light">
          Prior experience available on request.
        </p>
      </div>

      {/* Competencies */}
      <div className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Core competencies
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {Object.entries(competencies).map(([group, items]) => (
            <div
              key={group}
              className="rounded-xl border border-ink/10 dark:border-cream/10 p-5"
            >
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-indigo dark:text-indigo-soft">
                {group}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((it) => (
                  <li
                    key={it}
                    className="text-xs px-2.5 py-1 rounded-md bg-cream-soft dark:bg-ink-soft text-ink/80 dark:text-cream/80"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Industries */}
      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Industries served
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {industriesServed.map((i) => (
              <li
                key={i}
                className="text-sm px-3 py-1.5 rounded-full border border-ink/15 dark:border-cream/15"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Certifications
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ink/80 dark:text-cream/80">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-stardust">★</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function RoleBlock({ role, current = false }: { role: Role; current?: boolean }) {
  return (
    <div className="relative grid gap-2 md:grid-cols-[200px_1fr]">
      <div className="md:pt-1">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-fog dark:text-fog-light">
          {role.dates}
        </p>
        {current && (
          <span className="mt-1 inline-block text-[10px] uppercase tracking-wider rounded-full bg-indigo/10 dark:bg-indigo-soft/15 text-indigo dark:text-indigo-soft px-2 py-0.5">
            Current
          </span>
        )}
      </div>
      <div>
        <p className="font-display text-lg sm:text-xl font-semibold tracking-tight">
          {role.title}
        </p>
        <p className="text-sm text-ink/70 dark:text-cream/70">
          {role.company} · {role.location}
        </p>
        <p className="mt-3 text-base text-ink/85 dark:text-cream/85 leading-relaxed">
          {role.summary}
        </p>
        <ul className="mt-4 space-y-2">
          {role.highlights.map((h, idx) => (
            <li
              key={idx}
              className="flex gap-3 text-sm text-ink/80 dark:text-cream/80 leading-relaxed"
            >
              <span className="text-indigo dark:text-indigo-soft mt-1.5">•</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
