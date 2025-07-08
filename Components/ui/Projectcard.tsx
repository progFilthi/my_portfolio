"use client";
import Image from "next/image";
import React from "react";
import { IoLogoGithub } from "react-icons/io";

export default function Projectcard() {
  const handleclick = () => {
    window.open("https://github.com/progFilthi/dirty-bucket", "_blank");
  };
  return (
    <div
      id="#projects"
      className="flex flex-col rounded-xl mt-16 p-4 w-[320px] transition-all duration-300 shadow-amber-700 shadow"
    >
      <Image
        src={"/drag&drop.png"}
        alt="drag & drop section"
        width={2122}
        height={1234}
        className="w-full h-auto object-cover rounded-md"
      />

      <div className="flex flex-col py-2">
        <h3 className="font-bold text-lg py-2">DirtyBucket</h3>

        <div className="text-sm text-[#747474] tracking-tight">
          <p>A platform for producers to sell</p>
          <p>showcase their beats with a clean UI</p>
          <p>and smooth user experience.</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="self-start inline-flex items-center space-x-2 border border-[#999797] rounded-2xl px-3 py-1 mt-3 text-sm hover:bg-[#383838] transition-all duration-300 cursor-pointer">
            <span>Live Demo</span>
          </div>
          <button
            onClick={handleclick}
            type="button"
            className="self-start inline-flex items-center space-x-2 border border-[#999797] rounded-2xl px-3 py-1 mt-3 text-sm hover:bg-[#383838] transition-all duration-300 cursor-pointer"
          >
            <span>Check the code</span>
            <IoLogoGithub className="text-xl " />
          </button>
        </div>
      </div>
    </div>
  );
}
