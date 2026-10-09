import portfolio from '../assets/Portfolio.jpeg';
import React from "react";

const skills = [
    {
        name: "HTML",
        icon: (
            <svg className="w-3.5 h-3.5 fill-[#E34F26]" role="img" viewBox="0 0 24 24">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059-.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
            </svg>

        )
    },
    {
        name: "CSS",
        icon: (
            <svg className="w-3.5 h-3.5 fill-[#1572B6]" role="img" viewBox="0 0 24 24">
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059-.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
            </svg>
        )
    },
    {
        name: "JavaScript",
        icon: (
            <span
                className="w-3.5 h-3.5 flex items-center justify-center bg-[#F7DF1E] rounded-sm select-none font-sans"
                style={{ minWidth: '14px', minHeight: '14px' }}
            >
                <span
                    className="text-[7.5px] font-black text-black leading-none self-end tracking-tighter"
                    style={{ fontFamily: '"Arial Black", Impact, sans-serif', paddingRight: '1px', paddingBottom: '1px' }}
                >
                    JS
                </span>
            </span>
        )
    },



    {
        name: "React",
        icon: (
            <svg className="w-3.5 h-3.5 fill-[#61DAFB]" role="img" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://w3.org">
                {/* Central nucleus */}
                <circle cx="0" cy="0" r="2.05" />
                {/* The 3 electron orbital loops */}
                <g stroke="#61DAFB" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        )
    },

    {
        name: "Tailwind CSS",
        icon: (
            <svg className="w-3.5 h-3.5 fill-[#06B6D4]" role="img" viewBox="0 0 24 24">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
        )
    },
    {
        name: "Python",
        icon: (
            <svg className="w-3.5 h-3.5 fill-[#3776AB]" role="img" viewBox="0 0 24 24">
                <path d="M11.927 0C5.358 0 5.485 2.85 5.485 2.85l.006 2.954H12.01v.421H3.633S0 5.8 0 11.968c0 6.168 3.197 5.926 3.197 5.926h1.91v-2.68s-.036-3.222 3.167-3.222h5.698s3.04.053 3.04-2.943V4.285S17.067 0 11.927 0zm-3.3 1.884c.548 0 .99.443.99.99 0 .548-.442.99-.99.99a.993.993 0 0 1-.99-.99c0-.547.442-.99.99-.99zM20.367 6.11h-1.909v2.678s.035 3.223-3.167 3.223h-5.698s-3.04-.052-3.04 2.942v4.757s-.052 4.29 5.088 4.29c5.14 0 5.012-2.85 5.012-2.85l-.006-2.954H11.99v-.42h8.377s3.633.424 3.633-5.743c0-6.168-3.197-5.925-3.197-5.925zm-3.44 15.992c-.548 0-.99-.443-.99-.99 0-.547.442-.99.99-.99.547 0 .99.443.99.99 0 .547-.443.99-.99.99z" />
            </svg>
        )
    },
    {
        name: "Django",
        icon: (
            <span
                className="w-3.5 h-3.5 flex items-center justify-center select-none font-sans"
                style={{ minWidth: '14px', minHeight: '14px' }}
            >
                <span
                    className="text-[11px] font-extrabold italic text-[#092E20] leading-none tracking-tighter"
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif', paddingBottom: '1px' }}
                >
                    dj
                </span>
            </span>
        )
    },





    {
        name: "Git",
        icon: (
            <span
                className="w-3.5 h-3.5 flex items-center justify-center select-none font-sans"
                style={{ minWidth: '14px', minHeight: '14px' }}
            >
                <span
                    className="text-[9.5px] font-black text-[#F05032] leading-none tracking-tighter"
                    style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
                >
                    git
                </span>
            </span>
        )
    },

    {
        name: "VS Code",
        icon: (
            <svg className="w-3.5 h-3.5 fill-[#007ACC]" role="img" viewBox="0 0 24 24">
                <path d="M23.985 6.809a1.065 1.065 0 0 0-.473-.705L18.24 3.084a1.066 1.066 0 0 0-1.189.13L10.37 8.878l-4.73-3.57a1.064 1.064 0 0 0-1.173-.047L.53 7.822a1.066 1.066 0 0 0-.376 1.25L3.4 17.518l-3.24 8.441a1.066 1.066 0 0 0 .374 1.252l3.94 2.56a1.064 1.064 0 0 0 1.17-.046l4.73-3.57 6.68 5.664a1.066 1.066 0 0 0 1.19.13l5.27-3.02a1.065 1.065 0 0 0 .473-.704V7.457c0-.236-.08-.466-.232-.648zM18.15 17.72l-4.14-3.125 4.14-3.126v6.25z" />
            </svg>
        )
    },
];


