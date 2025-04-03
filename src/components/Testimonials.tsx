import Image from "next/image";

const testimonials = [
  {
    content:
      "SellHub has transformed my small business. The platform is incredibly easy to use, and their support team is always there when I need help.",
    author: {
      name: "Sarah Johnson",
      role: "Boutique Owner",
      image: "/testimonials/sarah.jpg",
    },
  },
  {
    content:
      "Since switching to SellHub, our online sales have increased by 200%. The analytics tools help us make better business decisions every day.",
    author: {
      name: "Michael Chen",
      role: "E-commerce Manager",
      image: "/testimonials/michael.jpg",
    },
  },
  {
    content:
      "The customization options are fantastic. We were able to create a unique store that perfectly represents our brand identity.",
    author: {
      name: "Emma Davis",
      role: "Creative Director",
      image: "/testimonials/emma.jpg",
    },
  },
];

export default function Testimonials() {
  return (
    <div className="py-24 sm:py-32" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Businesses Worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <div
                key={testimonialIdx}
                className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-900/5 sm:p-10"
              >
                <div>
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-lg leading-7 text-gray-600">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author.name}
                  </div>
                  <div className="mt-1 text-gray-500">
                    {testimonial.author.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 