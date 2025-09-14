import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";

const PricingSection = () => {
  const today = new Date();

  return (
    <section className="py-20 bg-background" id="ofertas">
      <div className="container mx-auto px-4">
        {/* Header da oferta */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full mb-4 animate-pulse">
            <Clock className="w-4 h-4" />
            <span className="font-bold text-sm">
              OFERTA LIMITADA - Apenas no dia {today.getDate()}/{String(today.getMonth() + 1).padStart(2, '0')}/{today.getFullYear()}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-rounded text-gray-800 mb-4">
            Escolha Sua Oferta Especial
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-rounded">
            Livros de qualidade profissional para enriquecer seus momentos de fé
          </p>
        </div>

        {/* Cards de preços */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Pacote Básico */}
          <Card className="border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-t-lg px-4 py-6">
              <div className="text-4xl mb-2">📗</div>
              <h3 className="text-xl sm:text-2xl font-bold font-rounded text-gray-800">
                Pacote Básico
              </h3>

              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-base sm:text-lg text-gray-500 line-through">
                  R$ 47,00
                </span>
                <span className="text-3xl sm:text-4xl font-bold text-gray-800">
                  R$ 10,00
                </span>
              </div>

              <div className="bg-green-500 text-white rounded-full px-3 py-1 text-sm font-bold">
                Economize: R$ 37,00
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <ul className="space-y-3 mb-6">
                {[
                  "30 Livros de Colorir em PDF",
                  "Temas Bíblicos Variados",
                  "Acesso Vitalício",
                  "Suporte por WhatsApp",
                  "Garantia de 7 dias",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-rounded text-gray-700">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="https://seguro.educores.com.br/r/5OJI5NN4FV" target="_blank" rel="noopener noreferrer" className="bg-secondary text-center grid justify-center items-center text-secondary-foreground hover:bg-secondary/90 shadow-lg hover:shadow-xl text-base font-bold w-full sm:text-sm h-14 rounded-lg lg:text-lg">
                🛒 QUERO O PACOTE BÁSICO
              </a>
            </CardContent>
          </Card>

          {/* Pacote Premium */}
          <Card className="border-2 border-yellow-400 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative">
            {/* Selo de mais vendido */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                🔥 MAIS VENDIDO
              </div>
            </div>

            <CardHeader className="text-center bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-t-lg pt-8 px-4 py-6">
              <div className="text-4xl mb-2">🟨</div>
              <h3 className="text-xl sm:text-2xl font-bold font-rounded text-gray-800">
                Pacote Premium
              </h3>

              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-base sm:text-lg text-gray-500 line-through">
                  R$ 259,00
                </span>
                <span className="text-3xl sm:text-4xl font-bold text-gray-800">
                  R$ 17,00
                </span>
              </div>

              <div className="bg-yellow-500 text-gray-800 rounded-full px-3 py-1 text-sm font-bold">
                Economize: R$ 242,00
              </div>
            </CardHeader>

            <CardContent className="p-6 w-full">
              <div className="text-sm text-gray-600 font-rounded mb-4 text-center">
                Tudo do Pacote Básico +
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  { text: "30 Livros de Colorir em PDF", isBonus: false },
                  { text: "Temas Bíblicos Variados", isBonus: false },
                  { text: "Acesso Vitalício", isBonus: false },
                  { text: "Suporte por WhatsApp", isBonus: false },
                  { text: "Garantia de 7 dias", isBonus: false },
                  { text: "🎁 BÔNUS 1: Novos lançamentos", isBonus: true },
                  {
                    text: "🎁 BÔNUS 2: Vídeos de Histórias Bíblicas",
                    isBonus: true,
                  },
                  {
                    text: "🎁 BÔNUS 3: Alfabeto Ilustrado",
                    isBonus: true,
                  },
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        benefit.isBonus ? "text-yellow-500" : "text-green-500"
                      }`}
                    />
                    <span
                      className={`font-rounded ${
                        benefit.isBonus
                          ? "text-yellow-700 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="w-full my-4">
              <a href="https://seguro.educores.com.br/r/1RJODPP4U1" target="_blank" rel="noopener noreferrer" className="bg-accent-yellow justify-center items-center grid text-center text-accent-yellow-foreground hover:bg-accent-yellow/90 shadow-lg hover:shadow-xl text-base font-bold w-full sm:text-sm h-14 rounded-lg lg:text-lg">
                ⭐ QUERO O PACOTE PREMIUM
              </a>

              </div>


              <div className="text-center mt-3 text-sm text-gray-600 font-rounded">
                +500 pessoas já escolheram este pacote
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;