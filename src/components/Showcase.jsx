import { RESULTS } from '../data.js'

export default function Showcase() {
  return (
    <section id="showcase" className="scroll-mt-20 border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amd">
          Before & after
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
          Temps down. Reviews up.
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
          Load temperature drops from real benches, paired with what owners
          said after hand-off.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {RESULTS.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 metal-border"
            >
              <div className="rounded-lg border border-amd/40 bg-amd/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  Under load
                </p>
                <p className="mt-1 font-display text-3xl font-bold text-amd">
                  {item.drop}
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{item.detail}</p>
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text)]">
                “{item.quote}”
              </blockquote>
              <p className="mt-4 text-sm font-semibold">{item.name}</p>
              <p className="text-xs uppercase tracking-wider text-[var(--metal)]">
                {item.tag}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
