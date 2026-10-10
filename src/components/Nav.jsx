"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, profile } from "@/data/cv";

export default function Nav() {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-30 flex flex-wrap items-center gap-x-7 gap-y-4 border-b border-line bg-ground/92 px-8 py-[18px] backdrop-blur-[10px]">
      <Link
        href="/"
        className="font-display text-[19px] font-black tracking-[-0.02em] whitespace-nowrap text-heading hover:text-heading"
      >
        {profile.shortName}
      </Link>

      <nav aria-label="Main" className="ms-auto">
        <ul className="flex list-none flex-wrap gap-x-[22px] gap-y-1">
          {nav.map((item) => {
            const active = path === item.href;
            const isContact = item.href === "/contact";
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "block py-1.5 text-[13px] font-semibold uppercase tracking-[0.12em]",
                    active
                      ? "text-heading"
                      : isContact
                        ? "text-accent hover:text-heading"
                        : "text-muted hover:text-heading",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
