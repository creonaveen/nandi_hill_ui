import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  buttonText: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses just getting started with e-commerce.",
    features: [
      "Up to 100 products",
      "Basic analytics",
      "24/7 support",
      "Custom domain",
      "SSL certificate",
    ],
    buttonText: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$79",
    description: "Everything you need to grow your online business.",
    features: [
      "Unlimited products",
      "Advanced analytics",
      "Priority support",
      "Custom domain",
      "SSL certificate",
      "Multiple payment gateways",
      "Inventory management",
      "Order tracking",
    ],
    recommended: true,
    buttonText: "Get Started",
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "Advanced features for large-scale e-commerce operations.",
    features: [
      "Unlimited products",
      "Enterprise analytics",
      "Dedicated support",
      "Custom domain",
      "SSL certificate",
      "Multiple payment gateways",
      "Advanced inventory management",
      "Order tracking",
      "API access",
      "Custom integrations",
    ],
    buttonText: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <div className="py-24 sm:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Choose the right plan for your business
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Start with our free trial and upgrade anytime. All plans include a
          14-day money-back guarantee.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, planIdx) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                plan.recommended
                  ? "z-10 scale-105 shadow-xl ring-2 ring-primary"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {plan.name}
                  </h3>
                  {plan.recommended && (
                    <p className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                      Most Popular
                    </p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-6 w-5 flex-none text-primary"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                variant={plan.recommended ? "default" : "outline"}
                className="mt-8"
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 