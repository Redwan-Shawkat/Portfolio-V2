import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { MailIcon, PhoneIcon, PinIcon, GithubIcon, LinkedinIcon } from "@/components/Icons";
import { links, profile } from "@/data/cv";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <section aria-labelledby="contact-h" className="pt-22 pb-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="flex flex-wrap items-start gap-12">
          <Reveal className="min-w-0 grow basis-[420px]">
            <p className="mb-3.5 text-[13px] font-semibold uppercase tracking-[0.22em] text-muted">
              Let&apos;s Build Something
            </p>
            <h1 id="contact-h" className="mb-5 text-[clamp(2rem,4.5vw,3rem)] leading-[1.08]">
              Got a role or a project in <span className="text-accent">mind?</span>
            </h1>
            <p className="mb-9">
              Send me a message and I will get back to you. If it is urgent, the phone
              number below rings my mobile.
            </p>

            <div className="border border-line bg-panel px-7 py-2.5">
              <ul className="flex list-none flex-col">
                <li className="flex items-center gap-3.5 border-b border-line py-4">
                  <span className="grid h-[42px] w-[42px] shrink-0 place-items-center border border-line text-accent">
                    <MailIcon size={17} />
                  </span>
                  <a href={links.gmail} target="_blank" rel="noopener noreferrer">
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-center gap-3.5 border-b border-line py-4">
                  <span className="grid h-[42px] w-[42px] shrink-0 place-items-center border border-line text-accent">
                    <PhoneIcon size={17} />
                  </span>
                  <a href={links.phone}>{profile.phone}</a>
                </li>
                <li className="flex items-center gap-3.5 py-4">
                  <span className="grid h-[42px] w-[42px] shrink-0 place-items-center border border-line text-accent">
                    <PinIcon size={17} />
                  </span>
                  <span>{profile.address}</span>
                </li>
              </ul>
            </div>

            <ul className="mt-5 flex list-none flex-wrap gap-2.5">
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 border border-line px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] hover:border-accent"
                >
                  <GithubIcon size={15} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 border border-line px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] hover:border-accent"
                >
                  <LinkedinIcon size={15} /> LinkedIn
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal className="min-w-0 grow-[999] basis-[460px]" delay={110}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
