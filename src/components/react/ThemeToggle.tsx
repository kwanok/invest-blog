import { useEffect, useState } from 'react';

type ThemeMode = 'auto' | 'light' | 'dark';

const STORAGE_KEY = 'theme-mode';
const MODES: ThemeMode[] = ['auto', 'light', 'dark'];

const modeLabels: Record<ThemeMode, string> = {
  auto: 'Auto',
  light: 'Light',
  dark: 'Dark',
};

function resolveDark(mode: ThemeMode): boolean {
  if (mode === 'dark') return true;
  if (mode === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function ThemeToggle({ label }: { label: string }) {
  const [mode, setMode] = useState<ThemeMode>('auto');

  useEffect(() => {
    const root = document.documentElement;
    const stored = (localStorage.getItem(STORAGE_KEY) as ThemeMode | null) ?? 'auto';
    const currentMode: ThemeMode = MODES.includes(stored) ? stored : 'auto';

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

  const onSelect = (nextMode: ThemeMode) => {
    localStorage.setItem(STORAGE_KEY, nextMode);
    document.documentElement.classList.toggle('dark', resolveDark(nextMode));
    setMode(nextMode);
  };

  const onCycleMobile = () => {
    const currentIndex = MODES.indexOf(mode);
    const nextMode = MODES[(currentIndex + 1) % MODES.length];
    onSelect(nextMode);
  };

  return (
    <>
      <button
        type="button"
        onClick={onCycleMobile}
        aria-label={label}
        className="card inline-flex items-center gap-1 px-2.5 py-2 text-xs text-[hsl(var(--text-primary))] md:hidden"
      >
        Theme: {modeLabels[mode]}
      </button>

      <div role="group" aria-label={label} className="card hidden items-center gap-1 p-1 md:inline-flex">
        {MODES.map((item) => {
          const selected = item === mode;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(item)}
              className={`rounded-lg px-2.5 py-1.5 text-xs transition ${
                selected
                  ? 'bg-[hsl(var(--accent-soft))] font-semibold text-[hsl(var(--text-primary))]'
                  : 'text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))]'
              }`}
            >
              {modeLabels[item]}
            </button>
          );
        })}
      </div>
    </>
  );
}
