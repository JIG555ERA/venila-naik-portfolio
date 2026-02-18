import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import TiltCard from "../components/TiltCard.jsx";
import { projects, skills, stats, sampleWorks } from "../data/portfolioData.js";
import venila_naik from "../assets/venila_naik.jpg"

function HomePage() {
  const handleGlowMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--glow-x", `${x}%`);
    event.currentTarget.style.setProperty("--glow-y", `${y}%`);
  };

  useGSAP(() => {
    gsap.fromTo(
      ".hero-load",
      { opacity: 0, y: 38 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" },
    );
  });

  return (
    <div className="space-y-10 py-5 sm:space-y-12 sm:py-6">
      <section
        className="panel soft-card soft-card-lg glow-hover glow-hover-tight float-in grid gap-5 p-4 sm:gap-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]"
        onMouseMove={handleGlowMove}
      >
        <div className="space-y-4 sm:space-y-5">
          <p className="hero-load tag w-max">portfolio</p>
          <div className="hero-load">
            <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">Hello</p>
            <h1 className="font-display text-3xl font-extrabold leading-tight sm:text-6xl">
              I&apos;m Venila Naik
            </h1>
            <p className="mt-2 text-sm font-semibold text-zinc-600 sm:text-base dark:text-zinc-300">
              Social Media Manager and Mass Communication Student
            </p>
          </div>
          <p className="hero-load max-w-xl text-zinc-700 dark:text-zinc-300">
            Creating meaningful digital presence through content, reels, and visual storytelling.
          </p>
          <ul className="hero-load space-y-2 text-sm font-medium">
            <li className="flex items-center gap-2">
              <FiStar /> Social media execution and strategy
            </li>
            <li className="flex items-center gap-2">
              <FiStar /> Content writing with visual flow
            </li>
            <li className="flex items-center gap-2">
              <FiStar /> Creative storytelling and communication
            </li>
          </ul>
          <div className="hero-load flex flex-wrap gap-2.5 sm:gap-3">
            <Link to="/projects" className="btn-main text-xs sm:text-sm">
              View My Work <FiArrowUpRight />
            </Link>
            <Link to="/contact" className="btn-ghost text-xs sm:text-sm">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="hero-load panel soft-card group relative h-72 overflow-hidden sm:h-auto">
          <img
            src={venila_naik}
            alt="Sample portrait placeholder"
            className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
          />
          <div className="absolute right-3 bottom-3 rounded-full bg-black/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm sm:right-4 sm:bottom-4 sm:px-4 sm:py-2 sm:text-sm dark:bg-white dark:text-black">
            Venila
          </div>
        </div>
      </section>

      <section className="panel soft-card overflow-hidden">
        <div className="grid grid-cols-2 border-b border-zinc-300 dark:border-zinc-800 sm:grid-cols-4">
          {["Live Design", "App Design", "Development", "Media Flow"].map((item) => (
            <p
              key={item}
              className="border-r border-zinc-300 px-2 py-3 text-center text-[10px] font-bold tracking-wider uppercase sm:px-3 sm:text-xs last:border-r-0 dark:border-zinc-800"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="grid gap-0.5 bg-zinc-300 dark:bg-zinc-800 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/60 px-5 py-6 dark:bg-zinc-900/55">
              <p className="font-display text-2xl font-bold sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[10px] font-semibold tracking-wide uppercase text-zinc-600 sm:text-xs dark:text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Reveal className="space-y-4">
        <p className="tag">What I&apos;m Offering</p>
        <h2 className="section-title">Skills I&apos;m comfortable and confident working with.</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <TiltCard key={skill} className="panel soft-card lift-hover p-5">
              <p className="text-base font-semibold sm:text-lg">{skill}</p>
            </TiltCard>
          ))}
        </div>
      </Reveal>

      <Reveal className="space-y-4">
        <p className="tag">Experience</p>
        <h2 className="section-title">Projects and Practical Experience</h2>
        <div className="space-y-3">
          {projects.map((project, index) => (
            <TiltCard
              key={project.id}
              className="panel soft-card lift-hover grid gap-3 p-4 sm:gap-4 sm:grid-cols-[52px_1fr_auto] sm:p-5"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-zinc-950 text-sm font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
                {index + 1}
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-zinc-500 dark:text-zinc-400">
                  {project.period}
                </p>
                <h3 className="font-display text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{project.summary}</p>
              </div>
              <Link
                to="/projects"
                className="btn-ghost w-max justify-self-start self-start text-[10px] uppercase tracking-wider sm:text-xs"
              >
                Read More
              </Link>
            </TiltCard>
          ))}
        </div>
      </Reveal>

      <Reveal className="space-y-4">
        <p className="tag">Case Study</p>
        <h2 className="section-title">Selected Creative Frames</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {sampleWorks.map((work) => (
            <TiltCard key={work.title} className="panel soft-card lift-hover overflow-hidden">
              <img
                src={work.image}
                alt={`${work.title} sample`}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="space-y-2 p-4">
                <p className="tag w-max">Featured</p>
                <h3 className="font-display text-xl font-bold sm:text-2xl">{work.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  Placeholder sample image. Replace with your actual project visuals.
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </Reveal>

      <Reveal className="panel soft-card grid gap-4 p-5 sm:gap-5 sm:p-8 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="tag">Contact</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-5xl">
            Say Hi and tell me about your idea
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            Let&apos;s connect and collaborate for social media storytelling and visual content.
          </p>
        </div>
        <Link to="/contact" className="btn-main h-max self-start">
          Start a Project <FiArrowUpRight />
        </Link>
      </Reveal>
    </div>
  );
}

export default HomePage;
