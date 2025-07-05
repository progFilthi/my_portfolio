import Image from "next/image";
import React from "react";

const icons = [
  {
    src: "/icons/HTML5.svg",
    alt: "html logo",
  },
  {
    src: "/icons/CSS3.svg",
    alt: "Css logo",
  },
  {
    src: "/icons/JavaScript.svg",
    alt: "Javascript logo",
  },
  {
    src: "/icons/TypeScript.svg",
    alt: "Typescript logo",
  },
  {
    src: "/icons/Tailwind CSS.svg",
    alt: "Tailwind logo",
  },
  {
    src: "/icons/React.svg",
    alt: "React logo",
  },
  {
    src: "/icons/Next.js.svg",
    alt: "Nextjs logo",
  },
  {
    src: "/icons/PostgresSQL.svg",
    alt: "Postgresql logo",
  },
  {
    src: "/icons/Express.svg",
    alt: "Expressjs logo",
  },
  {
    src: "/icons/Node.js.svg",
    alt: "Nodejs logo",
  },
  {
    src: "/icons/MongoDB.svg",
    alt: "MongoDb logo",
  },
  {
    src: "/icons/Mongoose.js.svg",
    alt: "Mongoose logo",
  },
  {
    src: "/icons/AWS.svg",
    alt: "MongoDb logo",
  },
  {
    src: "/icons/Git.svg",
    alt: "Git logo",
  },
  {
    src: "/icons/GitHub.svg",
    alt: "Github logo",
  },
  {
    src: "/icons/Visual Studio Code (VS Code).svg",
    alt: "Vs code logo",
  },
];

export default function Techstack() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 border border-[#999797b6] rounded-xl place-items-center hover:bg-[#4A4A4A] transition-all duration-300">
      {icons.map((icon, index) => (
        <Image
          key={index}
          src={icon.src}
          alt={icon.alt}
          width={48}
          height={48}
        />
      ))}
    </div>
  );
}
