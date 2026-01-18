
import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <a href="#" className="text-3xl font-black uppercase tracking-tighter italic mb-8 block">
              not my style
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              Born in the shadows. Crafted for the non-conformists. Our style is not yours, and that's exactly the point.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
            <ul className="space-y-4 text-white/50 text-sm uppercase tracking-widest font-medium">
              <li><a href="#collection" className="hover:text-white transition-colors">Collection</a></li>
              <li><a href="#lookbook" className="hover:text-white transition-colors">Lookbook</a></li>
              <li><a href="#stylist" className="hover:text-white transition-colors">AI Stylist</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Support</h4>
            <ul className="space-y-4 text-white/50 text-sm uppercase tracking-widest font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sizing Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">The Insider</h4>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-6 leading-relaxed">
              Drop alerts, exclusive invites, and secret releases.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-transparent border-b border-white/20 py-2 w-full focus:outline-none focus:border-white transition-colors text-xs tracking-widest"
              />
              <button className="border-b border-white/20 px-4 py-2 text-xs font-black uppercase hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.4em]">
            © 2024 NOT MY STYLE CLOTHING INC. ALL RIGHTS RESERVED.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
