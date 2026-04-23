import collage from "@/assets/collage.jpg";

const stats = [
  { value: "+300", label: "mulheres impactadas diretamente" },
  { value: "1.200", label: "pessoas alcançadas indiretamente" },
  { value: "12.348", label: "favelas no Brasil — nosso campo" },
  { value: "R$ 167bi", label: "potencial de consumo nas comunidades" },
];

const Impact = () => {
  return (
    <section id="impacto" className="py-24 md:py-36 bg-cream">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">Impacto</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
              Números que viram <em className="italic font-light text-terracotta">histórias</em>.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg text-foreground/75 leading-relaxed">
              Desde nossa fundação em Paraisópolis, São Paulo, construímos uma
              rede que se expande para Salvador, Rio de Janeiro e Recife.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-ink/15">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-b border-r border-ink/15 last:border-r-0 md:[&:nth-child(4)]:border-r-0 p-6 md:p-10"
            >
              <div className="font-display text-4xl md:text-6xl text-ink mb-3">
                {s.value}
              </div>
              <p className="text-sm text-muted-foreground leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative aspect-[21/9] overflow-hidden rounded-sm">
          <img
            src={collage}
            alt="Colagem de mulheres da rede Galáxia em ações de impacto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <p className="font-display italic text-2xl md:text-4xl text-cream max-w-2xl text-balance">
              "Lute como uma mulher."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
