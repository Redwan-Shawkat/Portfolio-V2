"use client";

import { useState } from "react";
import { projects, projectFilters } from "@/data/cv";
import { ArrowUpRight, PinIcon } from "./Icons";
import Reveal from "./Reveal";

// Array.filter instead of Isotope.
export default function ProjectGrid() {
  const [filter, setFilter] = useState("all");

  const shown =
    filter === "all" ? projects : projects.filter((p) => p.group === filter);

  const countFor = (id) =>
    id === "all" ? projects.length : projects.filter((p) => p.group === id).length;

  return (
    <>
      <ul className="mb-10 flex list-none flex-wrap justify-center gap-2.5">
        {projectFilters.map((f) => {
          const on = filter === f.id;
          return (
            <li key={f.id}>
              <button
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={on}
                className={`cursor-pointer border px-[22px] py-[11px] text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  on ? "border-accent text-heading" : "border-line text-muted hover:text-heading"
                }`}
              >
                {f.label} <span className="opacity-55">{countFor(f.id)}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <ul className="grid list-none gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, n) => (
          <li key={p.title}>
            <Reveal delay={n * 70}>
              <article
                className={`group relative h-[400px] overflow-hidden border border-line transition duration-500 hover:-translate-y-[5px] hover:border-line-strong ${p.glow}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute right-[18px] top-[52px] font-display text-[110px] font-black leading-none text-heading opacity-[0.09] transition duration-500 group-hover:opacity-[0.22]"
                >
                  {p.num}
                </span>

                <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-ink/60 to-ink/90" />

                <div className="relative flex h-full flex-col p-6">
                  <p className="inline-flex items-center gap-[7px] self-start border border-line bg-ink/65 px-3 py-[7px] text-[11px] font-semibold uppercase tracking-[0.14em] text-heading">
                    <PinIcon />
                    {p.client}
                  </p>

                  <div className="mt-auto">
                    <span className="mb-[18px] block h-px bg-line-strong" />
                    <div className="flex items-end gap-4">
                      <div className="min-w-0 grow">
                        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                          {p.kind}
                        </p>
                        <h2 className="text-[23px] leading-[1.15]">{p.title}</h2>
                      </div>

                      {p.repo ? (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${p.title} on GitHub`}
                          className="grid h-[46px] w-[46px] shrink-0 place-items-center border border-line-strong text-heading transition duration-400 group-hover:bg-accent group-hover:text-ink"
                        >
                          <ArrowUpRight />
                        </a>
                      ) : null}
                    </div>

                    <ul className="mt-3 flex list-none flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <li
                          key={t}
                          className="border border-line px-2.5 py-[5px] text-[11px] font-semibold uppercase tracking-[0.08em] text-muted"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </>
  );
}
