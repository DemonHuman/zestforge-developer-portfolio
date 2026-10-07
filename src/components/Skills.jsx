import { portfolio } from '../data/portfolio'

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-t border-neutral-900 bg-black px-6 py-32 text-white lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.2em] text-[var(--accent)]">
            02
          </span>

          <span className="h-px w-12 bg-neutral-800" />

          <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            {portfolio.skillsLabel}
          </span>
        </div>

        {/* Title */}
        <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl">
          {portfolio.skillsTitle.line1}{" "}
          <span className="text-[var(--accent)]">{portfolio.skillsTitle.line2}</span>
        </h2>

        {/* Skills */}
        <div className="mt-20 grid grid-cols-2 border-l border-t border-neutral-900 sm:grid-cols-3 lg:grid-cols-4">
          {portfolio.skills.map((skill) => (
            <div
              key={skill}
              className="group border-b border-r border-neutral-900 p-6 transition-all duration-300 hover:bg-[var(--accent)]/10"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-neutral-300 transition-colors duration-300 group-hover:text-white">
                  {skill}
                </span>

                <span className="text-neutral-700 transition-colors duration-300 group-hover:text-[var(--accent)]">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills