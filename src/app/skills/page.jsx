import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/cv";

export const metadata = { title: "Skills" };

export default function Skills() {
  return (
    <section aria-labelledby="skills-h" className="py-22 pt-22 pb-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="Pro Skills"
          title={
            <>
              The tools I reach for <span className="text-accent">every day</span>
            </>
          }
          text="No progress bars. Just what I have actually built production software with."
        />

        <div className="flex flex-col gap-14">
          {skillGroups.map((group) => (
            <div key={group.group}>
              <div className="mb-[22px] flex items-center gap-5">
                <h2 className="whitespace-nowrap text-[22px]">{group.group}</h2>
                <span className="h-px grow bg-line" />
              </div>

              <ul className="grid list-none grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {group.items.map((item, n) => (
                  <li key={item.name}>
                    <Reveal delay={n * 60}>
                      <div className="group flex w-full flex-col items-center justify-center gap-3.5 rounded-2xl border border-line bg-panel p-6 transition duration-500 hover:-translate-y-1 hover:border-accent">
                        <span
                          aria-hidden="true"
                          className="grid h-[60px] w-[60px] place-items-center rounded-[14px] bg-heading/8 font-display text-xl font-black text-heading transition duration-500 group-hover:bg-accent group-hover:text-ink"
                        >
                          {item.mono}
                        </span>
                        <h3 className="text-[17px] font-medium">{item.name}</h3>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
