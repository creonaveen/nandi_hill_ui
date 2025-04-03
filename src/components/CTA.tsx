import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-seller-purple rounded-2xl py-16 px-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),rgba(255,255,255,0)_70%)]"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Selling Online?</h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of successful sellers who have transformed their business with SellHub. Start your 14-day free trial today, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-seller-purple hover:bg-gray-100">
                Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
