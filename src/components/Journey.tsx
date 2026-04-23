const pillars = [
  {
    n: "01",
    title: "Educação Empreendedora",
    desc: "Estruturação do negócio, proposta de valor e modelos de receita para tirar a ideia do papel.",
  },
  {
    n: "02",
    title: "Capacitação em Vendas",
    desc: "Técnicas de venda, negociação, marketing e relacionamento real com clientes.",
  },
  {
    n: "03",
    title: "Gestão e Finanças",
    desc: "Fluxo de caixa, precificação justa e educação financeira pessoal e do negócio.",
  },
  {
    n: "04",
    title: "Autoestima e Autonomia",
    desc: "Fortalecimento emocional, liderança feminina, redes de apoio e iniciação esportiva.",
  },
];

const Journey = () => {
  return (
    <section id="jornada" className="py-24 md:py-36 bg-ink text-cream">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="eyebrow text-cream/60 mb-6">A jornada</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Quatro pilares para uma <em className="italic font-light text-clay">transformação</em> que dura.
          </h2>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-px bg-cream/10 border border-cream/10">
          {pillars.map((p) => (
            <div
              key={p.n}
              className="bg-ink p-10 md:p-14 group hover:bg-terracotta-deep transition-colors duration-500"
            >
              <div className="flex items-baseline gap-6 mb-6">
                <span className="font-display text-5xl text-clay group-hover:text-cream transition-colors">
                  {p.n}
                </span>
                <span className="h-px flex-1 bg-cream/20" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 text-cream">
                {p.title}
              </h3>
              <p className="text-cream/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
