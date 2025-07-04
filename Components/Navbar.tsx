import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center">
      <ul className="inline-flex items-center justify-center py-2 px-6 space-x-8 border border-[#999797] rounded-3xl mt-8">
        <li>Projects</li>
        <li>Tech stack</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
