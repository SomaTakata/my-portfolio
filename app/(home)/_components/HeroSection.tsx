import { MovingBorderButton } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./Title";

export default function HeroSection() {
  //スパムボット対策
  const generateMailtoLink = (user: string, domain: string) => {
    return `mailto:${user}@${domain}`;
  };
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋 <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Soma."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Japan, I'm a Frontend developer passionate about building a modern web application that users love."
          }
        </p>
        <Link
          href={"mailto:somatakata.job@gmail.com"}
          className="inline-block group"
        >
          <Title title="Contact Me 📭" />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl hover:scale-75  transition-all   bg-green-500"></div>
            <div className="w-32 h-32 rounded-full hover:scale-75 transition-all  bg-indigo-500 "></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl hover:scale-75 transition-all  bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full hover:scale-75 transition-all  bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderButton
            borderRadius="0.5rem"
            className="p-3 font-semibold "
          >
            <p>📋 Available for Work</p>
          </MovingBorderButton>
        </div>
      </div>
    </div>
  );
}
