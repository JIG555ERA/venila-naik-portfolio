import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { FiInstagram, FiMoon, FiSun, FiYoutube } from "react-icons/fi";

function Layout({ children }) {
  const location = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const handleGlowMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--glow-x", `${x}%`);
    event.currentTarget.style.setProperty("--glow-y", `${y}%`);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
    });
    let id;
    const raf = (time) => {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="relative overflow-x-hidden pb-8">
      <div className="bg-scene pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="bg-orb left-[-12vw] top-[-18vh] h-[42vw] w-[42vw] bg-sky-300/35 dark:bg-sky-500/30" />
        <div
          className="bg-orb right-[-12vw] top-[6vh] h-[34vw] w-[34vw] bg-cyan-200/30 dark:bg-cyan-500/25"
          style={{ animationDelay: "-5.5s" }}
        />
        <div
          className="bg-orb bottom-[-22vh] left-[18vw] h-[38vw] w-[38vw] bg-orange-200/30 dark:bg-orange-400/24"
          style={{ animationDelay: "-3.2s" }}
        />
        <div className="bg-grid" />
      </div>
      <header className="page-shell pt-3 sm:pt-4">
        <div
          className="panel soft-card glow-hover flex flex-col gap-3 px-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:px-6"
          onMouseMove={handleGlowMove}
        >
          <Link to="/" className="font-display text-base font-bold tracking-tight sm:text-lg">
            it&apos;s me
          </Link>
          <nav className="flex w-full flex-wrap items-center gap-1.5 text-xs font-semibold sm:w-auto sm:gap-2 sm:text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-full px-2.5 py-1.5 transition duration-200 hover:bg-zinc-100/70 sm:px-3 dark:hover:bg-zinc-800/70 ${isActive ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `rounded-full px-2.5 py-1.5 transition duration-200 hover:bg-zinc-100/70 sm:px-3 dark:hover:bg-zinc-800/70 ${isActive ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : ""}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded-full px-2.5 py-1.5 transition duration-200 hover:bg-zinc-100/70 sm:px-3 dark:hover:bg-zinc-800/70 ${isActive ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `rounded-full px-2.5 py-1.5 transition duration-200 hover:bg-zinc-100/70 sm:px-3 dark:hover:bg-zinc-800/70 ${isActive ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : ""}`
              }
            >
              Contact
            </NavLink>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300/70 transition duration-300 hover:-translate-y-1 hover:bg-zinc-100/80 sm:ml-1 sm:h-9 sm:w-9 dark:border-zinc-700/80 dark:hover:bg-zinc-800/80"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
          </nav>
        </div>
      </header>

      <main className="page-shell">{children}</main>

      <footer className="page-shell mt-10 sm:mt-12">
        <div className="panel soft-card flex flex-col gap-4 px-4 py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-6">
          <div>
            <p className="font-display text-base font-bold">Venila Naik</p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Social media storytelling with a clean visual voice.
            </p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://www.instagram.com/venilanaik.23?igsh=M3ZidDZsaXAxdXYw"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300/70 transition duration-300 hover:-translate-y-1 hover:bg-zinc-100/80 dark:border-zinc-700/80 dark:hover:bg-zinc-800/80"
            >
              <FiInstagram />
            </a>
            <a
              href="https://youtu.be/lYvTn_EmCa8?si=a2zjyv_H7mUZQazv"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300/70 transition duration-300 hover:-translate-y-1 hover:bg-zinc-100/80 dark:border-zinc-700/80 dark:hover:bg-zinc-800/80"
            >
              <FiYoutube />
            </a>
            <p className="text-zinc-600 dark:text-zinc-400">
              (c) {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
