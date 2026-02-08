import { useEffect, useState } from 'react';

export default function ThemeToggle({ label }: { label: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = stored ? stored === 'dark' : prefersDark;
    root.classList.toggle('dark', enabled);
    setDark(enabled);
  }, []);

  const onToggle = () => {
    const root = document.documentElement;
    const next = !dark;
    root.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setDark(next);
  };

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onToggle}
      className="card px-3 py-2 text-sm text-[hsl(var(--text))] transition hover:-translate-y-0.5"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
