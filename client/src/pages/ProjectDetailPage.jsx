import { Link, Navigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiCalendar, FiLayers, FiTarget } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import { projects } from "../data/portfolioData.js";

function ProjectDetailPage() {
  const { projectId } = useParams();
  const projectIndex = projects.findIndex((item) => item.id === projectId);

  if (projectIndex === -1) {
    return <Navigate to="/projects" replace />;
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="space-y-6 py-5 sm:space-y-8 sm:py-6">
      <Reveal className="panel soft-card soft-card-lg float-in overflow-hidden">
        <div className="grid gap-5 p-5 sm:p-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <Link to="/projects" className="btn-ghost w-max text-xs sm:text-sm">
              <FiArrowLeft /> Back to Projects
            </Link>
            <p className="tag w-max">{project.period}</p>
            <h1 className="font-display text-3xl font-extrabold sm:text-5xl">{project.title}</h1>
            <p className="text-zinc-700 dark:text-zinc-300">{project.summary}</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="panel soft-card p-3">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                  <FiLayers /> Client
                </p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{project.client}</p>
              </div>
              <div className="panel soft-card p-3">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                  <FiCalendar /> Duration
                </p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{project.duration}</p>
              </div>
              <div className="panel soft-card p-3">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                  <FiTarget /> Focus
                </p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Strategy + Visuals</p>
              </div>
            </div>
          </div>

          <div className="panel soft-card overflow-hidden justify-center items-center flex">
            {project.videoEmbedUrl ? (
              <iframe
                src={project.videoEmbedUrl}
                title={`${project.title} video`}
                className="w-full sm:h-100"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <img
                src={project.image}
                alt={`${project.title} hero`}
                className="h-72 w-full object-cover sm:h-80"
              />
            )}
          </div>
        </div>
      </Reveal>

      <Reveal className="grid gap-5 lg:grid-cols-2">
        <div className="panel soft-card p-5 sm:p-7">
          <p className="tag w-max">Objective</p>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">{project.objective}</p>
          <p className="mt-4 text-sm font-bold uppercase tracking-wide">Challenge</p>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">{project.challenge}</p>
        </div>
        <div className="panel soft-card p-5 sm:p-7">
          <p className="tag w-max">Tools Used</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="panel soft-card p-5 sm:p-7">
        <p className="tag w-max">Execution Flow</p>
        <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-4xl">How the project moved</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {project.approach.map((step, index) => (
            <div key={step} className="panel soft-card p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Step {index + 1}
              </p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{step}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="panel soft-card p-5 sm:p-7">
        <p className="tag w-max">Visual Gallery</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {project.gallery.map((media, index) => {
            const isVideo = typeof media === "string" && /\.(mp4|webm|ogg)(\?.*)?$/i.test(media);

            return (
              <div key={`${media}-${index}`} className="group panel soft-card overflow-hidden">
                {isVideo ? (
                  <video
                    src={media}
                    className="h-72 w-full object-cover"
                    controls
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={media}
                    alt={`${project.title} visual ${index + 1}`}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal className="panel soft-card p-5 sm:p-7">
        <p className="tag w-max">Outcomes</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
          {project.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link to={`/projects/${nextProject.id}`} className="btn-main mt-5 w-max text-xs sm:text-sm">
          Next Project <FiArrowRight />
        </Link>
      </Reveal>
    </div>
  );
}

export default ProjectDetailPage;
