import Link from "next/link";
import { links, nav, profile } from "@/data/cv";
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon } from "./Icons";

const social = [
  { href: links.gmail, label: "Email me on Gmail", icon: <MailIcon size={16} />, external: true },
  { href: links.phone, label: "Call " + profile.phone, icon: <PhoneIcon size={16} />, external: false },
  { href: links.github, label: "GitHub profile", icon: <GithubIcon size={16} />, external: true },
  { href: links.linkedin, label: "LinkedIn profile", icon: <LinkedinIcon size={16} />, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-[1180px] px-8 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <p className="mb-3.5 font-display text-2xl font-black tracking-[-0.02em] text-heading">
              {profile.shortName}
            </p>
            <p className="max-w-[330px] text-[15px]">{profile.blurb}</p>

            <ul className="mt-6 flex list-none gap-2.5">
              {social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="grid h-[42px] w-[42px] place-items-center border border-line transition hover:border-accent hover:text-accent"
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-heading">
              Pages
            </p>
            <ul className="flex list-none flex-col gap-[11px] text-[15px]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-heading">
              Get in touch
            </p>
            <ul className="flex list-none flex-col gap-[11px] text-[15px]">
              <li>
                <a href={links.gmail} target="_blank" rel="noopener noreferrer">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={links.phone}>{profile.phone}</a>
              </li>
            </ul>
            <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
              Open to new roles
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-x-7 gap-y-3 border-t border-line py-[26px] text-sm">
          <p>&copy; {new Date().getFullYear()} {profile.name}</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
