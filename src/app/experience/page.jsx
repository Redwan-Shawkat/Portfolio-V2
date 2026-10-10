import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";
import { experience } from "@/data/cv";

export const metadata = { title: "Experience" };

export default function Experience() {
  return (
    <section aria-labelledby="exp-h" className="pt-22 pb-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="My Resume"
          title={
            <>
              Where I have put the <span className="text-accent">work</span> in
            </>
          }
        />

        <div className="border border-line bg-panel p-8 md:p-15">
          <div className="relative grid gap-14 md:grid-cols-2 md:after:absolute md:after:left-1/2 md:after:top-0 md:after:h-full md:after:w-px md:after:bg-line md:after:content-['']">
            {experience.map((job, n) => (
              <Reveal key={job.period} delay={n * 110}>
                <div className="group flex gap-[22px]">
                  <span
                    aria-hidden="true"
                    className="grid h-[46px] w-[46px] shrink-0 -rotate-45 place-items-center rounded-full bg-heading/8 text-heading transition duration-500 group-hover:rotate-0 group-hover:bg-accent group-hover:text-ink"
                  >
                    <ArrowRight size={18} />
                  </span>

                  <div>
                    <p
                      className={`mb-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] ${
                        job.current ? "text-accent" : "text-muted"
                      }`}
                    >
                      {job.period}
                    </p>
                    <h2 className="mb-1 text-[26px]">{job.role}</h2>
                    <p className="text-[15px] text-muted">{job.company}</p>

                    <ul className="mt-4 flex list-none flex-col gap-2.5">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="relative pl-5 text-[15px] before:absolute before:left-0 before:top-[11px] before:h-px before:w-2 before:bg-accent before:content-['']"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
