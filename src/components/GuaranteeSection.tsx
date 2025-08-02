import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-0 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-rounded text-gray-800 mb-4">
              Garantia de 7 dias
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 font-rounded leading-relaxed mb-8">
              Se não ficar satisfeito, devolvemos o seu dinheiro sem perguntas
            </p>

            {/* Ícones de segurança */}
            <div className="flex items-center justify-center gap-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-500" />
                <span className="text-sm font-rounded text-gray-600">Pagamento Seguro</span>
              </div>
              
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-rounded text-gray-600">SSL Protegido</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GuaranteeSection;