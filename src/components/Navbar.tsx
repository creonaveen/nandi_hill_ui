import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-seller-purple flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-xl text-seller-black">SellHub</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-gray-600 hover:text-seller-purple transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-seller-purple transition-colors">
            Pricing
          </Link>
          <Link href="/testimonials" className="text-gray-600 hover:text-seller-purple transition-colors">
            Testimonials
          </Link>
          <Link href="/resources" className="text-gray-600 hover:text-seller-purple transition-colors">
            Resources
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-gray-200">
            Log in
          </Button>
          <Button className="bg-seller-purple hover:bg-seller-dark-purple text-white">
            Start Selling
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/features" className="text-gray-600 hover:text-seller-purple transition-colors py-2">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-seller-purple transition-colors py-2">
                Pricing
              </Link>
              <Link href="/testimonials" className="text-gray-600 hover:text-seller-purple transition-colors py-2">
                Testimonials
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-seller-purple transition-colors py-2">
                Resources
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="outline" className="w-full justify-center border-gray-200">
                  Log in
                </Button>
                <Button className="w-full justify-center bg-seller-purple hover:bg-seller-dark-purple text-white">
                  Start Selling
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
