import { useState } from 'react'
import { BUSINESS, SERVICES } from '../data.js'

const initial = {
  name: '',
  phone: '',
  device: 'Desktop',
  service: SERVICES[0].title,
  notes: '',
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)

  const update = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const waMessage = encodeURIComponent(
    `Hi Boba's PC Repair — ${form.name || 'a customer'} here.\nDevice: ${form.device}\nService: ${form.service}\nPhone: ${form.phone}\nNotes: ${form.notes || 'n/a'}`,
  )

  const fieldClass =
    'mt-1 w-full rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--text)] outline-none focus:border-amd'

  return (
    <section id="contact" className="scroll-mt-20 border-t border-[var(--border)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amd">
            Contact & booking
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
            Get on the bench
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            Drop a request or ping us directly. We reply during shop hours,
            usually within one turn.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${waMessage}`}
              className="inline-flex items-center justify-center rounded-md bg-amd px-5 py-3 text-sm font-bold uppercase tracking-wide text-white red-glow hover:bg-amd-deep"
            >
              WhatsApp the shop
            </a>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center justify-center rounded-md border border-amd px-5 py-3 text-sm font-bold uppercase tracking-wide text-amd hover:bg-amd hover:text-white"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-amd/50 bg-[var(--bg-card)] p-8 metal-border">
            <p className="font-display text-2xl font-bold">Request logged.</p>
            <p className="mt-2 text-[var(--text-muted)]">
              Thanks, {form.name}. We’ll confirm your {form.device.toLowerCase()} slot
              for {form.service} by phone.
            </p>
            <button
              type="button"
              className="mt-6 text-sm font-semibold text-amd hover:underline"
              onClick={() => {
                setSubmitted(false)
                setForm(initial)
              }}
            >
              Send another request
            </button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 sm:p-7 metal-border"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={update}
                  autoComplete="name"
                  className={fieldClass}
                />
              </label>
              <label className="text-sm font-medium">
                Phone number
                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  autoComplete="tel"
                  className={fieldClass}
                />
              </label>
              <label className="text-sm font-medium">
                Device type
                <select
                  name="device"
                  value={form.device}
                  onChange={update}
                  className={fieldClass}
                >
                  <option>Desktop</option>
                  <option>Laptop</option>
                </select>
              </label>
              <label className="text-sm font-medium">
                Requested service
                <select
                  name="service"
                  value={form.service}
                  onChange={update}
                  className={fieldClass}
                >
                  {SERVICES.map((s) => (
                    <option key={s.id}>{s.title}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium">
              Notes / symptoms
              <textarea
                name="notes"
                value={form.notes}
                onChange={update}
                rows={4}
                placeholder="Temps, noise, crash codes, last paste date…"
                className={fieldClass}
              />
            </label>
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-amd py-3 text-sm font-bold uppercase tracking-wide text-white red-glow hover:bg-amd-deep"
            >
              Submit booking request
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
