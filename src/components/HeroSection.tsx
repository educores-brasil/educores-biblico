import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { useState, useEffect } from "react";
import heroBook1 from "@/assets/hero.png";
import heroBook2 from "@/assets/hero1.png";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroBook1, heroBook2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const section = document.getElementById("ofertas")
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-gradient-hero min-h-screen relative overflow-hidden">
      {/* Padrão de fundo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 pt-8 relative z-10">
        {/* Header de segurança */}
        <div className="flex items-center justify-center gap-2 mb-8 bg-white/20 backdrop-blur-sm rounded-full py-2 px-4 max-w-fit mx-auto">
          <Lock className="w-4 h-4 text-white flex-shrink-0" />
          <span className="text-white text-xs sm:text-sm font-medium text-center">
            Compra 100% segura e protegida
          </span>
        </div>

        {/* Conteúdo principal */}
        <div className="flex flex-col lg:flex-row items-center gap-12 py-12">
          {/* Card com flip */}
          <div className="flex-1 max-w-md mx-auto lg:mx-0">
            <div className="relative" style={{ perspective: '1000px' }}>
              <div 
                className="relative bg-white rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: currentImage === 0 ? 'rotateY(0deg) rotate(3deg)' : 'rotateY(180deg) rotate(3deg)'
                }}
              >
                {/* Primeira imagem */}
                <div 
                  className="w-full"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)'
                  }}
                >
                  <img 
                    src={images[0]} 
                    alt="Livro para Colorir Cristão - Arca de Noé" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                {/* Segunda imagem */}
                <div 
                  className="absolute inset-0 w-full p-6"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <img 
                    src={images[1]} 
                    alt="Livro para Colorir Cristão - Jesus com Crianças" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <div className="absolute -top-2 -right-2 bg-accent-orange text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12 z-10">
                  PDF
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo textual */}
          <div className="flex-1 text-center lg:text-left text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-rounded mb-6 leading-tight">
              30 Livros de Colorir{" "}
              <span className="text-accent-orange">Cristãos</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 font-rounded opacity-90">
              Transforme momentos especiais com sua família, célula e escola dominical
            </p>

            {/* Tags de categorias */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-8">
              <Button variant="tag" size="tag" className="bg-white/20 text-white hover:bg-white/30 text-xs sm:text-sm">
                📘 Células
              </Button>
              <Button variant="tag" size="tag" className="bg-white/20 text-white hover:bg-white/30 text-xs sm:text-sm">
                🏫 Escola Dominical
              </Button>
              <Button variant="tag" size="tag" className="bg-white/20 text-white hover:bg-white/30 text-xs sm:text-sm">
                💚 Devocional Familiar
              </Button>
              <Button variant="tag" size="tag" className="bg-white/20 text-white hover:bg-white/30 text-xs sm:text-sm">
                📚 Pedagogia
              </Button>
            </div>

            {/* CTA principal */}
            <Button variant="cta" size="lg" className="animate-pulse w-full sm:w-auto" onClick={handleScroll}>
              🎯 QUERO VER AS OFERTAS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;