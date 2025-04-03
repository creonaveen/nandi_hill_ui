
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "SellHub completely transformed my small handmade business. Within just 3 months, my sales increased by 200%. The platform is incredibly easy to use.",
    author: "Sarah Johnson",
    role: "Handmade Jewelry Shop",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    quote: "As someone with zero technical skills, I was amazed at how quickly I could set up my store. The customer support team is also incredibly responsive and helpful.",
    author: "Michael Rodriguez",
    role: "Vintage Clothing Store",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    quote: "The analytics tools have been game-changing for my business. I can now make informed decisions based on real data, which has helped me optimize my product offerings.",
    author: "Emily Chen",
    role: "Home Decor Business",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-seller-black mb-4">Loved by Sellers Worldwide</h2>
          <p className="text-lg text-seller-gray">
            Join thousands of successful entrepreneurs who have grown their business with SellHub.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-seller-light-purple rounded-2xl p-8 md:p-12 relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-white">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl md:text-2xl text-seller-black mb-6 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <h4 className="font-bold text-seller-black">{testimonials[currentIndex].author}</h4>
                <p className="text-seller-gray">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-seller-purple" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>

            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white shadow-md"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white shadow-md"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
