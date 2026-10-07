import { portfolio } from '../data/portfolio'

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-12">
        
        {/* Status */}
        <div className="mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-neutral-400">
          <span
            className="h-2 w-2 rounded-full shadow-[0_0_12px_var(--accent)]"
            style={{ backgroundColor: portfolio.theme.accent }}
          />
          {portfolio.availability}
        </div>

        {/* Main title */}
        <div className="max-w-5xl">
          <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[9rem]">
            {portfolio.hero.title.line1}
            <br />
            <span className="text-[var(--accent)]">{portfolio.hero.title.line2}</span>
            <br />
            {portfolio.hero.title.line3}
          </h1>
        </div>

        {/* Description + buttons */}
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          
          <p className="max-w-xl text-base leading-7 text-neutral-400 md:text-lg">
            {portfolio.hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={portfolio.hero.buttons.primaryLink}
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105"
            >
              {portfolio.hero.buttons.primary}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {portfolio.hero.buttons.arrow}
              </span>
            </a>

            <a
              href={portfolio.hero.buttons.secondaryLink}
              className="inline-flex items-center rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {portfolio.hero.buttons.secondary}
            </a>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-500 lg:left-12">
          <span className="h-10 w-px bg-neutral-700" />
          {portfolio.hero.scrollText}
        </div>
      </div>

      {/* Decorative circle */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[var(--accent)]/20" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full border border-[var(--accent)]/10" />
    </section>
  )
}

export default Hero