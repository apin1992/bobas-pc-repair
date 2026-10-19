import { BUSINESS } from '../data.js'

export default function ServiceArea() {
  return (
    <section id="area" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amd">
            Service area & hours
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
            Local bench. Honest windows.
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            Same-day turnaround on dusting and storage swaps when we have a
            slot before noon. Thermal jobs typically overnight. Builds land in
            3–5 days depending on parts.
          </p>

          <dl className="mt-8 space-y-3">
            {BUSINESS.hours.map((row) => (
              <div
                key={row.day}
                className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-3"
              >
                <dt className="font-medium">{row.day}</dt>
                <dd className="text-sm text-[var(--text-muted)]">{row.time}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 flex flex-wrap gap-2">
            {BUSINESS.areas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-wider text-[var(--text-muted)]"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--map)]">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
            <p className="text-sm font-semibold">Bench locator</p>
            <p className="text-xs uppercase tracking-wider text-amd">Map placeholder</p>
          </div>
          <div className="relative grid min-h-[260px] place-items-center bg-[radial-gradient(circle_at_center,rgba(237,28,36,0.18),transparent_55%)] p-6">
            <div className="absolute inset-6 rounded-lg border border-dashed border-[var(--border)]" />
            <div className="relative z-10 max-w-sm rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-5 text-center shadow-lg">
              <p className="font-display text-2xl font-bold tracking-wide">
                {BUSINESS.name}
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{BUSINESS.address}</p>
              <p className="mt-3 text-sm font-semibold text-amd">{BUSINESS.phoneDisplay}</p>
              <p className="mt-1 text-xs text-[var(--metal)]">
                Replace this card with a Google Maps embed when the shop pin is ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
