/**
 * Fixed-position decorative starfield. Visible only in dark mode
 * (CSS controls opacity). Purely decorative — aria-hidden.
 */
export function Starfield() {
  return <div className="starfield" aria-hidden />;
}
