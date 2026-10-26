
import {
  Code2,
  GitBranch,
  GraduationCap,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const achievements = [
  {
    title: "Personal Projects",
    description:
      "I've built projects to practice my skills and turn ideas into practical web applications.",
    items: [
      "Todo Application (Django REST Framework)",
      "E-commerce Website (Full-Stack)",
      "Portfolio Website (React, Tailwind CSS)",
    ],
    Icon: Code2,
    color: "cyan",
    border: "border-cyan-500/70 hover:border-cyan-400",
    glow: "hover:shadow-cyan-500/15",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/10 group-hover:bg-cyan-400/20",
    bullet: "bg-cyan-400",
  },
  {
    title: "GitHub & Communities",
    description:
      "I'm active on GitHub and enjoy being part of developer communities to learn and share knowledge.",
    items: [
      "GitHub Profile (Projects & Contributions)",
      "Developer Communities (Stack Overflow, Discord)",
      "Open Source (Learning & Contributing)",
    ],
    Icon: GitBranch,
    color: "blue",
    border: "border-blue-500/70 hover:border-blue-400",
    glow: "hover:shadow-blue-500/15",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10 group-hover:bg-blue-400/20",
    bullet: "bg-blue-400",
  },
  {
    title: "Courses & Certifications",
    description:
      "I'm continuously improving my technical knowledge through courses, hands-on practice, and self-learning.",
    items: [
      "Python & Django",
      "React & Frontend Development",
      "REST APIs & Database Management",
    ],
    Icon: GraduationCap,
    color: "purple",
    border: "border-violet-500/70 hover:border-violet-400",
    glow: "hover:shadow-violet-500/15",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10 group-hover:bg-violet-400/20",
    bullet: "bg-violet-400",
  },
  {
    title: "Current Learning Journey",
    description:
      "I'm always exploring new technologies and improving my skills to build better web experiences.",
    items: [
      "Full-Stack Web Development",
      "Backend Development with Django REST Framework",
      "Frontend Development with React",
      "Exploring AI & Cybersecurity",
    ],
    Icon: TrendingUp,
    color: "teal",
    border: "border-teal-500/70 hover:border-teal-400",
    glow: "hover:shadow-teal-500/15",
    iconColor: "text-teal-400",
    iconBg: "bg-teal-400/10 group-hover:bg-teal-400/20",
    bullet: "bg-teal-400",
  },
];

function AchievementCard({ card }) {
  const {
    title,
    description,
    items,
    Icon,
    border,
    glow,
    iconColor,
    iconBg,
    bullet,
  } = card;

  return (
    <article
      className={`group relative flex gap-4 overflow-hidden rounded-3xl border bg-slate-950/60 p-5 transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-slate-900/90 hover:shadow-xl sm:gap-6 sm:p-7 ${border} ${glow}`}
    >
      {/* Icon */}
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-current/30 transition-all duration-300 group-hover:scale-110 sm:h-[86px] sm:w-[86px] ${iconColor} ${iconBg}`}
      >
        <Icon size={38} strokeWidth={2.4} className="sm:h-11 sm:w-11" />
      </div>

      {/* Vertical divider */}
      <div
        className={`hidden w-0.5 shrink-0 self-stretch opacity-90 sm:block ${bullet}`}
      />

      {/* Content */}
      <div className="min-w-0 flex-1 pr-1">
        <h3 className="text-lg font-bold text-white sm:text-xl">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
          {description}
        </p>

        <ul className="mt-5 space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-relaxed text-slate-300 sm:text-base"
            >
              <span
                className={`mt-2 h-2 w-2 shrink-0 rounded-full ${bullet}`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover arrow */}
      <div
        className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-slate-950 sm:right-6 sm:top-7 ${border} ${iconColor}`}
      >
        <ArrowRight size={20} />
      </div>
    </article>
  );
}

export default function JourneyAchievements() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#020b18] px-5 py-20 sm:px-8 lg:px-12"
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 -left-28 -z-10 h-80 w-80 rounded-full bg-cyan-600/15 blur-3xl" />

      {/* Decorative dots */}
      <div className="pointer-events-none absolute left-8 top-8 -z-10 grid grid-cols-3 gap-3 opacity-70">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className="h-1 w-1 rounded-full bg-sky-400"
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <header className="mb-12 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-1 w-11 rounded-full bg-cyan-400" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 sm:text-base">
              My Journey & Achievements
            </p>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Small Steps,{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Big Dreams
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-lg">
            Every project, every challenge, and every new skill
            is part of my journey. I'm constantly learning,
            building, and growing as a developer.
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {achievements.map((card) => (
            <AchievementCard key={card.title} card={card} />
          ))}
        </div>

        {/* Footer quote */}
        <div className="mt-12 flex items-center justify-center gap-4 sm:gap-6">
          <span className="hidden h-px w-24 bg-cyan-500 sm:block" />

          <Code2 className="h-8 w-8 shrink-0 text-sky-400" />

          <p className="text-center text-sm italic text-slate-300 sm:text-lg">
            "Learning today, building tomorrow."
          </p>

          <span className="hidden h-px w-24 bg-cyan-500 sm:block" />
        </div>
      </div>
    </section>
  );
}
