import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to start selling online?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join thousands of successful businesses using SellHub to power their
            online stores. Get started today with our 14-day free trial.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 