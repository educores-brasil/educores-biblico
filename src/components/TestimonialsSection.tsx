import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonial1 from "@/assets/testimonial_1.png";
import testimonial2 from "@/assets/testimonial_2.png";
import testimonial3 from "@/assets/testimonial_3.png";
import testimonial4 from "@/assets/testimonial_4.png";

const testimonials = [
  {
    id: 1,
    image: testimonial1,
    alt: "Depoimento da Maria Santos"
  },
  {
    id: 2,
    image: testimonial2,
    alt: "Depoimento do João Silva"
  },
  {
    id: 3,
    image: testimonial3,
    alt: "Depoimento da Ana Costa"
  },
  {
    id: 4,
    image: testimonial4,
    alt: "Depoimento do Carlos Oliveira"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-rounded text-white mb-4">
            O que nossos clientes dizem
          </h2>
          
          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold text-lg ml-2">4.8/5</span>
            <span className="text-gray-300 ml-2">812 avaliações</span>
          </div>
        </div>

        {/* Carrossel de depoimentos */}
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white hover:text-primary" />
            <CarouselNext className="text-white hover:text-primary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;