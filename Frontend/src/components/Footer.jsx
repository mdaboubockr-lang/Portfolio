
import { useState } from "react";
import {
  Code2,
  GitBranch,
  Play,
  Mail,
  ArrowRight,
  ArrowUp,
  Send,
  UserRound,
  MessageSquare,
  BriefcaseBusiness,
} from "lucide-react";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000").replace(/\/$/, "");

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const technologies = [
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Django", icon: "🟢" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "MySQL", icon: "🗄️" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/mdaboubockr-lang",
    Icon: GitBranch,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: BriefcaseBusiness,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    Icon: Play,
  },
  {
    name: "Email",
    href: "mailto:mdaboubockr@gmail.com",
    Icon: Mail,
  },
];

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, description: message }),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const details = result && typeof result === "object"
          ? Object.values(result).flat().join(" ")
          : "";
        setSubmissionStatus({
          type: "error",
          message: details || "Your message could not be sent. Please try again.",
        });
        return;
      }

      form.reset();
      setSubmissionStatus({
        type: "success",
        message: "Thanks for reaching out! Your message was sent.",
      });
    } catch {
      setSubmissionStatus({
        type: "error",
        message: "Could not connect to the server. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden border-t border-sky-500/30 bg-[#020b18] text-slate-300"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-28 -z-10 h-80 w-80 rounded-full bg-blue-700/25 blur-3xl" />

      <div className="pointer-events-none absolute left-8 top-8 -z-10 grid grid-cols-3 gap-3 opacity-70">
        {Array.from({ length: 15 }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-sky-400"
          />
        ))}
      </div>

      {/* Main footer content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1.3fr] lg:gap-10 lg:py-20">

        {/* Brand and socials */}
        <div className="lg:border-r lg:border-sky-500/20 lg:pr-8">
          <a
            href="#home"
            className="group inline-flex items-center gap-3"
          >
            <Code2
              size={54}
              strokeWidth={2.7}
              className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
            />

            <span className="text-3xl font-extrabold tracking-tight text-white">
              abou<span className="text-cyan-400">bockr</span>
            </span>
          </a>

          <p className="mt-6 max-w-sm text-base leading-7 text-slate-300">
            Building modern web experiences with code,
            curiosity and creativity.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                title={name}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-500/50 bg-slate-950/50 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:border-r lg:border-sky-500/20 lg:pr-8">
          <h3 className="text-xl font-bold text-white">
            Quick Links
          </h3>

          <div className="mt-3 h-1 w-12 rounded-full bg-cyan-400" />

          <nav className="mt-6 flex flex-col gap-5">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center justify-between gap-3 text-base transition-colors duration-200 hover:text-cyan-400"
              >
                <span>{link.name}</span>

                <ArrowRight
                  size={19}
                  className="text-sky-300 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            ))}
          </nav>
        </div>

        {/* Technologies */}
        <div className="lg:border-r lg:border-sky-500/20 lg:pr-8">
          <h3 className="text-xl font-bold text-white">
            Technologies
          </h3>

          <div className="mt-3 h-1 w-12 rounded-full bg-cyan-400" />

          <ul className="mt-6 flex flex-col gap-4">
            {technologies.map((tech) => (
              <li
                key={tech.name}
                className="group flex items-center gap-4 text-base transition-transform duration-200 hover:translate-x-1"
              >
                <span className="flex h-7 w-7 items-center justify-center text-xl">
                  {tech.icon}
                </span>

                <span className="transition-colors group-hover:text-cyan-400">
                  {tech.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact form */}
        <div>
          <h3 className="text-xl font-bold text-white">
            Get in Touch
          </h3>

          <div className="mt-3 h-1 w-12 rounded-full bg-cyan-400" />

          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
            Have a project in mind, a question, or just want
            to say hi? I'd love to hear from you!
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            {/* Name */}
            <label className="flex items-center gap-3 rounded-xl border border-sky-500/70 bg-slate-950/60 px-4 transition-all duration-300 focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400/40">
              <UserRound
                size={22}
                className="shrink-0 text-cyan-400"
              />

              <input
                type="text"
                name="name"
                placeholder="Your name"
                aria-label="Your name"
                autoComplete="name"
                required
                className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-400"
              />
            </label>

            {/* Email */}
            <label className="flex items-center gap-3 rounded-xl border border-sky-500/70 bg-slate-950/60 px-4 transition-all duration-300 focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400/40">
              <Mail
                size={22}
                className="shrink-0 text-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                aria-label="Your email"
                autoComplete="email"
                required
                className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-400"
              />
            </label>

            {/* Message */}
            <label className="flex items-start gap-3 rounded-xl border border-sky-500/70 bg-slate-950/60 px-4 transition-all duration-300 focus-within:border-violet-400 focus-within:ring-1 focus-within:ring-violet-400/40">
              <MessageSquare
                size={22}
                className="mt-3 shrink-0 text-cyan-400"
              />

              <textarea
                name="message"
                placeholder="Your message"
                aria-label="Your message"
                rows={3}
                required
                className="w-full resize-y bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-400"
              />
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-between rounded-full border border-cyan-400 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-1.5 pl-6 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:shadow-cyan-400/25"
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
                <Send size={19} />
              </span>
            </button>
            {submissionStatus && (
              <p
                role={submissionStatus.type === "error" ? "alert" : "status"}
                className={`text-sm ${
                  submissionStatus.type === "error" ? "text-rose-300" : "text-emerald-300"
                }`}
              >
                {submissionStatus.message}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sky-500/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-7 sm:px-10 md:flex-row">
          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-cyan-400">
              aboubockr
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="hidden h-px w-10 bg-cyan-500 sm:block" />
            <span>Code</span>
            <span className="text-cyan-400">•</span>
            <span>Build</span>
            <span className="text-cyan-400">•</span>
            <span>Grow</span>
          </div>

          <a
            href="#about"
            aria-label="Back to top"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-cyan-400/30"
          >
            <ArrowUp size={23} />
          </a>
        </div>
      </div>
    </footer>
  );
}
