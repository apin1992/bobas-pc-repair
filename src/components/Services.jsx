import { SERVICES } from '../data.js'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amd">
          Services & pricing
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
          Core bench offerings
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
          Transparent tags, real parts (Noctua / Thermal Grizzly), and
          turnaround windows you can plan around.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 metal-border"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold leading-tight tracking-wide">
                  {service.title}
                </h3>
                <span className="shrink-0 rounded-md bg-amd/10 px-2 py-1 text-sm font-bold text-amd">
                  {service.price}
                </span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--metal)]">
                Turnaround · {service.turnaround}
              </p>
              <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm text-[var(--text-muted)]">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amd" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-5 text-sm font-semibold text-amd hover:underline"
              >
                Request this service →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
