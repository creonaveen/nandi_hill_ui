import React from "react";
import { ShoppingCart, BarChart, CreditCard, Globe, Smartphone, Users } from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featureItems: FeatureItem[] = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-seller-purple" />,
    title: "Easy Store Setup",
    description: "Create your online store in minutes with our intuitive drag-and-drop builder. No coding required."
  },
  {
    icon: <Globe className="h-8 w-8 text-seller-purple" />,
    title: "Sell Everywhere",
    description: "Reach customers wherever they shop with built-in marketplace integrations and social selling tools."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-seller-purple" />,
    title: "Secure Payments",
    description: "Accept payments from customers worldwide with 50+ payment methods and automatic fraud protection."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-seller-purple" />,
    title: "Mobile Optimization",
    description: "Deliver a seamless shopping experience across all devices with mobile-responsive designs."
  },
  {
    icon: <BarChart className="h-8 w-8 text-seller-purple" />,
    title: "Detailed Analytics",
    description: "Make data-driven decisions with comprehensive sales reports and customer insights."
  },
  {
    icon: <Users className="h-8 w-8 text-seller-purple" />,
    title: "Marketing Tools",
    description: "Grow your customer base with built-in SEO, email marketing, and social media integration."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-seller-black mb-4">Everything You Need to Sell Online</h2>
          <p className="text-lg text-seller-gray">
            Our all-in-one platform gives you everything you need to create, manage, and grow your online business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-seller-black mb-3">{feature.title}</h3>
              <p className="text-seller-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
