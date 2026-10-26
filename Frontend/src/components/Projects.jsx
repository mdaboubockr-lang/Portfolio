
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Globe,
  Layers3,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const filters = [
  "All",
  "E-commerce",
  "LMS",
  "Blog",
  "Todo",
  "Others",
];

// Replace these sample URLs with your real project links and screenshots.
const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "E-commerce",
    type: "Full Stack",
    description:
      "A complete e-commerce application with product listings, shopping cart, secure checkout, and an admin dashboard for managing products and orders.",
    technologies: ["Django", "React", "PostgreSQL", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Fashion products displayed in an online shopping store",
    github: "https://github.com/mdaboubockr-lang",
    demo: "",
    details: "",
    accent: "from-blue-500/20 to-cyan-500/5",
    icon: "🛍️",
  },
  {
    id: 2,
    title: "Todo Application",
    category: "Todo",
    type: "Full Stack",
    description:
      "A full-stack task management application with user authentication, task filtering, deadlines, and REST API integration.",
    technologies: ["Django", "DRF", "React", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Workspace with a laptop and planning documents",
    github: "https://github.com/mdaboubockr-lang/Todo-Application-API",
    demo: "",
    details: "",
    accent: "from-emerald-500/20 to-teal-500/5",
    icon: "✓",
  },
  {
    id: 3,
    title: "Learning Management System",
    category: "LMS",
    type: "Full Stack",
    description:
      "A learning platform with course management, student enrollment, learning progress, and dashboards for managing educational content.",
    technologies: ["Django", "React", "MySQL", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Laptop and digital learning workspace",
    github: "https://github.com/mdaboubockr-lang",
    demo: "",
    details: "",
    accent: "from-violet-500/20 to-purple-500/5",
    icon: "🎓",
  },
  {
    id: 4,
    title: "Blog Website",
    category: "Blog",
    type: "Full Stack",
    description:
      "A modern blogging platform with categories, searchable articles, comments, and an administration interface for publishing content.",
    technologies: ["Django", "React", "MySQL", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Notebook and laptop on a desk",
    github: "https://github.com/mdaboubockr-lang",
    demo: "",
    details: "",
    accent: "from-orange-500/20 to-amber-500/5",
    icon: "✍️",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    category: "Others",
    type: "Full Stack",
    description:
      "A personal developer portfolio with dynamic project listings, blog content, contact information, and backend-controlled content management.",
    technologies: ["Django", "React", "DRF", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Code displayed on a computer screen",
    github: "https://github.com/mdaboubockr-lang",
    demo: "",
    details: "",
    accent: "from-pink-500/20 to-rose-500/5",
    icon: "</>",
  },
  {
    id: 6,
    title: "Student Record CLI",
    category: "Others",
    type: "Practice Project",
    description:
      "A small Python command-line application created for practice. It supports basic student record operations and CSV file storage.",
    technologies: ["Python", "CSV"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Programming code displayed on a computer",
    github: "https://github.com/mdaboubockr-lang",
    demo: "",
    details: "",
    accent: "from-slate-500/20 to-slate-700/5",
    icon: ">_",
  },
];

const techStyles = {
  Django: "text-emerald-300 bg-emerald-400/10",
  DRF: "text-rose-300 bg-rose-400/10",
  React: "text-cyan-300 bg-cyan-400/10",
  PostgreSQL: "text-sky-300 bg-sky-400/10",
  MySQL: "text-orange-300 bg-orange-400/10",
  Python: "text-yellow-300 bg-yellow-400/10",
  "Tailwind CSS": "text-teal-300 bg-teal-400/10",
  CSV: "text-lime-300 bg-lime-400/10",
};

function TechBadge({ name }) {
  return (
    <span
      className={`rounded-lg px-2.5 py-1.5 text-xs font-medium ${
        techStyles[name] || "bg-white/5 text-slate-300"
      }`}
    >
      {name}
    </span>
  );
}

function ProjectCard({ project, index }) {
  const isPractice = project.type === "Practice Project";

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0c1424] transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_15px_50px_-20px_rgba(37,99,235,0.25)]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Project preview */}
      <div
        className={`relative m-3 mb-0 overflow-hidden rounded-xl bg-gradient-to-br ${project.accent}`}
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/70 via-transparent to-transparent" />

        <div className="absolute left-3 top-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-md ${
              isPractice
                ? "border-slate-500/30 bg-slate-950/80 text-slate-200"
                : "border-blue-400/30 bg-blue-600/90 text-white"
            }`}
          >
            {!isPractice && <CheckCircle2 size={13} />}
            {project.type}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-slate-950/70 text-lg text-white backdrop-blur-md">
          {project.icon}
        </div>
      </div>

      {/* Project details */}
      <div className="flex flex-1 flex-col p-5 pt-4">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.15em] text-blue-400">
              {project.category}
            </p>

            <h3 className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-blue-300">
              {project.title}
            </h3>
          </div>

          <ArrowUpRight
            size={19}
            className="mt-1 shrink-0 text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
          />
        </div>

        <p className="mb-5 text-sm leading-6 text-slate-400">
          {project.description}
        </p>

        {/* Technology stack */}
        <div className="mb-6 mt-auto flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2 border-t border-slate-800 pt-4">
          <a
            href={project.details || project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-500 sm:text-sm"
          >
            View Project
            <ExternalLink size={14} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-3 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-white/5 sm:text-sm"
          >
            <FaGithub size={16} />
            GitHub
          </a>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-2 py-2.5 text-xs font-semibold text-slate-400 transition hover:text-blue-300 sm:text-sm"
            >
              <Globe size={15} />
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  const fullStackCount = projects.filter(
    (project) => project.type === "Full Stack"
  ).length;

  return (
    <section
      id="projects"
      className="relative isolate min-h-screen overflow-hidden bg-[#070d19] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -left-40 top-[40%] h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                My Projects
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Here are some of the full-stack projects I've built to
              solve real problems. Each project reflects my approach
              to building modern web applications with clean code,
              thoughtful design, and maintainable architecture.
            </p>
          </div>

          {/* Developer info card */}
          <div className="relative overflow-hidden rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-500/10 to-violet-500/5 p-5 sm:min-w-80">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                <Code2 size={29} className="text-blue-400" />
              </div>

              <div>
                <p className="text-lg font-bold text-white">
                  Md. Aboubockr
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Full-Stack Developer
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <div>
                <p className="text-2xl font-bold text-white">
                  {fullStackCount}+
                </p>
                <p className="text-xs text-slate-500">
                  Full-stack projects
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-blue-300">
                Built with purpose
                <ArrowDownRight size={17} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition duration-200 ${
                  isActive
                    ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-600 hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project count */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-300">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>

          <div className="hidden items-center gap-2 text-xs text-slate-500 sm:flex">
            <Layers3 size={15} />
            Selected work & personal projects
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 border-t border-slate-800 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                Have a project in mind?
              </p>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Let's build something meaningful.
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Explore my code, discover my work, or get in touch.
              </p>
            </div>

            <a
              href="https://github.com/mdaboubockr-lang"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-blue-500/50 hover:bg-blue-500/10"
            >
              <FaGithub size={19} />
              More on GitHub
              <ArrowRight size={16} className="text-blue-400" />
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800/70 pt-6 text-xs text-slate-600 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Md. Aboubockr. All rights
              reserved.
            </p>

            <p className="flex items-center gap-2">
              Designed with <Code2 size={14} className="text-blue-400" />
              React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}