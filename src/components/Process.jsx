import { STEPS } from '../data.js'

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amd">
          Why choose us
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
          Four-step bench workflow
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--text-muted)]">
          No mystery queue. You always know what stage your machine is in.
        </p>

        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5"
            >
              <span className="font-display text-4xl font-bold text-amd/80">
                {step.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-wide">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
