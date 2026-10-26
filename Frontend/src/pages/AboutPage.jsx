
import {
  Code2,
  BookOpen,
  Rocket,
  Lightbulb,
  Target,
  Users,
  Star,
  GraduationCap,
  Database,
  Wrench,
  Monitor,
  BrainCircuit,
  Gamepad2,
  Music,
  ArrowRight,
  MapPin,
  Mail,
  Clock3,
  Layers3,
  Sparkles,
  GitBranch,
  ExternalLink,
} from "lucide-react";

const journey = [
  {
    year: "01",
    title: "The Beginning",
    description:
      "My journey started with curiosity about how websites and applications work. Learning Python introduced me to programming and the possibilities of building something from scratch.",
    Icon: BookOpen,
  },
  {
    year: "02",
    title: "Exploring Web Development",
    description:
      "I began exploring HTML, CSS, JavaScript, and databases. Small experiments gradually became real projects, helping me understand how different parts of a web application work together.",
    Icon: Code2,
  },
  {
    year: "03",
    title: "Building Full-Stack Projects",
    description:
      "Working with Django, Django REST Framework, React, and MySQL helped me explore frontend interfaces, backend logic, APIs, authentication, and data management.",
    Icon: Layers3,
  },
  {
    year: "04",
    title: "What's Next",
    description:
      "I'm continuing to improve my development workflow, build more complete applications, explore AI-powered tools, and learn how to create better software through practice.",
    Icon: Rocket,
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    subtitle: "Interfaces & experiences",
    Icon: Monitor,
    color: "text-cyan-400",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    subtitle: "Logic & APIs",
    Icon: Code2,
    color: "text-sky-400",
    items: ["Python", "Django", "Django REST Framework", "REST APIs"],
  },
  {
    title: "Databases",
    subtitle: "Data & persistence",
    Icon: Database,
    color: "text-teal-400",
    items: ["MySQL", "SQLite", "Database Design", "ORM"],
  },
  {
    title: "Developer Tools",
    subtitle: "Building & workflow",
    Icon: Wrench,
    color: "text-violet-400",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

const values = [
  {
    title: "Continuous Learning",
    description:
      "Technology never stands still, and neither do I. I enjoy learning new concepts, revisiting fundamentals, and improving through hands-on practice.",
    Icon: Lightbulb,
  },
  {
    title: "Problem Solving",
    description:
      "I like breaking complicated challenges into smaller, understandable steps and working toward solutions that are useful and maintainable.",
    Icon: Target,
  },
  {
    title: "Building with Purpose",
    description:
      "I want the applications I build to solve real problems, make tasks easier, and provide a clear, enjoyable experience for the people using them.",
    Icon: Rocket,
  },
  {
    title: "Consistency",
    description:
      "Progress comes from showing up, experimenting, learning from mistakes, and continuing to improve even when a problem takes time to solve.",
    Icon: Star,
  },
];

const projects = [
  {
    number: "01",
    title: "E-commerce Website",
    category: "Full-Stack Development",
    description:
      "An online shopping experience that brings together a user interface, backend application logic, and database-driven functionality.",
    stack: ["Django", "React", "JavaScript"],
  },
  {
    number: "02",
    title: "Todo Application API",
    category: "Backend & API Development",
    description:
      "A task management application focused on REST API design, data validation, authentication, and managing user-specific tasks.",
    stack: ["Python", "DRF", "MySQL"],
  },
  {
    number: "03",
    title: "Learning Management System",
    category: "Web Application",
    description:
      "A learning platform concept designed around organizing courses, managing learning content, and supporting a structured learning experience.",
    stack: ["Django", "React", "Database"],
  },
  {
    number: "04",
    title: "Blog Website",
    category: "Web Development",
    description:
      "A content-focused application exploring article management, dynamic pages, database operations, and a clean reading experience.",
    stack: ["Django", "HTML", "CSS"],
  },
];

const interests = [
  {
    title: "Reading",
    description:
      "Exploring books and ideas that broaden my knowledge and perspective.",
    Icon: BookOpen,
  },
  {
    title: "Gaming",
    description:
      "Enjoying games such as Minecraft and eFootball in my free time.",
    Icon: Gamepad2,
  },
  {
    title: "Technology & AI",
    description:
      "Exploring emerging technologies, AI tools, and new ways to build.",
    Icon: BrainCircuit,
  },
  {
    title: "Creative Exploration",
    description:
      "Discovering design ideas, experimenting with interfaces, and finding inspiration.",
    Icon: Sparkles,
  },
  {
    title: "Music",
    description:
      "Listening to music while relaxing, thinking, or working on something interesting.",
    Icon: Music,
  },
];

const cardClass =
  "rounded-2xl border border-sky-500/20 bg-slate-950/50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-cyan-500/5";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-cyan-400" />
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function AboutPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#020b18] text-slate-300 selection:bg-cyan-400/30 selection:text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-48 top-40 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 top-[1100px] -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

      {/* 01 — Introduction */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-12 lg:pb-28"
      >
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              A little about me
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            More than code.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              A mindset to build.
            </span>
          </h1>

          <h2 className="mt-6 text-lg font-medium text-slate-200 sm:text-xl">
            Hi, I'm Aboubockr — a full-stack developer.
          </h2>

          <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-slate-400 sm:text-base">
            <p>
              I'm passionate about building web applications,
              understanding how technology works, and turning
              ideas into something people can actually use.
              My development journey brings together frontend
              design, backend engineering, databases, and APIs.
            </p>

            <p>
              I enjoy working across the full stack, from
              creating responsive interfaces with React and
              Tailwind CSS to building application logic and
              APIs with Python, Django, and Django REST Framework.
            </p>

            <p>
              I'm still growing, experimenting, and learning
              every day. For me, becoming a better developer
              isn't just about learning another framework.
              It's about understanding problems more deeply,
              writing better code, and building things with purpose.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore my work
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#my-journey"
              className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              My journey
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-sky-500/20 pt-7">
            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-400" size={21} />
              <div>
                <p className="text-sm font-medium text-white">Location</p>
                <p className="mt-1 text-xs text-slate-400">
                  Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Code2 className="text-cyan-400" size={21} />
              <div>
                <p className="text-sm font-medium text-white">Focus</p>
                <p className="mt-1 text-xs text-slate-400">
                  Full-Stack Development
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 className="text-cyan-400" size={21} />
              <div>
                <p className="text-sm font-medium text-white">Mindset</p>
                <p className="mt-1 text-xs text-slate-400">
                  Always Learning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right-side visual */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 to-[#020b18] p-5 shadow-2xl shadow-cyan-950/30 sm:p-8">
            <div className="flex items-center justify-between border-b border-sky-500/20 pb-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-xs text-slate-500">
                about_me.py
              </span>
            </div>

            <div className="space-y-5 py-8 font-mono text-sm leading-7 sm:text-base">
              <p>
                <span className="text-violet-400">class</span>{" "}
                <span className="text-cyan-300">Developer</span>:
              </p>

              <div className="space-y-3 pl-5">
                <p>
                  <span className="text-sky-300">name</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-emerald-300">
                    "Aboubockr"
                  </span>
                </p>
                <p>
                  <span className="text-sky-300">role</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-emerald-300">
                    "Full-Stack Developer"
                  </span>
                </p>
                <p>
                  <span className="text-sky-300">mindset</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-emerald-300">
                    "Keep building"
                  </span>
                </p>
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-cyan-400/5 p-4">
                <p className="text-slate-500"># Current philosophy</p>
                <p className="mt-2 text-cyan-300">
                  Learn. Build. Improve.
                </p>
              </div>

              <p className="text-slate-500">
                # One step at a time...
                <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-cyan-400 align-middle" />
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-sky-500/20 pt-5">
              {[
                ["Build", "with purpose"],
                ["Learn", "by doing"],
                ["Grow", "every day"],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="text-sm font-bold text-cyan-300">
                    {title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -right-3 -top-4 hidden rounded-xl border border-cyan-400/30 bg-[#061426] px-4 py-3 shadow-lg shadow-cyan-950/30 sm:block">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs text-slate-300">
                Open to learning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Personal philosophy */}
      <section className="border-y border-sky-500/15 bg-slate-950/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3 lg:px-12">
          {[
            {
              number: "01",
              title: "Curiosity First",
              text: "I like understanding why things work, not just copying how they are built.",
            },
            {
              number: "02",
              title: "Practice Over Theory",
              text: "Projects and experiments help me turn what I learn into skills I can use.",
            },
            {
              number: "03",
              title: "Always Improving",
              text: "Every bug, challenge, and finished feature gives me another opportunity to grow.",
            },
          ].map((item) => (
            <div key={item.number} className="flex gap-4">
              <span className="pt-1 font-mono text-sm text-cyan-400">
                {item.number}
              </span>
              <div>
                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — Journey timeline */}
      <section
        id="my-journey"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <SectionHeading
          eyebrow="The process"
          title="My Journey So Far"
          description="Every stage of learning has helped me understand development a little better. My journey is still in progress, and every project gives me something new to explore."
        />

        <div className="relative ml-3 space-y-5 border-l border-sky-500/30 pl-7 sm:ml-5 sm:pl-10">
          {journey.map((item) => (
            <article
              key={item.year}
              className={`${cardClass} relative p-5 sm:p-7`}
            >
              <span className="absolute -left-[35px] top-7 h-3 w-3 rounded-full border-2 border-cyan-300 bg-[#020b18] shadow-[0_0_12px_rgba(34,211,238,0.6)] sm:-left-[48px]" />

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-400/5 text-cyan-400">
                  <item.Icon size={23} />
                </div>

                <div>
                  <p className="font-mono text-xs tracking-widest text-cyan-400">
                    CHAPTER {item.year}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 04 — Skills */}
      <section
        id="about-skills"
        className="border-y border-sky-500/15 bg-slate-950/30"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeading
            eyebrow="My toolkit"
            title="Skills & Technologies"
            description="I enjoy working across different layers of web development. These are the tools and technologies I use, practice, and continue exploring as I build applications."
          />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className={`${cardClass} p-6`}
              >
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-400/5 ${group.color}`}>
                  <group.Icon size={24} />
                </div>

                <h3 className="font-bold text-white">
                  {group.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {group.subtitle}
                </p>

                <ul className="mt-6 space-y-3">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-sky-500/20 bg-[#061426]/70 p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="shrink-0 text-cyan-400" size={22} />
                <p className="font-medium text-white">
                  My toolkit is always evolving.
                </p>
              </div>
              <p className="text-sm text-slate-400">
                Focused on fundamentals, practical skills, and better solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Core values */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionHeading
          eyebrow="What matters to me"
          title="The Principles Behind My Work"
          description="The tools I use are important, but the way I approach challenges matters just as much. These principles guide how I learn, build, and improve."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {values.map((value, index) => (
            <article
              key={value.title}
              className={`${cardClass} p-6 sm:p-8`}
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-400/5 text-cyan-400">
                  <value.Icon size={23} />
                </div>

                <div>
                  <p className="font-mono text-xs text-slate-600">
                    PRINCIPLE 0{index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 06 — Projects */}
      <section
        id="projects"
        className="border-y border-sky-500/15 bg-slate-950/30"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeading
            eyebrow="Learning through building"
            title="Projects That Shape My Skills"
            description="I believe the best way to understand development is to build real applications. Each project lets me explore a different part of the stack and put my knowledge into practice."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className={`${cardClass} p-6 sm:p-8`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm text-cyan-400">
                    / {project.number}
                  </span>
                  <span className="rounded-full border border-sky-500/20 px-3 py-1 text-xs text-slate-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-cyan-500/15 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-sky-500/20 bg-[#061426]/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="font-bold text-white">
                Every project is a new lesson.
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                I'm continuing to improve existing projects and explore new ideas.
              </p>
            </div>

            <a
              href="https://github.com/mdaboubockr-lang"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-cyan-400/50 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              <GitBranch size={18} />
              Explore GitHub
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* 07 — Background */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="My background"
              title="A Developer Built Through Practice"
              description="My development skills come from a mix of self-directed learning, exploring documentation, experimenting with code, and building projects that challenge me to learn something new."
            />

            <p className="text-sm leading-7 text-slate-400 sm:text-base">
              I value understanding the fundamentals behind the
              technologies I use. When I encounter something unfamiliar,
              I break it down, research it, experiment with different
              approaches, and apply what I learn in practice.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                label: "Learning approach",
                title: "Learn, experiment, apply",
                text: "Combining technical reading with hands-on projects and regular practice.",
                Icon: BookOpen,
              },
              {
                label: "Development approach",
                title: "Understand the full stack",
                text: "Connecting user interfaces, backend logic, APIs, and database operations.",
                Icon: Layers3,
              },
              {
                label: "Future direction",
                title: "Keep expanding my capabilities",
                text: "Deepening my knowledge of web engineering while exploring emerging technologies.",
                Icon: Rocket,
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`${cardClass} flex gap-4 p-5 sm:gap-5 sm:p-6`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <item.Icon size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-cyan-400">
                    {item.label}
                  </p>
                  <h3 className="mt-2 font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Beyond code */}
      <section className="border-y border-sky-500/15 bg-slate-950/30">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <SectionHeading
            eyebrow="Outside the editor"
            title="A Little More About Me"
            description="Technology is a big part of what I enjoy, but curiosity doesn't stop when I close my editor. My interests give me new ideas, help me relax, and keep me open to different perspectives."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {interests.map((interest) => (
              <article
                key={interest.title}
                className={`${cardClass} p-5`}
              >
                <interest.Icon
                  size={27}
                  className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="mt-5 font-semibold text-white">
                  {interest.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {interest.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — Closing statement */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/5 text-cyan-400">
            <Code2 size={29} />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            The journey continues
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            I'm not just learning
            <br className="hidden sm:block" />{" "}
            to build software.
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              I'm learning to build better.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Every idea is an opportunity to experiment. Every challenge
            is a chance to improve. And every project brings me one
            step closer to the developer I want to become.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              See what I build
              <ArrowRight size={17} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              <Mail size={17} />
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About page footer */}
      <footer className="border-t border-sky-500/20 bg-[#010711]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 sm:px-8 md:flex-row lg:px-12">
          <a
            href="#about"
            className="flex items-center gap-2 text-lg font-bold text-white"
          >
            <Code2 size={26} className="text-cyan-400" />
            abou<span className="-ml-2 text-cyan-400">bockr</span>
          </a>

          <p className="text-center text-xs text-slate-500">
            Built with curiosity, code, and a commitment to keep growing.
          </p>

          <a
            href="#about"
            className="text-sm text-slate-400 transition hover:text-cyan-400"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

export default AboutPage;
