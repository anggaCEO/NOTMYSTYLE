
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { getStyleAdvice } from '../services/geminiService';
import { StylistRecommendation } from '../types';

const AIStylist: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<StylistRecommendation | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const result = await getStyleAdvice(input);
      setRecommendation(result);
    } catch (error) {
      console.error("AI Stylist Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="stylist" className="py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      {/* Decorative blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
              <Sparkles size={16} className="text-white" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Personal Stylist AI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">
              Not Your Basic Advice
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Tell our AI what's the move—concert, first date, or just feeling rebellious—and we'll curate the perfect "not my style" fit.
            </p>
          </div>

          <div className="bg-[#111] border border-white/10 p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="relative mb-10">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: Need an outfit for an underground techno rave..."
                className="w-full bg-black/50 border border-white/10 py-6 px-8 text-white focus:outline-none focus:border-white transition-colors pr-20"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-3 hover:bg-white/90 transition-colors disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              </button>
            </form>

            {recommendation && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid md:grid-cols-[1fr_250px] gap-12">
                  <div>
                    <h3 className="text-xs font-black tracking-[0.3em] uppercase text-white/40 mb-4">The Verdict</h3>
                    <p className="text-xl md:text-2xl font-light italic text-white/90 leading-relaxed mb-8">
                      "{recommendation.styleAdvice}"
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-black tracking-[0.3em] uppercase text-white/40 mb-4">The Pieces</h3>
                    <ul className="space-y-3">
                      {recommendation.suggestedProducts.map((productName, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest group">
                          <CheckCircle2 size={16} className="text-white/60 group-hover:text-white transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform cursor-pointer">{productName}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;
