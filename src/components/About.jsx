import { portfolio } from '../data/portfolio'

const About = () => {
  return (
    <section
      id="about"
      className="border-t border-neutral-900 bg-black px-6 py-32 text-white lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.2em] text-[var(--accent)]">
            01
          </span>

          <span className="h-px w-12 bg-neutral-800" />

          <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            About
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="max-w-5xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl">
              {portfolio.about.title}
            </h2>
          </div>

          <div className="max-w-lg">
            <p className="text-base leading-8 text-neutral-400 md:text-lg">
              {portfolio.about.description}
            </p>

            <p className="mt-6 text-base leading-8 text-neutral-500">
              {portfolio.about.secondaryDescription}
            </p>
          </div>
        </div>

        {/* Quick information */}
        <div className="mt-24 grid border-y border-neutral-900 sm:grid-cols-3">
          <div className="border-b border-neutral-900 py-8 sm:border-b-0 sm:border-r sm:pr-8">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
              {portfolio.about.locationLabel}
            </span>

            <p className="mt-3 text-lg font-medium text-white">
              {portfolio.location}
            </p>
          </div>

          <div className="border-b border-neutral-900 py-8 sm:border-b-0 sm:px-8 sm:border-r">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
              {portfolio.about.focusLabel}
            </span>

            <p className="mt-3 text-lg font-medium text-white">
              {portfolio.about.focus}
            </p>
          </div>

          <div className="py-8 sm:pl-8">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
              {portfolio.about.availabilityLabel}
            </span>

            <p className="mt-3 flex items-center gap-3 text-lg font-medium text-white">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: portfolio.theme.accent }}
              />
              {portfolio.availability}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About