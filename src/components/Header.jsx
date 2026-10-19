import { useEffect, useState } from 'react'
import { BUSINESS, NAV_LINKS } from '../data.js'
import ThemeToggle from './ThemeToggle.jsx'

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-md border border-amd bg-carbon text-amd font-display text-lg font-bold shadow-[0_0_16px_rgba(237,28,36,0.35)]">
        B
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold tracking-wide text-[var(--text)]">
          Boba&apos;s
        </span>
        <span className="block text-[10px] uppercase tracking-[0.22em] text-amd">
          PC Repair
        </span>
      </span>
    </a>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      id="top"
      className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg-header)] backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--text)]/80 transition hover:text-amd"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}`}
            className="hidden rounded-md bg-amd px-3 py-2 text-xs font-bold uppercase tracking-wide text-white red-glow transition hover:bg-amd-deep sm:inline-flex"
          >
            WhatsApp
          </a>
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="hidden rounded-md border border-amd px-3 py-2 text-xs font-bold uppercase tracking-wide text-amd transition hover:bg-amd hover:text-white md:inline-flex"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-[var(--border)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <span className="flex h-4 w-5 flex-col justify-between">
              <span className="h-0.5 w-full bg-[var(--text)]" />
              <span className="h-0.5 w-full bg-[var(--text)]" />
              <span className="h-0.5 w-full bg-[var(--text)]" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu"
            onClick={close}
          />
          <aside
            id="mobile-drawer"
            className="drawer-enter absolute right-0 top-0 flex h-full w-[min(86vw,22rem)] flex-col gap-6 border-l border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-6"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={close}
                className="grid h-10 w-10 place-items-center rounded-md border border-[var(--border)]"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="rounded-md px-2 py-3 text-lg font-display font-semibold tracking-wide hover:bg-[var(--bg)] hover:text-amd"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="rounded-md bg-amd px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white red-glow"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              className="rounded-md border border-amd px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-amd"
            >
              WhatsApp the bench
            </a>
          </aside>
        </div>
      )}
    </header>
  )
}
