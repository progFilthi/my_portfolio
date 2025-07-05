"use client";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { HiDownload } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
const Icons = [
  {
    Icon: HiDownload,
    type: "download",
    href: "/Emmanuel's resume.pdf",
    label: "Download resume",
  },
  {
    Icon: CiLinkedin,
    type: "link",
    href: "https://www.linkedin.com/in/emmanuelfrancis0/",
    label: "LinkedIn",
  },
  {
    Icon: IoLogoGithub,
    type: "link",
    href: "https://github.com/progFilthi",
    label: "Github",
  },
];
export default function LinkIcons() {
  const handleClick = (item: (typeof Icons)[number]) => {
    if (item.type === "download") {
      const link = document.createElement("a");
      link.href = item.href;
      link.download = "";
      link.click();
    } else if (item.type === "link") {
      window.open(item.href, "_blank");
    }
  };
  return (
    <div className="mt-8 flex items-center space-x-2 text-3xl">
      {Icons.map((item, index) => (
        <item.Icon
          onClick={() => handleClick(item)}
          key={index}
          title={item.label}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
}
