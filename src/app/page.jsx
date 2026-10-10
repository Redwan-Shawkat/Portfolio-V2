import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";
import { glance, profile } from "@/data/cv";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section aria-labelledby="about-h" className="py-24">
        <div className="mx-auto max-w-[1180px] px-8">
          <Reveal className="mx-auto mb-14 max-w-[760px] text-center">
            <p className="mb-3.5 text-[13px] font-semibold uppercase tracking-[0.22em] text-muted">
              Software That Reaches People
            </p>
            <h2 id="about-h" className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.12]">
              Hi! I&apos;m Radwan, a full-stack engineer at B-Trac Solutions in Dhaka.
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div className="h-full border border-line bg-panel p-8">
                <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-heading">
                  What I do
                </p>
                <p className="mb-[18px] font-display text-[28px] font-black leading-[1.2] tracking-[-0.02em] text-heading">
                  I build the screens <span className="text-accent">and</span> the APIs behind them.
                </p>
                <p>
                  Government bodies and heavy-equipment dealers run the systems I have worked
                  on — requirements through deployment, React through PostgreSQL.
                </p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="h-full border border-line bg-panel p-8">
                <p className="mb-[18px] text-[13px] font-semibold uppercase tracking-[0.18em] text-heading">
                  At a glance
                </p>
                <ul className="flex list-none flex-col">
                  {glance.map((row, n) => (
                    <li
                      key={row.label}
                      className={`flex flex-wrap justify-between gap-2.5 py-[13px] text-[15px] ${
                        n === glance.length - 1 ? "" : "border-b border-line"
                      }`}
                    >
                      <span>{row.label}</span>
                      <span className={row.accent ? "text-accent" : "text-heading"}>
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex h-full flex-col border border-line bg-panel p-8">
                <p className="mb-[18px] text-[13px] font-semibold uppercase tracking-[0.18em] text-heading">
                  Career objective
                </p>
                <p className="mb-7">{profile.objective}</p>
                <Link
                  href="/contact"
                  className="mt-auto inline-flex items-center justify-between gap-2.5 bg-accent px-6 py-[18px] text-[13px] font-semibold uppercase tracking-[0.1em] text-ink hover:text-ink"
                >
                  Let&apos;s talk
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
