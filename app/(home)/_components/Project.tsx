import React from "react";
import {
  SiGo,
  SiNextdotjs,
  SiPlanetscale,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Project() {
  const projects = [
    {
      title: "Dev Quest",
      tech: [SiNextdotjs, SiPlanetscale, SiPrisma, SiTailwindcss],
      link: "https://github.com/SomaTakata/dev-quest",
      cover: "/project-1.png",
      background: "bg-green-500",
    },
    {
      title: "NginLink",
      tech: [SiNextdotjs, SiGo, SiTailwindcss],
      link: "https://github.com/SomaTakata/ngin-link",
      cover: "/project-2.png",
      background: "bg-indigo-500",
    },
    {
      title: "PortFolio",
      tech: [SiNextdotjs, SiTailwindcss],
      link: "https://soma-takata.com",
      cover: "/project-3.png",
      background: "bg-pink-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0 ">
      <Title
        title="Projects 🚀"
        className="flex flex-col items-center justify-center rotate-6 "
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link key={index} href={project.link}>
              <div className={cn("p-4 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full  cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