export default function About() {
    return (

        <>
            <section
                id="about"
                className="relative overflow-hidden bg-[#020b18] px-5 py-14 text-white sm:px-8 lg:px-10"
            >

                <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[120px]" />

                <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">

                    <div>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                            Hi, I’m{" "}
                            <span className="text-blue-500">
                                Md Aboubockr
                            </span>
                        </h2>


                        <h3 className="mt-3 text-2xl font-semibold text-slate-200">
                            Full-Stack Web Developer
                        </h3>

                        <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-300">
                            I’m a passionate full-stack web developer, currently focused on
                            building modern, responsive, and user-friendly web applications.
                            I love turning ideas into real products and constantly learning
                            new technologies to improve my skills and create better solutions.
                        </p>

                        <div className="mt-7 grid max-w-xl grid-cols-3">

                            <div className="border-r border-slate-700 pr-3">
                                <h4 className="text-2xl font-bold text-cyan-400">
                                    1+
                                </h4>

                                <p className="mt-1 text-xs text-slate-300">
                                    Years of Learning
                                </p>
                            </div>

                            <div className="border-r border-slate-700 px-4">
                                <h4 className="text-2xl font-bold text-cyan-400">
                                    5+
                                </h4>

                                <p className="mt-1 text-xs text-slate-300">
                                    Projects Completed
                                </p>
                            </div>

                            <div className="pl-4">
                                <h4 className="text-2xl font-bold text-cyan-400">
                                    100%
                                </h4>

                                <p className="mt-1 text-xs text-slate-300">
                                    Passion for Coding
                                </p>
                            </div>

                        </div>

                        <div className="mt-7 flex items-center gap-7">

                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/40"
                            >
                                <span className="text-base">↓</span>
                                Download Resume
                            </a>

                            <a
                                href="#contact"
                                className="group relative py-2 text-sm font-medium text-cyan-400"
                            >
                                Contact Me

                                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>

                                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-cyan-400" />
                            </a>

                        </div>

                        <div className="mt-9">

                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-[2px] w-9 bg-cyan-400" />

                                <span className="text-xs font-medium tracking-[0.25em] text-cyan-400">
                                    MY TECH STACK
                                </span>
                            </div>

                            <div className="flex max-w-xl flex-wrap gap-2.5">

                                {skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-slate-950/60 px-3.5 py-2 text-xs text-slate-200 backdrop-blur-sm transition duration-300 hover:border-cyan-400/60 hover:bg-blue-500/10"
                                    >
                                        <span className="font-bold text-cyan-400">
                                            {skill.icon}
                                        </span>

                                        <span>
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>

                    <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:ml-auto">

                        <div className="absolute h-[330px] w-[330px] rounded-full bg-cyan-500/10 blur-[90px]" />


                        <div className="relative w-[300px] sm:w-[330px]">


                            <div className="absolute -left-4 -top-4 z-20 h-16 w-16 border-l-2 border-t-2 border-cyan-400" />

                            <div className="absolute -bottom-4 -right-4 z-20 h-16 w-16 border-b-2 border-r-2 border-blue-500" />

                            <div className="relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-[#07182b] p-2 shadow-2xl shadow-cyan-500/10">
                                <div className="relative overflow-hidden rounded-xl">

                                    <img
                                        src={portfolio}
                                        alt="Md Aboubockr"
                                        className="aspect-[4/5] w-full object-cover grayscale-[15%] transition duration-500 hover:scale-105 hover:grayscale-0"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020b18]/80 via-transparent to-transparent" />


                                    <div className="absolute bottom-5 left-5">
                                        <p className="text-xs font-medium tracking-[0.25em] text-cyan-400">
                                            DEVELOPER
                                        </p>

                                        <h3 className="mt-1 text-xl font-bold text-white">
                                            Md Aboubockr
                                        </h3>
                                    </div>

                                </div>
                            </div>

                            <div className="absolute -right-7 top-10 z-30 rounded-xl border border-cyan-400/30 bg-[#07182b]/95 px-4 py-3 shadow-xl backdrop-blur-md">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-lg text-cyan-400">
                                        &lt;/&gt;
                                    </div>

                                    <div>
                                        <p className="text-[9px] tracking-[0.18em] text-slate-400">
                                            SPECIALITY
                                        </p>

                                        <p className="text-xs font-semibold text-white">
                                            FULL-STACK
                                        </p>
                                    </div>

                                </div>
                            </div>


                            <div className="absolute -bottom-7 -left-8 z-30 w-52 rounded-xl border border-blue-400/30 bg-[#061426]/95 p-4 shadow-2xl backdrop-blur-md">

                                <div className="mb-3 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-red-400" />
                                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                                    <span className="h-2 w-2 rounded-full bg-green-400" />
                                </div>

                                <div className="font-mono text-[10px] leading-5">
                                    <p className="text-purple-400">
                                        const <span className="text-cyan-300">developer</span>
                                    </p>

                                    <p className="pl-3 text-slate-400">
                                        = {"{"}
                                    </p>

                                    <p className="pl-6">
                                        <span className="text-blue-400">name:</span>{" "}
                                        <span className="text-green-400">
                                            "Aboubockr"
                                        </span>
                                    </p>

                                    <p className="pl-6">
                                        <span className="text-blue-400">role:</span>{" "}
                                        <span className="text-green-400">
                                            "Full-Stack"
                                        </span>
                                    </p>

                                    <p className="pl-3 text-slate-400">
                                        {"}"}
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </>
    );
}