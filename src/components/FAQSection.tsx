import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como recebo os livros?",
    answer: "Após a confirmação do pagamento, você receberá um email com o link para download de todos os livros em formato PDF. O acesso é imediato e você poderá baixar quantas vezes quiser."
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer: "Sim! Você pode imprimir todos os livros quantas vezes desejar. São seus para sempre. Recomendamos papel sulfite A4 para melhor qualidade."
  },
  {
    question: "Qual a faixa etária recomendada?",
    answer: "Os livros são ideais para crianças de 3 a 12 anos. As ilustrações são adaptadas para diferentes níveis de coordenação motora, desde traços mais simples até desenhos mais detalhados."
  },
  {
    question: "Como funciona o bônus mensal?",
    answer: "No Pacote Premium, você receberá novos livros e materiais todo mês por email. São histórias exclusivas, atividades extras e conteúdos especiais que não estão disponíveis em nenhum outro lugar."
  }
];

const FAQSection = () => {
  const handleScroll = () => {
    const section = document.getElementById("ofertas")
    section?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-rounded text-gray-800 mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-bold font-rounded text-gray-800 hover:no-underline hover:bg-gray-50 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 font-rounded leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" className="w-full max-w-md mx-auto text-sm sm:text-base" onClick={handleScroll}>
            ❓ TIRE MINHAS DÚVIDAS, QUERO COMPRAR
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;