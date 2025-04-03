import {
  ShoppingBag,
  BarChart3,
  CreditCard,
  Settings,
  Users,
  Lock,
} from "lucide-react";

const features = [
  {
    name: "Easy Store Setup",
    description:
      "Get your online store up and running in minutes with our intuitive setup process.",
    icon: ShoppingBag,
  },
  {
    name: "Analytics Dashboard",
    description:
      "Track your sales, customer behavior, and business growth with detailed analytics.",
    icon: BarChart3,
  },
  {
    name: "Secure Payments",
    description:
      "Accept payments securely from customers worldwide with multiple payment options.",
    icon: CreditCard,
  },
  {
    name: "Customization Options",
    description:
      "Customize your store's appearance and functionality to match your brand.",
    icon: Settings,
  },
  {
    name: "Customer Management",
    description:
      "Manage your customers, orders, and support requests from a single dashboard.",
    icon: Users,
  },
  {
    name: "Advanced Security",
    description:
      "Keep your store and customer data secure with enterprise-grade security features.",
    icon: Lock,
  },
];

export default function Features() {
  return (
    <div className="py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Everything You Need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Powerful Features for Your Online Store
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Build and grow your online business with our comprehensive set of
            features designed to help you succeed in e-commerce.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 