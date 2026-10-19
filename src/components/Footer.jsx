import { BUSINESS, NAV_LINKS } from '../data.js'

const SOCIAL = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'Discord', href: 'https://discord.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-carbon text-zinc-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-wide">
            {BUSINESS.name}
          </p>
          <p className="mt-2 max-w-xs text-sm text-zinc-400">
            ESD-safe bench work for gamers, students, and creators who need
            their machines quiet and cool.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-amd">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap gap-3 text-sm">
          {SOCIAL.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-zinc-700 px-3 py-1.5 hover:border-amd hover:text-amd"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
      </div>
    </footer>
  )
}
