
import React from "react";
import { Code2, Lightbulb, Database, ArrowUpRight } from "lucide-react";
import WorkCard from "./WorkCard";

const workMethods = [
  {
    number: "01",
    title: "Project-driven learning",
    description:
      "Most of my skills are developed through building real applications. I learn by creating, testing, and improving systems rather than following tutorials alone.",
    Icon: Code2,
  },
  {
    number: "02",
    title: "Problem-first approach",
    description:
      "I focus on understanding the problem before choosing the technology. Clear requirements and thoughtful planning lead to better solutions and cleaner code.",
    Icon: Lightbulb,
  },
  {
    number: "03",
    title: "End-to-end development",
    description:
      "I enjoy working across the entire stack, from database design and backend APIs to responsive user interfaces, turning ideas into complete applications.",
    Icon: Database,
  },
];

export default function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="w-full overflow-hidden bg-[#020d1e] px-5 py-20 text-white sm:px-8 lg:px-[7.5%] lg:py-24"
    >
      <div className="mx-auto max-w-[1420px]">
        {/* Heading */}
        <div className="mb-10">
          <span className="mb-5 inline-block text-sm font-bold tracking-[3px] text-cyan-400">
            MY APPROACH
          </span>

          <h2 className="mb-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
            How I work, from idea
            <br className="hidden sm:block" />
            to application.
          </h2>

          <p className="max-w-3xl text-base leading-7 text-blue-200/80 sm:text-lg sm:leading-8">
            I learn by building, solve problems before choosing tools,
            and enjoy bringing complete applications to life.
          </p>
        </div>

        {/* Cards from separate component */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workMethods.map((work) => (
            <WorkCard key={work.number} {...work} />
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-7 flex flex-col items-start justify-between gap-5 rounded-2xl border border-blue-500/80 bg-gradient-to-r from-blue-500/[0.09] to-cyan-400/[0.03] p-6 sm:p-8 lg:flex-row lg:items-center">
          <div>
            <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
              Built through real projects.
            </h3>

            <p className="max-w-3xl text-sm leading-7 text-blue-200/80 sm:text-base">
              Practical learning, thoughtful problem-solving, and
              full-stack development from start to finish.
            </p>
          </div>

          <a
            href="#projects"
            className="inline-flex shrink-0 items-center gap-2 py-2 text-xs font-bold tracking-wider text-cyan-400 transition-all duration-300 hover:gap-3 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 sm:text-sm"
          >
            EXPLORE MY PROJECTS
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}