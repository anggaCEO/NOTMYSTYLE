
import React from 'react';
import { PRODUCTS } from '../constants';
import { Plus } from 'lucide-react';

const ProductGrid: React.FC = () => {
  return (
    <section id="collection" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-white/40 mb-2 block">Catalog</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Essential Gear</h2>
          </div>
          <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-white/60">
            <button className="text-white border-b border-white pb-1">All</button>
            <button className="hover:text-white transition-colors pb-1">Oversized</button>
            <button className="hover:text-white transition-colors pb-1">Limited</button>
            <button className="hover:text-white transition-colors pb-1">Graphic</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] bg-[#111] mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 text-white border border-white/10">
                    {product.category}
                  </span>
                </div>
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-white text-black flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                  <Plus size={24} />
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-1 group-hover:underline underline-offset-4 decoration-1">
                    {product.name}
                  </h3>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-widest">
                    IDR {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
