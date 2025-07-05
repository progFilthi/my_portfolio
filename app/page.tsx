import Contact from "@/Components/Contact";
import LinkIcons from "@/Components/LinkIcons";
import Techstack from "@/Components/Techstack";
import Projectcard from "@/Components/ui/Projectcard";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-24 gap-4">
        <Image
          src={"/portfolioDp.png"}
          alt="My portfolio picture"
          height={2061}
          width={1170}
          className="rounded-full w-56 h-56 object-cover bg-[#5E5E5E]"
        />
        <div className="text-[#999797] flex items-center justify-center flex-col space-y-1 mt-8 sm:mt-0">
          <p className="text-[#CCCCCC]">Hey, there!</p>
          <p className="text-[#CCCCCC] font-bold text-4xl">
            I am Emmanuel Francis
          </p>
          <p className="font-semibold text-3xl">
            Developer / Software Engineer
          </p>
          <p className="text-white">Based in Rwanda</p>
          <p>I love to code & make projects I find interest in</p>
          <LinkIcons />
        </div>
      </div>
      <h1 className="text-center font-bold text-4xl mt-16">Projects</h1>
      <div className="flex sm:flex-row sm:gap-4 flex-col items-center justify-center">
        <Projectcard />
        <Projectcard />
      </div>
      <h1 className="text-center font-bold text-4xl my-16">Tech Stack</h1>
      <Techstack />
      <h1 className="text-center font-bold text-4xl my-16">Contact</h1>
      <Contact />
    </div>
  );
}
