import { portfolio } from '../data/portfolio'

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-t border-neutral-900 bg-black px-6 py-32 text-white lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.2em] text-[var(--accent)]">
            03
          </span>

          <span className="h-px w-12 bg-neutral-800" />

          <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            {portfolio.projectsLabel}
          </span>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl">
            {portfolio.projectsTitle.line1}{" "}
            <span className="text-[var(--accent)]">{portfolio.projectsTitle.line2}</span>
          </h2>

          <p className="max-w-md text-base leading-7 text-neutral-500">
            A selection of projects showcasing creativity, development and
            attention to detail.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-20">
          {portfolio.projects.map((project) => (
            <a
              key={project.number}
              href={project.link}
              className="group grid gap-8 border-t border-neutral-900 py-10 transition-all duration-300 hover:px-4 lg:grid-cols-[100px_1fr_auto] lg:items-center"
            >
              {/* Number */}
              <span className="text-sm text-neutral-600">
                {project.number}
              </span>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-500">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-neutral-800 px-3 py-1 text-xs uppercase tracking-wider text-neutral-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <span className="text-3xl text-neutral-700 transition-all duration-300 group-hover:translate-x-2 group-hover:text-[var(--accent)]">
                ↗
              </span>
            </a>
          ))}

          <div className="border-t border-neutral-900" />
        </div>
      </div>
    </section>
  )
}

export default Projects