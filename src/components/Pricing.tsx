import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";

interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended: boolean;
  buttonText: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: 19,
    description: "Perfect for new sellers just getting started",
    features: [
      "Up to 100 products",
      "2.5% transaction fee",
      "Basic analytics",
      "Standard support",
      "Mobile optimization",
      "1 staff account"
    ],
    recommended: false,
    buttonText: "Start with Starter"
  },
  {
    name: "Professional",
    price: 49,
    description: "For growing businesses ready to scale",
    features: [
      "Up to 1,000 products",
      "1.5% transaction fee",
      "Advanced analytics",
      "Priority support",
      "Mobile optimization",
      "5 staff accounts",
      "Abandoned cart recovery",
      "Gift cards"
    ],
    recommended: true,
    buttonText: "Start with Professional"
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For established businesses with high volume",
    features: [
      "Unlimited products",
      "0.5% transaction fee",
      "Advanced analytics with insights",
      "24/7 premium support",
      "Mobile optimization",
      "Unlimited staff accounts",
      "Abandoned cart recovery",
      "Gift cards",
      "Custom reports",
      "API access"
    ],
    recommended: false,
    buttonText: "Start with Enterprise"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-seller-black mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-seller-gray">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 border ${
                plan.recommended 
                  ? "border-seller-purple shadow-lg relative" 
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-seller-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-seller-black mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-seller-black">${plan.price}</span>
                <span className="text-seller-gray">/month</span>
              </div>
              <p className="text-seller-gray mb-6">{plan.description}</p>
              <Button 
                className={`w-full mb-8 ${
                  plan.recommended 
                    ? "bg-seller-purple hover:bg-seller-dark-purple text-white" 
                    : "bg-seller-light-purple text-seller-purple hover:bg-seller-light-purple/80"
                }`}
              >
                {plan.buttonText}
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-seller-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-seller-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
