"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Tech stack",
    href: "/tech-stack",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-center">
      <ul className="inline-flex items-center justify-center py-2 px-6 space-x-8 border border-[#999797] rounded-3xl mt-8">
        {Navlinks.map((navlink) => {
          const isActive = pathname === navlink.href;
          return (
            <li key={navlink.href}>
              <Link
                href={navlink.href}
                className={`transition-colors duration-200 ${isActive ? "text-white" : "text-[#999797]"}`}
              >
                {navlink.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
