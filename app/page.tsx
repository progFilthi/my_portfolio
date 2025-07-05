import Contact from "@/Components/Contact";
import LinkIcons from "@/Components/LinkIcons";
import Techstack from "@/Components/Techstack";
import Projectcard from "@/Components/ui/Projectcard";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
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
          <LinkIcons />
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-4xl mt-24 mb-8">Projects</h1>
      </div>
      <div className="flex space-x-4 items-center justify-center">
        <Projectcard />
        <Projectcard />
      </div>
      <div>
        <h1 className="text-center font-bold text-4xl mt-24 mb-8">
          Tech Stack
        </h1>
      </div>
      <div className="my-8">
        <Techstack />
      </div>
      <div>
        <h1 className="text-center font-bold text-4xl mt-24 mb-8">Contact</h1>
      </div>
      <div className="my-8">
        <Contact />
      </div>
    </div>
  );
}
