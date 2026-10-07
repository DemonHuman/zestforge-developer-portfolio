import { portfolio } from '../data/portfolio'

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-neutral-900 bg-black px-6 py-32 text-white lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.2em] text-[var(--accent)]">
            06
          </span>

          <span className="h-px w-12 bg-neutral-800" />

          <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            {portfolio.contactLabel}
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
              {portfolio.contactTitle.line1}{" "}
              <span className="text-[var(--accent)]">{portfolio.contactTitle.line2}</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-neutral-500 md:text-lg">
              {portfolio.contact.description}
            </p>
          </div>

          {/* Contact information */}
          <div className="flex flex-col justify-end">
            <a
              href={`mailto:${portfolio.email}`}
              className="group border-t border-neutral-900 py-6"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                {portfolio.contact.emailLabel}
              </span>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-lg text-neutral-300 transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {portfolio.email}
                </span>

                <span className="text-xl text-neutral-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                  ↗
                </span>
              </div>
            </a>

            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noreferrer"
              className="group border-t border-neutral-900 py-6"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                {portfolio.contact.githubLabel}
              </span>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-lg text-neutral-300 transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {portfolio.social.github.replace("https://", "")}
                </span>

                <span className="text-xl text-neutral-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                  ↗
                </span>
              </div>
            </a>

            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group border-y border-neutral-900 py-6"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                {portfolio.contact.linkedinLabel}
              </span>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-lg text-neutral-300 transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {portfolio.social.linkedin.replace("https://", "")}
                </span>

                <span className="text-xl text-neutral-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                  ↗
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact