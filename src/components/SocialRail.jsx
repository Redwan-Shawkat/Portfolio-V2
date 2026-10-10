import { links, profile } from "@/data/cv";
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon } from "./Icons";

// Locked to the left edge and rides along on scroll. Drops to a centred
// row under the nav below the lg breakpoint.
const rail = [
  {
    href: links.gmail,
    label: "Email me on Gmail",
    icon: <MailIcon />,
    external: true,
  },
  {
    href: links.phone,
    label: "Call " + profile.phone,
    icon: <PhoneIcon />,
    external: false,
  },
  {
    href: links.github,
    label: "GitHub profile",
    icon: <GithubIcon />,
    external: true,
  },
  {
    href: links.linkedin,
    label: "LinkedIn profile",
    icon: <LinkedinIcon />,
    external: true,
  },
];

export default function SocialRail() {
  return (
    <ul className="z-40 flex list-none flex-wrap justify-center gap-2.5 pt-5 lg:fixed lg:top-1/2 lg:left-5 lg:flex-col lg:-translate-y-1/2 lg:flex-nowrap lg:pt-0">
      {rail.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            aria-label={item.label}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="grid h-[52px] w-[52px] place-items-center border border-line bg-panel/92 text-muted backdrop-blur-[6px] transition hover:-translate-y-[3px] hover:border-accent hover:text-accent"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
