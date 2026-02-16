// Header.tsx
import PoultryLogo from '../../assets/images/logo.jpg';
import cart_icon from '../../assets/images/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function Header() {
  const { totalItems } = useCart();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={PoultryLogo} 
              alt="Poultry Farm Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full"
            />
            <div className="font-bold text-xl sm:text-2xl text-amber-800 leading-tight">
              POULTRY
              <br />
              <span className="text-lg sm:text-xl">FARMS</span>
            </div>
          </Link>

          {/* Desktop Navigation – no dropdowns, just top-level links */}
          <nav className="hidden lg:flex items-center gap-10 text-gray-700 font-medium">
            <Link to="/" className="hover:text-amber-700 transition-colors">
              Shop
            </Link>
            <Link to="/meat" className="hover:text-amber-700 transition-colors">
              Meat
            </Link>
            <Link to="/tools" className="hover:text-amber-700 transition-colors">
              Tools
            </Link>
            <Link to="/eggs" className="hover:text-amber-700 transition-colors">
              Eggs
            </Link>
          </nav>

          {/* Right side: Auth + Cart */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/login" className="text-gray-700 hover:text-amber-800 font-medium">
              Login
            </Link>
            <Link 
              to="/register"
              className="bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              Sign up
            </Link>

            <Link to="/cart" className="relative text-gray-700 hover:text-amber-800">
              <img src={cart_icon} alt="Cart" className="h-7 w-7" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Menu – keeps the grouped sub-items */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-6 space-y-5">
            <Link 
              to="/shop" 
              className="block text-gray-800 font-medium hover:text-amber-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>

            <div className="pl-4 border-l-2 border-amber-200">
              <p className="font-medium text-gray-800 mb-2">Meat</p>
              <Link 
                to="/meat" 
                className="block py-1.5 text-gray-600 hover:text-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Meat
              </Link>
              <Link 
                to="/meat?sub=fresh" 
                className="block py-1.5 text-gray-600 hover:text-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fresh meat
              </Link>
              <Link 
                to="/meat?sub=live" 
                className="block py-1.5 text-gray-600 hover:text-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Live chicken
              </Link>
              <Link 
                to="/meat?sub=cooked" 
                className="block py-1.5 text-gray-600 hover:text-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cooked meat
              </Link>
            </div>

            <div className="pl-4 border-l-2 border-amber-200">
              <p className="font-medium text-gray-800 mb-2">Tools</p>
              <Link 
                to="/tools" 
                className="block py-1.5 text-gray-600 hover:text-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Tools
              </Link>
              <Link 
                to="/tools?sub=feeding" 
                className="block py-1.5 text-gray-600 hover:text-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Feeding tools
              </Link>
              <Link 
                to="/tools?sub=watering" 
                className="block py-1.5 text-gray-600 hover:text-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Watering tools
              </Link>
              <Link 
                to="/tools?sub=breeding" 
                className="block py-1.5 text-gray-600 hover:text-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Breeding tools
              </Link>
            </div>

            <div className="pl-4 border-l-2 border-amber-200">
              <p className="font-medium text-gray-800 mb-2">Eggs</p>
              <Link 
                to="/eggs" 
                className="block py-1.5 text-gray-600 hover:text-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Eggs
              </Link>
              <Link 
                to="/eggs?sub=fresh" 
                className="block py-1.5 text-gray-600 hover:text-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fresh Eggs
              </Link>
              <Link 
                to="/eggs?sub=product" 
                className="block py-1.5 text-gray-600 hover:text-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Product of Egg
              </Link>
            </div>

            <div className="pt-6 border-t flex flex-col gap-4">
              <Link 
                to="/login" 
                className="text-center py-3 bg-gray-100 rounded-lg hover:bg-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="text-center py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign up
              </Link>
              
              <Link 
                to="/cart" 
                className="flex items-center justify-center gap-3 text-gray-800 font-medium hover:text-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img src={cart_icon} alt="Cart" className="h-6 w-6" />
                Cart
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">1</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}