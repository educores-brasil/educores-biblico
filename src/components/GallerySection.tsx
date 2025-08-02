import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";
import adaoEva from "@/assets/covers/adao_eva.png"
import adaoEva1 from "@/assets/covers/adao_eva_1.png"
import novaJerusalem from "@/assets/covers/nova_jerusalem.png"
import novaJerusalem1 from "@/assets/covers/nova_jerusalem_1.png"
import jesusJardim from "@/assets/covers/jesus_no_jardim.png"
import jesusJardim1 from "@/assets/covers/jesus_no_jardim_1.png"
import ultimaCeia from "@/assets/covers/ultima_ceia.png"
import ultimaCeia1 from "@/assets/covers/ultima_ceia_1.png"
import sansaoCabelos from "@/assets/covers/sansao_cabelos.png"
import sansaoCabelos1 from "@/assets/covers/sansao_cabelos_1.png"
import ruteCoragem from "@/assets/covers/rute_coragem.png"
import ruteCoragem1 from "@/assets/covers/rute_coragem_1.png"
import raabeJerico from "@/assets/covers/raabe_muralhas.png"
import raabeJerico1 from "@/assets/covers/raabe_muralhas_1.png"
import ovelhaPerdida from "@/assets/covers/ovelha_perdida.png"
import ovelhaPerdida1 from "@/assets/covers/ovelha_perdida_1.png"
import jesusMultiplica from "@/assets/covers/jesus_alimentos.png"
import jesusMultiplica1 from "@/assets/covers/jesus_alimentos_1.png"
import cegoVer from "@/assets/covers/cego_voltou_a_ver.png"
import cegoVer1 from "@/assets/covers/cego_voltou_a_ver_1.png"
import mulherJesus from "@/assets/covers/mulher_tocou_jesus.png"
import mulherJesus1 from "@/assets/covers/mulher_tocou_jesus_1.png"
import eliasFogo from "@/assets/covers/elias_fogo_ceu.png"
import eliasFogo1 from "@/assets/covers/elias_fogo_ceu_1.png"
import jesusAguas from "@/assets/covers/jesus_aguas.png"
import jesusAguas1 from "@/assets/covers/jesus_aguas_1.png"
import dezMandamentos from "@/assets/covers/dez_mandamentos.png"
import dezMandamentos1 from "@/assets/covers/dez_mandamentos_1.png"
import filhoProdigo from "@/assets/covers/filho_prodigo.png"
import filhoProdigo1 from "@/assets/covers/filho_prodigo_1.png"
import abraaoEstrelas from "@/assets/covers/abraao_estrelas_ceu.png"
import abraaoEstrelas1 from "@/assets/covers/abraao_estrelas_ceu_1.png"
import jesusCriancas from "@/assets/covers/jesus_criancas.png"
import jesusCriancas1 from "@/assets/covers/jesus_criancas.png"
import bomSamaritano from "@/assets/covers/bom_samaritano.png"
import bomSamaritano1 from "@/assets/covers/bom_samaritano_1.png"
import jesusBelem from "@/assets/covers/jesus_belem.png"
import jesusBelem1 from "@/assets/covers/jesus_belem_1.png"
import JesusTempestade from "@/assets/covers/jesus_acalma_tempestade.png"
import JesusTempestade1 from "@/assets/covers/jesus_acalma_tempestade_1.png"
import pascoaCrista from "@/assets/covers/pascoa_crista.png"
import pascoaCrista1 from "@/assets/covers/pascoa_crista_1.png"
import joseCasaco from "@/assets/covers/jose_casaco_colorido.png"
import joseCasaco1 from "@/assets/covers/jose_casaco_colorido_1.png"
import torreBabel from "@/assets/covers/torre_babel.png"
import torreBabel1 from "@/assets/covers/torre_babel_1.png"
import criacaoMundo from "@/assets/covers/criacao_mundo.png"
import criacaoMundo1 from "@/assets/covers/criacao_mundo_1.png"
import marVermelho from "@/assets/covers/moises_mar_vermelho.png"
import marVermelho1 from "@/assets/covers/moises_mar_vermelho_1.png"
import danielLeoes from "@/assets/covers/daniel_cova_leoes.png"
import danielLeoes1 from "@/assets/covers/daniel_cova_leoes_1.png"
import jesusPaezinhos from "@/assets/covers/jesus_paezinhos_peixinhos.png"
import jesusPaezinhos1 from "@/assets/covers/jesus_paezinhos_peixinhos_1.png"
import arcaNoe from "@/assets/covers/arca_noe.png"
import arcaNoe1 from "@/assets/covers/arca_noe_1.png"
import jonasPeixe from "@/assets/covers/jonas_grande_peixe.png"
import jonasPeixe1 from "@/assets/covers/jonas_grande_peixe_1.png"
import daviGolias from "@/assets/covers/davi_golias.webp"
import daviGolias1 from "@/assets/covers/davi_golias_1.png"

