import Image from "next/image";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { HiDownload } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";

const Icons = [
  {
    Icon: HiDownload,
  },
  {
    Icon: CiLinkedin,
  },
  {
    Icon: IoLogoGithub,
  },
];

export default function page() {
  return (
    <div className="flex items-center justify-center mt-24 space-x-8">
      <Image
        src={"/portfolioDp.png"}
        alt="My portfolio picture"
        height={2061}
        width={1170}
        className="rounded-full w-56 h-56 object-cover bg-[#5E5E5E]"
      />

      <div>
        <div className="text-[#999797] space-y-1">
          <p className="text-sm">Hey, there!</p>
          <p className="text-[#CCCCCC] font-bold text-4xl">
            I am Emmanuel Francis
          </p>
          <p className="font-semibold text-3xl">
            Developer / Software Engineer
          </p>
          <div className="mt-4 tracking-tight text-sm">
            <p>Based in Rwanda</p>
            <p>I love to code & make projects I find interest in</p>
          </div>
        </div>
        <div className="mt-8 flex items-center space-x-2 text-3xl">
          {/* <HiDownload className="cursor-pointer" />

          DRY - don't repeat yourself! refactored icons to avoid 
          repetitiveness

          <CiLinkedin />
          <IoLogoGithub /> */}
          {Icons.map(({ Icon }, index) => (
            <Icon key={index} className="cursor-pointer" />
          ))}
        </div>
      </div>
    </div>
  );
}
