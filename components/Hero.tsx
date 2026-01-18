
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/streetwear/1920/1080?grayscale" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none mb-6">
          <span className="block overflow-hidden">
            <span className="inline-block animate-reveal">NOT MY</span>
          </span>
          <span className="block overflow-hidden text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>
            <span className="inline-block animate-reveal delay-200">STYLE</span>
          </span>
        </h1>
        
        <p className="max-w-xl mx-auto text-lg md:text-xl text-white/70 mb-10 font-light tracking-wide">
          A definitive statement for those who refuse to follow. 
          Limited release streetwear designed in the shadows.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#collection" 
            className="group px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-white/90 transition-all"
          >
            Shop Drop 001
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#stylist" 
            className="px-10 py-4 border border-white/20 hover:border-white transition-colors text-white font-bold uppercase tracking-widest text-sm"
          >
            Find Your Vibe
          </a>
        </div>
      </div>

      {/* Decorative side text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden lg:block text-xs tracking-[1em] text-white/20 uppercase">
        Spring Summer Collection 2024 / Available Now
      </div>
    </section>
  );
};

export default Hero;