const books = [
  { id: 1, title: "Adão e Eva no Jardim do Éden", images: [adaoEva, adaoEva1] },
  {
    id: 2,
    title: "A Nova Jerusalém – Um Céu para as Crianças",
    images: [novaJerusalem, novaJerusalem1]
  },
  {
    id: 3,
    title: "Jesus no Jardim – A História da Oração",
    images: [jesusJardim, jesusJardim1]
  },
  { id: 4, title: "A Última Ceia", images: [ultimaCeia, ultimaCeia1] },
  { id: 5, title: "Sansão e a Força dos Cabelos", images: [sansaoCabelos, sansaoCabelos1] },
  {
    id: 6,
    title: "Rute – Uma História de Amor e Coragem",
    images: [ruteCoragem, ruteCoragem1],
  },
  { id: 7, title: "Raabe e as Muralhas de Jericó", images: [raabeJerico, raabeJerico1] },
  { id: 8, title: "A Ovelha Perdida", images: [ovelhaPerdida, ovelhaPerdida1] },
  { id: 9, title: "Jesus Multiplica os Alimentos", images: [jesusMultiplica, jesusMultiplica1] },
  { id: 10, title: "O Cego que Voltou a Ver", images: [cegoVer, cegoVer1] },
  { id: 11, title: "A Mulher que Tocou em Jesus", images: [mulherJesus, mulherJesus1] },
  { id: 12, title: "Elias e o Fogo do Céu", images: [eliasFogo, eliasFogo1] },
  { id: 13, title: "Jesus Caminha Sobre as Águas", images: [jesusAguas, jesusAguas1] },
  { id: 14, title: "Os Dez Mandamentos de Moisés", images: [dezMandamentos, dezMandamentos1] },
  {
    id: 15,
    title: "O Filho Pródigo – Um Coração que Volta",
    images: [filhoProdigo, filhoProdigo1]
  },
  { id: 16, title: "Abraão e as Estrelas do Céu", images: [abraaoEstrelas, abraaoEstrelas1] },
  { id: 17, title: "Jesus e as Crianças", images: [jesusCriancas, jesusCriancas1] },
  { id: 18, title: "O Bom Samaritano", images: [bomSamaritano, bomSamaritano1] },
  { id: 19, title: "Jesus Nasce em Belém", images: [jesusBelem, jesusBelem1] },
  { id: 20, title: "Jesus Acalma a Tempestade", images: [JesusTempestade, JesusTempestade1] },
  {
    id: 21,
    title: "A Páscoa Cristã – A Ressurreição de Jesus",
    images: [pascoaCrista, pascoaCrista1]
  },
  { id: 22, title: "José e o Casaco Colorido", images: [joseCasaco, joseCasaco1] },
  { id: 23, title: "A Torre de Babel", images: [torreBabel, torreBabel1] },
  { id: 24, title: "A Criação do Mundo – Os Sete Dias", images: [criacaoMundo, criacaoMundo1] },
  { id: 25, title: "Moisés e a Abertura do Mar Vermelho", images: [marVermelho, marVermelho1] },
  { id: 26, title: "Daniel na Cova dos Leões", images: [danielLeoes, danielLeoes1] },
  { id: 27, title: "Jesus e os Pãezinhos e Peixinhos", images: [jesusPaezinhos, jesusPaezinhos1] },
  {
    id: 28,
    title: "A Arca de Noé e os Animais do Dilúvio",
    images: [arcaNoe, arcaNoe1]
  },
  { id: 29, title: "Jonas e o Grande Peixe", images: [jonasPeixe, jonasPeixe1] },
  {
    id: 30,
    title: "Davi e Golias – O Pequeno Gigante de Fé",
    images: [daviGolias, daviGolias1]
  },
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, books.length - itemsPerView);

  // Usar useEffect para detectar resize
  React.useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto scroll
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Volta para o início
        }
        return prev + 1;
      });
    }, 2000); // Muda a cada 3 segundos

    return () => clearInterval(timer);
  }, [maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleScroll = () => {
    const section = document.getElementById("ofertas")
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-rounded text-gray-800 mb-4">
            Conheça Nossos Livros de Colorir
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-rounded">
            Livros únicos para momentos de fé e relaxamento
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {books.map((book) => (
                <div key={book.id} className="w-full md:w-1/3 flex-shrink-0 px-2 sm:px-3">
                  <FlippingBookCard book={book} />
                </div>
              ))}
            </div>
          </div>

          {/* Controles do carrossel */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" className="w-full sm:w-auto" onClick={handleScroll}>
            🎯 QUERO VER AS OFERTAS
          </Button>
        </div>
      </div>
    </section>
  );
};

// Componente para o card com flip
const FlippingBookCard = ({ book }: { book: typeof books[0] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % book.images.length);
    }, 1000); // Troca a cada 1 segundo

    return () => clearInterval(interval);
  }, [book.images.length]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center p-4">
        <div 
          className="w-full h-full relative bg-white rounded-lg shadow-md overflow-hidden transform group-hover:scale-105 transition-transform"
          style={{ perspective: '1000px' }}
        >
          <div 
            className="w-full h-full relative transition-all duration-500"
            style={{
              transformStyle: 'preserve-3d',
              transform: currentImageIndex === 0 ? 'rotateY(0deg)' : 'rotateY(180deg)'
            }}
          >
            {/* Primeira imagem */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(0deg)'
              }}
            >
              <img 
                src={book.images[0]} 
                alt={`${book.title} - Página 1`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Segunda imagem */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <img 
                src={book.images[1]} 
                alt={`${book.title} - Página 2`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold font-rounded text-center text-gray-800">
          {book.title}
        </h3>
      </div>
    </div>
  );
};

export default GallerySection;