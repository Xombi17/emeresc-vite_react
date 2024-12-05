import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

interface NavbarProps {
  onAuthClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onAuthClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">EMERESC</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/sos" className="text-gray-600 hover:text-red-500 transition-colors">
              Emergency SOS
            </Link>
            <Link to="/hospitals" className="text-gray-600 hover:text-red-500 transition-colors">
              Hospitals
            </Link>
            <Link to="/calculator" className="text-gray-600 hover:text-red-500 transition-colors">
              Cost Calculator
            </Link>
            <Link to="/schemes" className="text-gray-600 hover:text-red-500 transition-colors">
              Government Schemes
            </Link>
            <button 
              onClick={onAuthClick}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/sos"
              className="block px-3 py-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              Emergency SOS
            </Link>
            <Link
              to="/hospitals"
              className="block px-3 py-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              Hospitals
            </Link>
            <Link
              to="/calculator"
              className="block px-3 py-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              Cost Calculator
            </Link>
            <Link
              to="/schemes"
              className="block px-3 py-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              Government Schemes
            </Link>
            <button 
              onClick={onAuthClick}
              className="w-full text-left px-3 py-2 text-red-500 hover:text-red-600 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};