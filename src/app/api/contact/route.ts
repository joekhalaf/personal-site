import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

/**
 * Contact form endpoint.
 *
 * Behavior:
 *  - Validates payload (name, email, subject, message).
 *  - Drops silently if the honeypot field is filled (likely a bot).
 *  - If RESEND_API_KEY is set, sends email via Resend to the address
 *    in siteConfig.contactDeliveryEmail.
 *  - If RESEND_API_KEY is NOT set (e.g., in local dev before you've
 *    wired Resend), logs the message to the server console and still
 *    returns success so you can test the UI.
 *
 * To enable production email:
 *  1. Sign up at https://resend.com (free tier is fine).
 *  2. Verify the joekhalaf.com domain in Resend.
 *  3. Set RESEND_API_KEY in your Vercel project's Environment Variables.
 *  4. (Optional) Override CONTACT_FROM_EMAIL — defaults to
 *     no-reply@joekhalaf.com — which must be on the verified domain.
 */

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown; // honeypot
};

const MAX_LEN = {
  name: 200,
  email: 320,
  subject: 200,
  message: 5000,
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  // Honeypot: bots will populate this hidden field. Pretend success.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const errors: string[] = [];
  const name = sanitize(body.name, MAX_LEN.name);
  const email = sanitize(body.email, MAX_LEN.email);
  const subject = sanitize(body.subject, MAX_LEN.subject);
  const message = sanitize(body.message, MAX_LEN.message);

  if (!name) errors.push("Name is required.");
  if (!email || !isLikelyEmail(email)) errors.push("Valid email is required.");
  if (!subject) errors.push("Subject is required.");
  if (!message || message.length < 10)
    errors.push("Message must be at least 10 characters.");

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "no-reply@joekhalaf.com";
  const toAddress = siteConfig.contactDeliveryEmail;

  if (!apiKey) {
    // Dev mode: log and pretend success so the form is testable end-to-end.
    console.warn(
      "[contact] RESEND_API_KEY not set — message captured but not emailed.",
    );
    console.info("[contact] payload:", { name, email, subject, message });
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${siteConfig.name} (Site) <${fromAddress}>`,
      to: [toAddress],
      replyTo: email,
      subject: `[Site] ${subject}`,
      text: [
        `From: ${name} <${email}>`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    });
    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Could not send message. Please try again later." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { error: "Could not send message. Please try again later." },
      { status: 500 },
    );
  }
}

function sanitize(v: unknown, maxLen: number): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, maxLen);
}

function isLikelyEmail(s: string): boolean {
  // Conservative, deliberately not RFC-perfect — just rejects obvious junk.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
