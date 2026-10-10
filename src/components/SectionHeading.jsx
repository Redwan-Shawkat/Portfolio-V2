import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, text, width = "max-w-[800px]" }) {
  return (
    <Reveal className={`mx-auto mb-14 text-center ${width}`}>
      {eyebrow ? (
        <p className="mb-3.5 text-[13px] font-semibold uppercase tracking-[0.22em] text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-[clamp(2rem,5vw,3.25rem)] leading-[1.08]">{title}</h1>
      {text ? <p className="mt-[18px]">{text}</p> : null}
    </Reveal>
  );
}
