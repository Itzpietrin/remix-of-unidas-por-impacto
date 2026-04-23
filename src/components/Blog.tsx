import toteBag from "@/assets/tote-bag.jpg";
import community from "@/assets/community.jpg";
import womanWriting from "@/assets/woman-writing.jpg";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    category: "Histórias",
    date: "12 Mar 2026",
    title: "De Paraisópolis para o mundo: a jornada de 300 mulheres",
    excerpt:
      "Como a primeira turma da Galáxia transformou conhecimento em renda real para suas famílias.",
    image: community,
    readTime: "6 min",
  },
  {
    category: "Ecossistema",
    date: "28 Fev 2026",
    title: "Marcas parceiras: pontes entre território e mercado",
    excerpt:
      "A rede de empresas que enxerga as periferias como motor de inovação econômica e social.",
    image: toteBag,
    readTime: "4 min",
  },
  {
    category: "Autoestima",
    date: "15 Fev 2026",
    title: "O caderno antes do CNPJ: por que escutar vem primeiro",
    excerpt:
      "Fortalecimento emocional, liderança e a coragem de começar — por dentro do nosso quarto pilar.",
    image: womanWriting,
    readTime: "5 min",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 md:py-36 bg-sand">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Diário da rede</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
              Histórias que <em className="italic font-light text-terracotta">acendem</em>.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-terracotta transition-colors"
          >
            Ver todas as edições <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Featured post */}
        <article className="grid md:grid-cols-12 gap-8 mb-20 group cursor-pointer">
          <div className="md:col-span-7 relative aspect-[4/3] md:aspect-[16/11] overflow-hidden rounded-sm">
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground mb-5">
              <span className="text-terracotta font-medium">{posts[0].category}</span>
              <span className="w-8 h-px bg-ink/20" />
              <span>{posts[0].date}</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.1] mb-5 text-balance group-hover:text-terracotta transition-colors">
              {posts[0].title}
            </h3>
            <p className="text-base md:text-lg text-foreground/75 leading-relaxed mb-6">
              {posts[0].excerpt}
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-ink">
              Ler artigo <ArrowUpRight size={16} />
              <span className="ml-auto text-muted-foreground text-xs">
                {posts[0].readTime} de leitura
              </span>
            </div>
          </div>
        </article>

        {/* Secondary posts */}
        <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-ink/15">
          {posts.slice(1).map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground mb-4">
                <span className="text-terracotta font-medium">{p.category}</span>
                <span className="w-6 h-px bg-ink/20" />
                <span>{p.date}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-ink leading-[1.15] mb-3 text-balance group-hover:text-terracotta transition-colors">
                {p.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed mb-4">{p.excerpt}</p>
              <div className="flex items-center gap-2 text-sm font-medium text-ink">
                Ler artigo <ArrowUpRight size={16} />
                <span className="ml-auto text-muted-foreground text-xs">
                  {p.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
