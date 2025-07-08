import Contact from "@/Components/Contact";
import LinkIcons from "@/Components/LinkIcons";
import Techstack from "@/Components/Techstack";
import Projectcard from "@/Components/ui/Projectcard";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-24 gap-4">
        <Image
          src={"/portfolioDp.png"}
          alt="My portfolio picture"
          height={2061}
          width={1170}
          className="rounded-full w-72 h-72 object-cover bg-[#5E5E5E] shadow-amber-700 shadow-2xl border-2 border-amber-700"
        />
        <div className="text-[#999797] flex items-center justify-center flex-col leading-8 mt-8">
          <p className="text-[#CCCCCC] text-xl">Hey, there!</p>
          <p className="text-[#CCCCCC] font-bold text-3xl sm:text-4xl">
            I am Emmanuel Francis
          </p>
          <p className="font-semibold text-xl sm:text-3xl">
            Developer / Software Engineer
          </p>
          <p className="text-white">
            I love to code & make projects I find interest in
          </p>
          <p>I am located in Rwanda</p>
          <LinkIcons />
        </div>
      </div>
      <h1 className="text-center font-bold text-4xl mt-16">Projects</h1>
      <div
        id="projects"
        className="flex sm:flex-row sm:gap-4 flex-col items-center justify-center scroll-mt-24"
      >
        <Projectcard />
        <Projectcard />
      </div>
      <h1
        id="tech-stack"
        className="text-center font-bold text-4xl my-16 scroll-mt-24"
      >
        Tech Stack
      </h1>
      <Techstack />
      <h1
        id="contact"
        className="text-center font-bold text-4xl my-16 scroll-mt-24"
      >
        Contact
      </h1>
      <Contact />
    </div>
  );
}
