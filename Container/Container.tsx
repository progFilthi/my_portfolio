import Navbar from "@/Components/Navbar";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="bg-[#353434] text-white flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-2">{children}</main>
    </div>
  );
}
