"use client";

import { useState, type FormEvent } from "react";
import { Section } from "@/components/Section";
import { siteConfig } from "@/lib/site";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export default function ContactPage() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json.error || `Submission failed (${res.status})`);
      }
      setStatus({ kind: "success" });
      form.reset();
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  }

  return (
    <Section className="pt-16 sm:pt-20 pb-24">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo dark:text-indigo-soft">
        Contact
      </p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
        Let&rsquo;s talk.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-ink/75 dark:text-cream/75 leading-relaxed">
        Speaking, advisory, partnership, outreach — drop a note and I&rsquo;ll
        come back to you. Based in {siteConfig.location}, available globally.
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-12 grid gap-6 max-w-2xl"
        noValidate
      >
        <Field label="Your name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Subject" name="subject" type="text" required />
        <TextAreaField label="Message" name="message" required rows={6} />

        {/* Honeypot — bots will fill this; humans won't see it. */}
        <div
          aria-hidden
          style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}
        >
          <label>
            Leave this empty
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status.kind === "submitting"}
            className="inline-flex items-center gap-2 rounded-full bg-indigo text-cream hover:bg-indigo-soft disabled:opacity-60 disabled:cursor-not-allowed px-5 py-2.5 text-sm font-medium transition-colors"
          >
            {status.kind === "submitting" ? "Sending…" : "Send message"}
          </button>

          {status.kind === "success" && (
            <span className="text-sm text-indigo dark:text-indigo-soft">
              Thanks — message received. I&rsquo;ll reply soon.
            </span>
          )}
          {status.kind === "error" && (
            <span className="text-sm text-red-600 dark:text-red-400">
              {status.message}
            </span>
          )}
        </div>
      </form>
    </Section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-medium text-ink/80 dark:text-cream/80">
        {label}
        {required && <span className="text-indigo dark:text-indigo-soft"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-md border border-ink/15 dark:border-cream/15 bg-cream dark:bg-ink-soft px-3 py-2 text-base focus:border-indigo dark:focus:border-indigo-soft outline-none transition-colors"
      />
    </label>
  );
}

function TextAreaField({
  label,
  name,
  required,
  rows = 4,
}: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-medium text-ink/80 dark:text-cream/80">
        {label}
        {required && <span className="text-indigo dark:text-indigo-soft"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        className="rounded-md border border-ink/15 dark:border-cream/15 bg-cream dark:bg-ink-soft px-3 py-2 text-base focus:border-indigo dark:focus:border-indigo-soft outline-none transition-colors resize-y"
      />
    </label>
  );
}
