import { portfolio } from '../data/portfolio'

const Experience = () => {
  return (
    <section
      id="experience"
      className="border-t border-neutral-900 bg-black px-6 py-32 text-white lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.2em] text-[var(--accent)]">
            04
          </span>

          <span className="h-px w-12 bg-neutral-800" />

          <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            {portfolio.experienceLabel}
          </span>
        </div>

        {/* Title */}
        <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl">
          {portfolio.experienceTitle.line1}{" "}
          <span className="text-[var(--accent)]">{portfolio.experienceTitle.line2}</span>
        </h2>

        {/* Experience list */}
        <div className="mt-20">
          {portfolio.experience.map((experience) => (
            <div
              key={`${experience.period}-${experience.role}`}
              className="grid gap-6 border-t border-neutral-900 py-10 lg:grid-cols-[180px_1fr]"
            >
              {/* Period */}
              <span className="text-sm uppercase tracking-wider text-neutral-600">
                {experience.period}
              </span>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                  {experience.role}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-wider text-[var(--accent)]">
                  {experience.company}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-500">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}

          <div className="border-t border-neutral-900" />
        </div>
      </div>
    </section>
  )
}

export default Experience