import Navbar from "@/Components/Navbar";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="bg-[#353434] text-white min-h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
