import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavSection() {
    const location = useLocation();
    const navLinksRef = useRef(null);
    const linkRefs = useRef({});
    const previousPathname = useRef(location.pathname);
    const [selectedLink, setSelectedLink] = useState(() => getActiveLink(location.pathname, location.hash));
    const [isAtPageBottom, setIsAtPageBottom] = useState(false);
    const activeLink = location.pathname === "/projects"
        ? isAtPageBottom ? "contact" : "projects"
        : location.pathname === "/" ? selectedLink : getActiveLink(location.pathname, location.hash);
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const syncActiveLink = () => {
            setSelectedLink(getActiveLink(window.location.pathname, window.location.hash));
        };

        syncActiveLink();
        window.addEventListener("popstate", syncActiveLink);
        window.addEventListener("hashchange", syncActiveLink);
        return () => {
            window.removeEventListener("popstate", syncActiveLink);
            window.removeEventListener("hashchange", syncActiveLink);
        };
    }, []);

    useEffect(() => {
        const updatePagePosition = () => {
            const isAtBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 24;
            setIsAtPageBottom((previous) => previous === isAtBottom ? previous : isAtBottom);
        };

        updatePagePosition();
        const animationFrame = window.requestAnimationFrame(updatePagePosition);
        window.addEventListener("scroll", updatePagePosition, { passive: true });
        window.addEventListener("resize", updatePagePosition);
        return () => {
            window.cancelAnimationFrame(animationFrame);
            window.removeEventListener("scroll", updatePagePosition);
            window.removeEventListener("resize", updatePagePosition);
        };
    }, [location.pathname]);

    useLayoutEffect(() => {
        if (previousPathname.current !== location.pathname) {
            previousPathname.current = location.pathname;
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);

    useLayoutEffect(() => {
        const updateIndicator = () => {
            const activeElement = linkRefs.current[activeLink];
            const navElement = navLinksRef.current;

            if (!activeElement || !navElement) {
                return;
            }

            const linkBounds = activeElement.getBoundingClientRect();
            const navBounds = navElement.getBoundingClientRect();
            setIndicator({
                left: linkBounds.left - navBounds.left,
                width: linkBounds.width,
            });
        };

        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [activeLink]);

    const setActive = (link) => () => setSelectedLink(link);

    return (
        <>
            <nav className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/90 backdrop-blur-md">
                <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">

                    <Link
                        to="/"
                        onClick={setActive("home")}
                        aria-label="Md Aboubockr home"
                        className="flex items-center gap-4"
                    >
                        <div
                            aria-hidden="true"
                            className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-cyan-300/25 bg-slate-900 shadow-lg shadow-blue-500/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-cyan-400/25"
                        >
                            <span className="absolute inset-0 bg-gradient-to-br from-blue-500/35 via-blue-500/5 to-cyan-400/25" />
                            <span className="relative -ml-0.5 text-lg font-black tracking-[-0.12em] text-white">
                                M<span className="text-cyan-300">A</span>
                            </span>
                            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]" />
                        </div>

                        <div className="hidden sm:block">
                            <h1 className="text-lg font-bold leading-tight text-white">
                                Md <span className="text-blue-400">Aboubockr</span>
                            </h1>

                            <p className="text-[10px] tracking-[0.18em] text-slate-400">
                                FULL-STACK WEB DEVELOPER
                            </p>
                        </div>
                    </Link>

                    <div ref={navLinksRef} className="relative hidden items-center gap-8 md:flex">
                        <span
                            aria-hidden="true"
                            className="absolute bottom-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out"
                            style={{ left: indicator.left, width: indicator.width }}
                        />
                        <Link
                            ref={(element) => { linkRefs.current.home = element; }}
                            to="/"
                            onClick={setActive("home")}
                            className={`py-2 text-sm font-medium transition-colors duration-200 ${activeLink === "home" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"}`}
                        >
                            Home
                        </Link>

                        <Link
                            ref={(element) => { linkRefs.current.about = element; }}
                            to="/about"
                            onClick={setActive("about")}
                            className={`py-2 text-sm font-medium transition-colors duration-200 ${activeLink === "about" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"}`}
                        >
                            About
                        </Link>

                        <Link
                            ref={(element) => { linkRefs.current.projects = element; }}
                            to="/projects"
                            onClick={setActive("projects")}
                            className={`py-2 text-sm font-medium transition-colors duration-200 ${activeLink === "projects" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"}`}
                        >
                            Projects
                        </Link>

                        <a
                            ref={(element) => { linkRefs.current.contact = element; }}
                            href="#contact"
                            onClick={setActive("contact")}
                            className={`py-2 text-sm font-medium transition-colors duration-200 ${activeLink === "contact" ? "text-blue-400" : "text-slate-300 hover:text-blue-400"}`}
                        >
                            Contact
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="#contact"
                            onClick={setActive("contact")}
                            className="hidden rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 sm:inline-flex"
                        >
                            Work With Me
                            <span className="ml-2">→</span>
                        </a>

                        <button
                            className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white md:hidden"
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

function getActiveLink(pathname, hash) {
    if (pathname === "/about") {
        return "about";
    }
    if (pathname === "/projects") {
        return "projects";
    }
    if (hash === "#projects") {
        return "projects";
    }
    if (hash === "#contact") {
        return "contact";
    }
    return "home";
}