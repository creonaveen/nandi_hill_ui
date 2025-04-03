import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-seller-black mb-6 leading-tight">
              Turn Your Products Into a 
              <span className="text-seller-purple"> Thriving Online Business</span>
            </h1>
            <p className="text-lg text-seller-gray mb-8 max-w-lg">
              Create your online store in minutes. No coding required. Get everything you need to sell everywhere and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-seller-purple hover:bg-seller-dark-purple text-white">
                Start Selling <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-200">
                View Demo Store
              </Button>
            </div>
            <div className="mt-8 text-sm text-seller-gray">
              <p>Over 10,000+ sellers already growing their business</p>
              <div className="flex items-center mt-4 space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-seller-light-purple border-2 border-white flex items-center justify-center">
                      <span className="text-seller-purple text-xs font-medium">S{i}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-seller-gray">4.9/5 from 2,000+ reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-seller-light-purple rounded-lg animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-seller-light-purple rounded-lg animate-float" style={{ animationDelay: "2s" }}></div>
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Seller Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
