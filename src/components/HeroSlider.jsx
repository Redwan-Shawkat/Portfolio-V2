"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { slides } from "@/data/cv";
import { ArrowRight } from "./Icons";

const AUTOPLAY_MS = 6000;

// CSS crossfade + one interval. The template ships Swiper for this.
export default function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      aria-label="Introduction"
      className="relative h-[640px] overflow-hidden border-b border-line"
    >
      {slides.map((slide, n) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${slide.glow}`}
          style={{ opacity: i === n ? 1 : 0, pointerEvents: i === n ? "auto" : "none" }}
          aria-hidden={i !== n}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ink/35 to-ink/80" />
          <div className="relative mx-auto flex h-full max-w-[1180px] flex-col items-center justify-center px-8 text-center">
            <p className="mb-[18px] text-[13px] font-semibold uppercase tracking-[0.22em] text-muted">
              {slide.eyebrow}
            </p>
            <h1 className="mb-[22px] max-w-[900px] text-[clamp(2.25rem,7vw,4.5rem)] leading-[1.04]">
              {slide.title}
            </h1>
            <p className="mb-[34px] max-w-[620px] text-lg">{slide.text}</p>
            <Link
              href={slide.cta.href}
              tabIndex={i === n ? undefined : -1}
              className="inline-flex items-center gap-2.5 border border-heading px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-heading transition hover:bg-heading hover:text-ink"
            >
              {slide.cta.label}
              <ArrowRight />
            </Link>
          </div>
        </div>
      ))}

      <ul className="absolute bottom-[30px] left-0 right-0 z-10 flex list-none justify-center gap-3">
        {slides.map((slide, n) => (
          <li key={slide.title}>
            <button
              type="button"
              onClick={() => setI(n)}
              aria-label={`Show slide ${n + 1}`}
              aria-current={i === n ? "true" : undefined}
              className="h-1 w-[42px] cursor-pointer border-0 transition duration-400"
              style={{ background: i === n ? "var(--color-accent)" : "var(--color-line-strong)" }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
