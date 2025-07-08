"use client";
import Link from "next/link";
import React from "react";

const Navlinks = [
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Tech stack",
    href: "#tech-stack",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
export default function Navbar() {
  return (
    <nav className="flex items-center justify-center">
      <ul className="inline-flex items-center justify-center h-14 px-6 space-x-8 rounded-3xl mt-8 text-sm shadow shadow-amber-700">
        {Navlinks.map((navlink) => {
          return (
            <li
              key={navlink.href}
              className="hover:text-amber-500 transition-colors duration-300"
            >
              <Link href={navlink.href}>{navlink.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
