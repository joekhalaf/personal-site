"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/**
 * Sun/Moon button that cycles light → dark → system.
 * Renders a placeholder until mounted to avoid SSR/CSR mismatch.
 */
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        aria-hidden
        className="h-9 w-9 rounded-full border border-transparent"
      />
    );
  }

  const current = resolvedTheme === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode (current theme: ${theme})`}
      className="
        inline-flex h-9 w-9 items-center justify-center rounded-full
        border border-ink/10 dark:border-cream/15
        text-ink dark:text-cream
        hover:border-indigo hover:text-indigo
        dark:hover:border-indigo-soft dark:hover:text-indigo-soft
        transition-colors
      "
    >
      {current === "dark" ? (
        // Sun
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        // Moon
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
