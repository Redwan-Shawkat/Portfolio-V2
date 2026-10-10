import SectionHeading from "@/components/SectionHeading";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <section aria-labelledby="work-h" className="pt-22 pb-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="My Work, Real Clients"
          title={
            <>
              Systems people use to <span className="text-accent">get work done</span>
            </>
          }
          text="Client systems are under NDA, so there are no live demos here. Where the code is mine and public, the card links to the repository."
        />

        <ProjectGrid />
      </div>
    </section>
  );
}
