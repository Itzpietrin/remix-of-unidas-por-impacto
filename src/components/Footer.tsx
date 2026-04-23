import { Instagram } from "lucide-react";

const cities = [
  { name: "São Paulo", status: "em operação" },
  { name: "Salvador", status: "em expansão" },
  { name: "Rio de Janeiro", status: "em expansão" },
  { name: "Recife", status: "em expansão" },
];

const Footer = () => {
  return (
    <footer className="bg-ink text-cream pt-20 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-cream/15">
          <div className="md:col-span-5">
            <p className="font-display text-3xl mb-4">
              galáxia<span className="italic font-light">.</span>
            </p>
            <p className="text-cream/70 max-w-sm leading-relaxed">
              Um ecossistema de formação e geração de renda para mulheres em
              situação de vulnerabilidade social e financeira.
            </p>
            <a
              href="https://instagram.com/galaxia_academy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm hover:text-clay transition-colors"
            >
              <Instagram size={18} /> @galaxia_academy
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-cream/50 mb-5">Navegar</p>
            <ul className="space-y-3 text-sm">
              <li><a href="#manifesto" className="hover:text-clay transition-colors">Manifesto</a></li>
              <li><a href="#jornada" className="hover:text-clay transition-colors">A jornada</a></li>
              <li><a href="#blog" className="hover:text-clay transition-colors">Histórias</a></li>
              <li><a href="#impacto" className="hover:text-clay transition-colors">Impacto</a></li>
              <li><a href="#construir" className="hover:text-clay transition-colors">Parcerias</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-cream/50 mb-5">Onde estamos</p>
            <ul className="space-y-3 text-sm">
              {cities.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-4">
                  <span>{c.name}</span>
                  <span className="text-cream/50 italic font-display text-xs">
                    {c.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Galáxia Academy. Feito por e para mulheres.</p>
          <p className="font-display italic">Lute como uma mulher.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
