import { useEffect, useMemo, useState } from 'react';

type Heading = {
  slug: string;
  text: string;
  depth: number;
};

export default function TocSpy({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState<string | null>(headings[0]?.slug ?? null);

  const headingIds = useMemo(() => headings.map((h) => h.slug), [headings]);

  useEffect(() => {
    if (!headingIds.length) return;

    const elements = headingIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
          return;
        }

        const passed = elements.filter((el) => el.getBoundingClientRect().top <= 120);
        if (passed.length) {
          setActive(passed[passed.length - 1].id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: [0.1, 0.5, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headingIds]);

  if (!headings.length) return null;

  return (
    <ul className="space-y-2">
      {headings.map((heading) => {
        const isActive = active === heading.slug;
        return (
          <li key={heading.slug}>
            <a
              href={`#${heading.slug}`}
              aria-current={isActive ? 'location' : undefined}
              className={`block text-sm transition ${
                isActive
                  ? 'font-semibold text-[hsl(var(--text-primary))]'
                  : 'text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))]'
              }`}
              style={{ paddingLeft: `${(heading.depth - 2) * 0.65}rem` }}
            >
              {heading.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
