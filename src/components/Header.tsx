import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Jornada", href: "#jornada" },
  { label: "Histórias", href: "#blog" },
  { label: "Impacto", href: "#impacto" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-6">
        <Link to="/" className="font-display text-2xl tracking-tight text-cream">
          galáxia<span className="italic font-light">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-cream/85 hover:text-cream transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#construir"
          className="hidden md:inline-flex items-center text-sm font-medium px-5 py-2.5 rounded-full bg-cream text-ink hover:bg-cream/90 transition-colors"
        >
          Construa com a gente
        </a>

        <button
          aria-label="Menu"
          className="md:hidden text-cream"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ink/95 backdrop-blur">
          <nav className="container mx-auto flex flex-col py-6 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-cream py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#construir"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center text-sm font-medium px-5 py-3 rounded-full bg-cream text-ink"
            >
              Construa com a gente
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
