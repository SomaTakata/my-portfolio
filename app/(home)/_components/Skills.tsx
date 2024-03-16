"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-gover-effect";
import { IconType } from "react-icons";
import {
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  interface Skills {
    text: string;
    Icon: IconType;
  }

  const skills: Skills[] = [
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },

    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Prisma",
      Icon: SiPrisma,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        title="Skills 🔥"
        className="flex flex-col items-center justify-center -rotate-6 "
      />
      <HoverEffect items={skills} />
    </div>
  );
}
