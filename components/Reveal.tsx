'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delayMs?: number;
  once?: boolean;
  from?: 'up' | 'down' | 'left' | 'right' | 'none';
};

export default function Reveal({
  children,
  className,
  threshold = 0.15,
  delayMs = 0,
  once = true,
  from = 'up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const offsetClass =
    from === 'up'
      ? 'translate-y-4'
      : from === 'down'
        ? '-translate-y-4'
        : from === 'left'
          ? 'translate-x-4'
          : from === 'right'
            ? '-translate-x-4'
            : '';

  return (
    <div
      ref={ref}
      className={
        [
          'transition-all duration-700 ease-out will-change-transform',
          isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${offsetClass}`,
          className ?? '',
        ].join(' ')
      }
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
