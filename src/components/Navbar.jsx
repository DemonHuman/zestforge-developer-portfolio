import { useState } from 'react'
import { portfolio } from '../data/portfolio'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-black uppercase tracking-[-0.05em] text-white transition-colors duration-300 hover:text-[var(--accent)]"
        >
          {portfolio.brand}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {portfolio.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-wider text-neutral-400 transition-colors duration-300 hover:text-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={
            menuOpen ? portfolio.mobileMenu.close : portfolio.mobileMenu.open
          }
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-white transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
        >
          <span className="text-lg">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>

        {menuOpen && (
          <div className="absolute left-6 right-6 top-20 rounded-2xl border border-neutral-800 bg-neutral-950 p-6 md:hidden">
            <div className="flex flex-col gap-5">
              {portfolio.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-wider text-neutral-400 transition-colors duration-300 hover:text-[var(--accent)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
        </nav>
    </header>
  )
}

export default Navbar