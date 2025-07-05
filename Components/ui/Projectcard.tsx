import Image from "next/image";
import React from "react";
import { IoLogoGithub } from "react-icons/io";

export default function Projectcard() {
  return (
    <div className="my-8">
      <div className="flex flex-col border border-[#999797] rounded-xl p-4 w-[320px]">
        <Image
          src={"/drag&drop.png"}
          alt="drag & drop section"
          width={2122}
          height={1234}
          className="w-full h-auto object-cover rounded-md"
        />

        <div className="flex flex-col py-2">
          <h3 className="font-bold text-lg py-2">DirtyBucket</h3>

          <div className="text-sm text-[#999797] tracking-tight">
            <p>DirtyBucket is a modern platform for producers to sell and</p>
            <p>showcase their beats with a clean UI and smooth user</p>
            <p>experience.</p>
          </div>

          <div className="self-start inline-flex items-center space-x-2 border border-[#999797] rounded-2xl px-3 py-1 mt-4 text-sm">
            <span>Check the code</span>
            <IoLogoGithub />
          </div>
        </div>
      </div>
    </div>
  );
}
