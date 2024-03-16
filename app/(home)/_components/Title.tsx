import React from "react";

interface TitleProps {
  title: string;
  className?: string;
}
export default function Title({ title, className }: TitleProps) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold group-hover:text-green-500 transition-all">
        {title}
      </h1>
      <div className="w-40 h-2 bg-green-500 rounded-full"></div>
      <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2 "></div>
    </div>
  );
}
