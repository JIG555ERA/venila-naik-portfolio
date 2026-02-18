import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import TiltCard from "../components/TiltCard.jsx";
import { projects } from "../data/portfolioData.js";

function ProjectsPage() {
  return (
    <div className="space-y-6 py-5 sm:space-y-8 sm:py-6">
      <Reveal className="panel soft-card soft-card-lg float-in p-5 sm:p-8">
        <p className="tag">Projects Page</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">
          Projects and Practical Experience
        </h1>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
          Dedicated project showcase with role details, responsibilities, tools used, and visual
          placeholders.
        </p>
      </Reveal>

      <div className="grid gap-5">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <TiltCard className="panel soft-card lift-hover grid gap-4 overflow-hidden lg:grid-cols-[1.1fr_1fr]">
              <div className="group relative h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} placeholder`}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 lg:h-full lg:min-h-full"
                />
                <div className="absolute top-4 left-4 tag border-white bg-black/60 text-white">
                  Sample image
                </div>
              </div>
              <div className="space-y-3 p-5 sm:p-7">
                <p className="tag w-max">{project.period}</p>
                <h2 className="font-display text-2xl font-bold sm:text-3xl">{project.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-300">{project.summary}</p>
                <div>
                  <p className="mb-2 text-xs font-bold tracking-wide uppercase">Role and responsibilities</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                    {project.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold tracking-wide uppercase">Tools Used</p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">{project.tools.join(" | ")}</p>
                </div>
                <Link to={`/projects/${project.id}`} className="btn-main w-full justify-center text-xs sm:w-max sm:text-sm">
                  View Detail <FiArrowUpRight />
                </Link>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
