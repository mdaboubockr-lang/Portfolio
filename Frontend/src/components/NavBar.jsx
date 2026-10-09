export default function NavSection() {
    return (
        <>
            <nav className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/90 backdrop-blur-md">
                <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">

                    <a href="#home" className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-black tracking-tighter text-white">
                            MA
                        </div>


                        <div className="hidden sm:block">
                            <h1 className="text-lg font-bold leading-tight text-white">
                                Md <span className="text-blue-400">Aboubockr</span>
                            </h1>

                            <p className="text-[10px] tracking-[0.18em] text-slate-400">
                                FULL-STACK WEB DEVELOPER
                            </p>
                        </div>
                    </a>


                    <div className="hidden items-center gap-8 md:flex">

                        <a
                            href="#home"
                            className="relative py-2 text-sm font-medium text-blue-400
        after:absolute after:bottom-0 after:left-0 after:h-0.5
        after:w-full after:bg-blue-400"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            className="py-2 text-sm font-medium text-slate-300
        transition-colors duration-200 hover:text-blue-400"
                        >
                            About
                        </a>

                        <a
                            href="#projects"
                            className="py-2 text-sm font-medium text-slate-300
        transition-colors duration-200 hover:text-blue-400"
                        >
                            Projects
                        </a>

                        <a
                            href="#blog"
                            className="py-2 text-sm font-medium text-slate-300
        transition-colors duration-200 hover:text-blue-400"
                        >
                            Blog
                        </a>
                    </div>

                    <div className="flex items-center gap-4">


                        <a
                            href="#contact"
                            className="hidden rounded-lg bg-blue-500 px-5 py-2.5
        text-sm font-semibold text-white transition-all duration-200
        hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20
        sm:inline-flex"
                        >
                            Work With Me
                            <span className="ml-2">→</span>
                        </a>

                        <button
                            className="rounded-lg p-2 text-slate-300
        transition hover:bg-slate-800 hover:text-white md:hidden"
                            aria-label="Open menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                    </div>
                </div>
            </nav>
        </>
    )
}