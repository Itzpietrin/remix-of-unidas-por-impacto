import womanWriting from "@/assets/woman-writing.jpg";

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-24 md:py-36 bg-cream">
      <div className="container mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-soft">
            <img
              src={womanWriting}
              alt="Mulher escrevendo em um caderno"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-7 order-1 md:order-2 md:pl-8">
          <p className="eyebrow mb-6">Manifesto</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
            O território como ponto de <em className="italic font-light">partida</em>.
          </h2>

          <div className="mt-8 space-y-5 text-lg text-foreground/80 leading-relaxed max-w-xl">
            <p>
              No Brasil, milhões de mulheres em comunidades periféricas possuem
              habilidades, ambição e força — mas carecem de acesso a formação,
              crédito e redes de oportunidade.
            </p>
            <p className="text-ink font-medium">
              O ciclo da vulnerabilidade se perpetua não por falta de capacidade,
              mas por falta de estrutura. Nós existimos para mudar isso.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="w-16 h-px bg-terracotta" />
            <span className="font-display italic text-lg text-terracotta">
              Galáxia Academy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
