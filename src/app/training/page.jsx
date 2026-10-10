import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { training } from "@/data/cv";

export const metadata = { title: "Training" };

export default function Training() {
  return (
    <section aria-labelledby="train-h" className="pt-22 pb-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="Training"
          title={
            <>
              How I learned to <span className="text-accent">ship</span>
            </>
          }
          text="Design first, then the full stack. Two courses, in the order I took them."
        />

        <ol className="grid list-none border border-line md:grid-cols-2">
          {training.map((course, n) => (
            <li
              key={course.title}
              className={
                n === 0
                  ? ""
                  : "border-t border-line md:border-t-0 md:border-l md:border-l-line"
              }
            >
              <Reveal delay={n * 110}>
                <div className="group h-full px-11 py-12 text-center transition duration-500 hover:bg-panel">
                  <span
                    aria-hidden="true"
                    className="mb-[18px] block font-display text-[86px] font-black leading-none text-heading opacity-[0.18] transition duration-500 group-hover:text-accent group-hover:opacity-100"
                  >
                    {course.num}
                  </span>
                  <h2 className="mb-2 text-[26px]">{course.title}</h2>
                  <p className="mb-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
                    {course.provider}
                  </p>
                  <p>{course.text}</p>

                  <ul className="mt-[22px] flex list-none flex-wrap justify-center gap-1.5">
                    {course.tech.map((t) => (
                      <li
                        key={t}
                        className="border border-line px-2.5 py-[5px] text-[11px] font-semibold uppercase tracking-[0.08em] text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
