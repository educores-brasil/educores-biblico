import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: "📘",
    title: "Células e Grupos",
    description: "Atividades interativas para engajar crianças durante reuniões.",
    color: "bg-blue-50"
  },
  {
    icon: "🏫", 
    title: "Escola Dominical",
    description: "Material complementar para aulas memoráveis.",
    color: "bg-green-50"
  },
  {
    icon: "💚",
    title: "Devocional Familiar", 
    description: "Momentos especiais de conexão com Deus em família.",
    color: "bg-red-50"
  },
  {
    icon: "📚",
    title: "Uso Pedagógico",
    description: "Ferramenta educativa que desenvolve coordenação e criatividade.",
    color: "bg-yellow-50"
  }
];

const BenefitsSection = () => {
  const handleScroll = () => {
    const section = document.getElementById("ofertas")
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className={`${benefit.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="font-bold font-rounded text-lg mb-3 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-rounded text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
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

export default BenefitsSection;