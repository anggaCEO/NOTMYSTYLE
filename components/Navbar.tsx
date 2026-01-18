
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <button 
            className="lg:hidden text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <a href="#" className="text-2xl font-black tracking-tighter uppercase italic">
            not my style
          </a>
          <div className="hidden lg:flex gap-6 text-sm font-medium tracking-widest uppercase text-white/60">
            <a href="#collection" className="hover:text-white transition-colors">Collection</a>
            <a href="#lookbook" className="hover:text-white transition-colors">Lookbook</a>
            <a href="#stylist" className="hover:text-white transition-colors">AI Stylist</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-white/70 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="relative text-white">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 lg:hidden transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-3xl font-black uppercase tracking-tighter">
          <a href="#collection" onClick={() => setIsMenuOpen(false)}>Collection</a>
          <a href="#lookbook" onClick={() => setIsMenuOpen(false)}>Lookbook</a>
          <a href="#stylist" onClick={() => setIsMenuOpen(false)}>AI Stylist</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Cart</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
