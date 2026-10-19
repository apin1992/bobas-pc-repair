import { BUSINESS } from '../data.js'

const HIGHLIGHTS = [
  { label: 'Same-Day Turnaround', hint: 'Book before noon' },
  { label: 'Anti-Static & Safe Handling', hint: 'ESD bench certified' },
  { label: 'Bench Diagnostics', hint: 'Logged thermals' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amd/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-56 w-56 rounded-full bg-amd-deep/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
            <span className="status-dot" />
            Bench open · local fast turnaround
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-wide text-[var(--text)] sm:text-6xl">
            Peak Performance
            <span className="block text-amd">for Your Rig</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Boba&apos;s PC Repair keeps gaming towers, laptops, and workstations
            cool, clean, and stable — local drop-off with same-day slots when
            the queue allows.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-amd px-6 py-3 text-sm font-bold uppercase tracking-wide text-white red-glow transition hover:bg-amd-deep"
            >
              Book a Tune-Up
            </a>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center justify-center rounded-md border border-amd px-6 py-3 text-sm font-bold uppercase tracking-wide text-amd transition hover:bg-amd hover:text-white"
            >
              Call Now
            </a>
          </div>
        </div>

        <ul className="grid gap-3">
          {HIGHLIGHTS.map((item) => (
            <li
              key={item.label}
              className="metal-border rounded-lg bg-[var(--bg-card)] p-4"
            >
              <p className="font-display text-xl font-semibold tracking-wide text-[var(--text)]">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{item.hint}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
