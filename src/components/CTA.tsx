import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Bem-vinda à galáxia ✨", {
      description: "Você receberá nossas próximas histórias em primeira mão.",
    });
    setEmail("");
  };

  return (
    <section id="construir" className="py-24 md:py-36 bg-gradient-warm text-cream relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow text-cream/70 mb-6">Construa com a gente</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Receba histórias de mulheres que estão <em className="italic font-light">reinventando</em> seus territórios.
            </h2>
            <p className="mt-6 text-lg text-cream/85 max-w-xl leading-relaxed">
              Newsletter mensal com bastidores da rede, oportunidades de parceria
              e ações para apoiar mulheres em comunidades periféricas.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="seu melhor e-mail"
                className="flex-1 bg-cream/10 border border-cream/30 placeholder:text-cream/60 text-cream px-5 py-3.5 rounded-full focus:outline-none focus:border-cream transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-cream text-ink font-medium px-7 py-3.5 rounded-full hover:bg-cream/90 transition-colors"
              >
                Assinar <ArrowRight size={16} />
              </button>
            </form>
          </div>

          <div className="md:col-span-5 md:pl-8">
            <div className="border-l-2 border-cream/30 pl-8 py-2">
              <p className="font-display italic text-2xl md:text-3xl leading-snug text-cream text-balance">
                "Buscamos parceiros, investidores sociais e marcas que acreditam
                na potência das mulheres periféricas como motor de transformação."
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-cream/80">
                <span className="w-8 h-px bg-cream/50" />
                @galaxia_academy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
