
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AIStylist from './components/AIStylist';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Collection Section */}
        <ProductGrid />

        {/* Lookbook Quote Section */}
        <section className="py-32 bg-white text-black">
          <div className="container mx-auto px-6 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 block">Philosophy</span>
            <blockquote className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter italic leading-none max-w-5xl mx-auto">
              "We don't sell clothes. We sell the courage to be exactly who you are, especially when they tell you not to."
            </blockquote>
          </div>
        </section>

        {/* AI Assistant Section */}
        <AIStylist />

        {/* Visual Campaign Grid */}
        <section id="lookbook" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-[600px] md:h-[800px]">
          <div className="relative group overflow-hidden border-r border-white/5">
            <img src="https://picsum.photos/seed/look1/800/1200?grayscale" alt="Look 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white border border-white px-6 py-2 uppercase text-xs font-black tracking-widest">View Look</span>
            </div>
          </div>
          <div className="relative group overflow-hidden border-r border-white/5">
            <img src="https://picsum.photos/seed/look2/800/1200?grayscale" alt="Look 2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white border border-white px-6 py-2 uppercase text-xs font-black tracking-widest">View Look</span>
            </div>
          </div>
          <div className="relative group overflow-hidden border-r border-white/5">
            <img src="https://picsum.photos/seed/look3/800/1200?grayscale" alt="Look 3" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white border border-white px-6 py-2 uppercase text-xs font-black tracking-widest">View Look</span>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img src="https://picsum.photos/seed/look4/800/1200?grayscale" alt="Look 4" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white border border-white px-6 py-2 uppercase text-xs font-black tracking-widest">View Look</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
