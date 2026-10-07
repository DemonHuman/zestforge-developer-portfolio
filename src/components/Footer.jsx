import { portfolio } from '../data/portfolio'

const Footer = () => {
  return (
    <footer className="border-t border-neutral-900 bg-black px-6 py-10 text-white lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-black uppercase tracking-[-0.05em] transition-colors duration-300 hover:text-[var(--accent)]"
        >
          {portfolio.brand}
        </a>

        {/* Copyright */}
        <p className="text-sm text-neutral-600">
          © {portfolio.year} {portfolio.brand}. {portfolio.footer.rights}
        </p>

        {/* Back to top */}
        <a
          href="#"
          className="text-sm uppercase tracking-[0.15em] text-neutral-500 transition-colors duration-300 hover:text-[var(--accent)]"
        >
          {portfolio.footer.backToTop} ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer