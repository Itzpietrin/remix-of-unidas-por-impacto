import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Journey from "@/components/Journey";
import Blog from "@/components/Blog";
import Impact from "@/components/Impact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Journey />
        <Blog />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
