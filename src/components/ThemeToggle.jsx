import { useTheme } from '../App.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={!isDark}
      className="inline-flex h-10 items-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 transition hover:border-amd"
    >
      <span
        className={`relative h-5 w-9 rounded-full ${isDark ? 'bg-amd' : 'bg-zinc-300'}`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${
            isDark ? 'translate-x-0.5' : 'translate-x-4'
          }`}
        />
      </span>
    </button>
  )
}
