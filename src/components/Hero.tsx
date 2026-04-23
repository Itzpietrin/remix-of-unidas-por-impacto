import heroImage from "@/assets/hero-women.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mulheres da Galáxia Academy sorrindo juntas"
          className="w-full h-full object-cover grayscale animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <div className="relative container mx-auto pb-20 md:pb-28 pt-32">
        <div className="max-w-4xl animate-fade-up">
          <p className="eyebrow text-cream/70 mb-6">Galáxia Academy · Blog</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] text-balance">
            Uma rede de mulheres que <em className="italic font-light">acende</em> outras mulheres.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-cream/85 max-w-2xl leading-relaxed">
            Formação, capacitação, autoestima e geração de renda — histórias e ações
            de impacto positivo a partir das periferias do Brasil.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#blog"
              className="inline-flex items-center text-sm font-medium px-7 py-3.5 rounded-full bg-cream text-ink hover:bg-cream/90 transition-colors"
            >
              Ler histórias
            </a>
            <a
              href="#manifesto"
              className="inline-flex items-center text-sm font-medium px-7 py-3.5 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition-colors"
            >
              Nosso manifesto
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-3 text-cream/60 text-xs uppercase tracking-widest">
        <span className="w-12 h-px bg-cream/40" />
        Edição 01 · 2026
      </div>
    </section>
  );
};

export default Hero;
