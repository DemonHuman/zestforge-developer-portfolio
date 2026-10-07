import { portfolio } from '../data/portfolio'

const Services = () => {
  return (
    <section
      id="services"
      className="border-t border-neutral-900 bg-black px-6 py-32 text-white lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.2em] text-[var(--accent)]">
            05
          </span>

          <span className="h-px w-12 bg-neutral-800" />

          <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            {portfolio.servicesLabel}
          </span>
        </div>

        {/* Title */}
        <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl">
          {portfolio.servicesTitle.line1}{" "}
          <span className="text-[var(--accent)]">{portfolio.servicesTitle.line2}</span>
        </h2>

        {/* Services */}
        <div className="mt-20">
          {portfolio.services.map((service) => (
            <div
              key={service.number}
              className="group grid gap-6 border-t border-neutral-900 py-10 transition-all duration-300 lg:grid-cols-[100px_1fr_1fr] lg:items-start"
            >
              <span className="text-sm text-neutral-600">
                {service.number}
              </span>

              <h3 className="text-2xl font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-3xl">
                {service.title}
              </h3>

              <p className="max-w-md text-base leading-7 text-neutral-500">
                {service.description}
              </p>
            </div>
          ))}

          <div className="border-t border-neutral-900" />
        </div>
      </div>
    </section>
  )
}

export default Services