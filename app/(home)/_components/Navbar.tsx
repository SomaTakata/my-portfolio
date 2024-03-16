import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SiZenn } from "react-icons/si";
import { SiX } from "react-icons/si";
export default function Navbar() {
  const socials = [
    {
      Link: "https://github.com/SomaTakata",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: "https://twitter.com/soma_takata",
      Label: "X",
      Icon: SiX,
    },
    {
      Link: "https://zenn.dev/soma_takata",
      Label: "Zenn",
      Icon: SiZenn,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        SomaTakata 🧑🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.Label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
