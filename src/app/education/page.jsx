import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";
import { education, thesis } from "@/data/cv";

export const metadata = { title: "Education" };

export default function Education() {
  return (
    <>
      <section aria-labelledby="edu-h" className="pt-22 pb-14">
        <div className="mx-auto max-w-[1180px] px-8">
          <SectionHeading
            eyebrow="Academic Qualifications"
            title={
              <>
                What I studied, and <span className="text-accent">where</span>
              </>
            }
          />

          <ul className="list-none">
            {education.map((item, n) => (
              <li key={item.degree}>
                <Reveal delay={n * 90}>
                  <div
                    className={`group grid items-start gap-8 border-t border-line px-6 py-9 transition duration-400 hover:bg-panel lg:grid-cols-[200px_minmax(0,1fr)] ${
                      n === education.length - 1 ? "border-b border-line" : ""
                    }`}
                  >
                    <div>
                      <span className="font-display text-[34px] font-black leading-none tracking-[-0.02em] text-heading transition duration-400 group-hover:text-accent">
                        {item.year}
                      </span>
                      <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
                        {item.sub}
                      </p>
                    </div>

                    <div>
                      <h2 className="mb-1.5 text-[26px]">{item.degree}</h2>
                      <p className="text-base">{item.institution}</p>

                      <ul className="mt-3.5 flex list-none flex-wrap gap-x-7 gap-y-2 text-[15px]">
                        {item.meta.map((m) => (
                          <li key={m.label} className="flex gap-2">
                            <span className="text-muted">{m.label}</span>
                            <span className="text-heading">{m.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="thesis-h" className="pb-24">
        <div className="mx-auto max-w-[1180px] px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-7 border border-line bg-panel p-11">
              <div className="min-w-0 grow-[999] basis-[420px]">
                <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {thesis.eyebrow}
                </p>
                <h2 id="thesis-h" className="mb-3 text-[28px] leading-[1.18]">
                  {thesis.title}
                </h2>
                <p>{thesis.text}</p>
              </div>

              <a
                href={thesis.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2.5 border border-heading px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-heading transition hover:bg-heading hover:text-ink"
              >
                Read the paper
                <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
