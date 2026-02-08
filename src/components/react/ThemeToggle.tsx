import { useEffect, useMemo, useState } from 'react';

type ThemeMode = 'auto' | 'light' | 'dark';

const STORAGE_KEY = 'theme-mode';

function resolveDark(mode: ThemeMode): boolean {
  if (mode === 'dark') return true;
  if (mode === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function ThemeToggle({ label }: { label: string }) {
  const [mode, setMode] = useState<ThemeMode>('auto');

  const uiLabel = useMemo(
    () => ({ auto: '🖥️ Auto', light: '☀️ Light', dark: '🌙 Dark' }[mode]),
    [mode],
  );

  useEffect(() => {
    const root = document.documentElement;
    const stored = (localStorage.getItem(STORAGE_KEY) as ThemeMode | null) ?? 'auto';
    const currentMode: ThemeMode = ['auto', 'light', 'dark'].includes(stored) ? stored : 'auto';

    const apply = (nextMode: ThemeMode) => {
      root.classList.toggle('dark', resolveDark(nextMode));
      setMode(nextMode);
    };

    apply(currentMode);

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      const latestMode = (localStorage.getItem(STORAGE_KEY) as ThemeMode | null) ?? 'auto';
      if (latestMode === 'auto') {
        root.classList.toggle('dark', media.matches);
      }
    };

    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const onCycle = () => {
    const nextMode: ThemeMode = mode === 'auto' ? 'light' : mode === 'light' ? 'dark' : 'auto';
    localStorage.setItem(STORAGE_KEY, nextMode);
    document.documentElement.classList.toggle('dark', resolveDark(nextMode));
    setMode(nextMode);
  };

  return (
    <button
      type="button"
      aria-label={label}
      title={uiLabel}
      onClick={onCycle}
      className="card px-3 py-2 text-sm text-[hsl(var(--text))] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--accent))]"
    >
      {uiLabel}
    </button>
  );
}
