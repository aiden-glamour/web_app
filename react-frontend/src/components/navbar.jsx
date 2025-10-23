import { Home, Car, Star, Menu, ShoppingBag } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ onMenuClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    e.preventDefault();
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-cyan-400" : "text-slate-400 hover:text-cyan-400";
  };
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-0 left-0 w-screen bg-white shadow-md z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">AutoDrive</div>

          {/* Nav Links */}
          <div className="flex gap-8 text-gray-700 font-medium">
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#cars" className="hover:text-blue-600 transition">Cars</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>

          {/* Login/Signup Buttons */}
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
              Log In
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-gradient-to-r from-slate-900 to-slate-950 shadow-[0_-2px_10px_rgba(0,0,0,0.3)] z-50 backdrop-blur-lg bg-opacity-90">
        <div className="grid grid-cols-4 gap-1 px-4 py-4">
          <a 
            href="#home" 
            className="flex flex-col items-center text-cyan-400 active:scale-95 transform transition-all"
          >
            <Home size={20} strokeWidth={2.5} />
            <span className="text-[10px] font-medium mt-1">Home</span>
          </a>
          <a 
            href="#cars" 
            className="flex flex-col items-center text-slate-400 hover:text-cyan-400 active:scale-95 transform transition-all"
          >
            <Car size={20} strokeWidth={2.5} />
            <span className="text-[10px] font-medium mt-1">Cars</span>
          </a>
          <a 
            href="#testimonials"
            className="flex flex-col items-center text-slate-400 hover:text-cyan-400 active:scale-95 transform transition-all"
          >
            <Star size={20} strokeWidth={2.5} />
            <span className="text-[10px] font-medium mt-1">Reviews</span>
          </a>
          <button 
            onClick={handleMenuClick}
            className="flex flex-col items-center text-slate-400 hover:text-cyan-400 active:scale-95 transform transition-all"
          >
            <Menu size={20} strokeWidth={2.5} />
            <span className="text-[10px] font-medium mt-1">More</span>
          </button>
        </div>
      </nav>
    </>
  );
}