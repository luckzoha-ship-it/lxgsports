import React from 'react';
import { Calendar, CheckCircle2, ShieldCheck, Zap, Star, LayoutGrid, Clock, ClipboardList } from 'lucide-react';

export default function EventManagementPage({ onOpenPartnerModal }) {
  const features = [
    {
      title: "Meticulous Planning",
      desc: "Every detail mapped out with absolute precision to eliminate guesswork and variables.",
      icon: <ClipboardList className="text-brand-red" size={20} />
    },
    {
      title: "Cross-Channel Coordination",
      desc: "Synchronizing media, technology, venue, and protocols into one single cohesive timeline.",
      icon: <LayoutGrid className="text-brand-red" size={20} />
    },
    {
      title: "High-Stakes On-Ground Management",
      desc: "Experienced managers handling live execution to handle real-time changes seamlessly.",
      icon: <Clock className="text-brand-red" size={20} />
    }
  ];

  const categories = [
    {
      title: "Corporate Launches",
      desc: "High-impact events designed to represent brand leadership and corporate prestige."
    },
    {
      title: "Experiential Pop-Ups",
      desc: "Massive scale consumer brand engagements that captivate audiences and go viral."
    },
    {
      title: "Hybrid & Digital Events",
      desc: "Combining global physical attendance with high-definition digital streams and integrations."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero header */}
      <section className="relative py-24 bg-black border-b border-dark-border px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-red rounded-full filter blur-[120px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6 z-10 relative animate-fade-in">
          <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">Our Premier Service</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white uppercase">
            Event Management
          </h1>
          <p className="font-sans text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-semibold leading-relaxed">
            "LXG ensures your event unfolds seamlessly, confidently, and exactly as envisioned."
          </p>
        </div>
      </section>

      {/* Philosophy & Overview */}
      <section className="py-24 bg-dark-bg px-4 sm:px-6 lg:px-8 border-b border-dark-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest text-gradient">The Core Value Proposition</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-wide">
              we make sure <br/>
              <span className="text-brand-red">your brand shines</span>
            </h2>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              We don't just organize events; we engineer experiences. With extensive expertise in meticulous planning, cross-channel coordination, and high-stakes on-ground management, we take the chaos out of event hosting. 
            </p>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Whether it’s a high-impact corporate launch, a massive experiential pop-up, or a hybrid digital event, our team has the legacy and discipline to execute flawlessly.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="glass-card p-6 rounded-lg flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-brand-red/10 border border-brand-red/20 flex items-center justify-center flex-shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-white uppercase tracking-wide mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-gray-400 font-sans text-xs leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals inside Event Management */}
      <section className="py-24 bg-dark-bg px-4 sm:px-6 lg:px-8 border-b border-dark-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">Specialized Execution</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-wide">
              What We Deliver
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="glass-card p-8 rounded-lg flex flex-col justify-between h-64">
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
                    <Star size={16} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 font-sans text-sm leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-brand-red font-sans font-bold uppercase tracking-wider">
                  flawless execution
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-black px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-brand-red rounded-full filter blur-[120px]"></div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-wide leading-tight">
            Ready to Partner With LXG?
          </h2>
          <p className="text-gray-400 font-sans text-sm max-w-xl mx-auto">
            Let us help you design, coordinate, and execute an experience that aligns with your brand standards and leaves a lasting impact.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenPartnerModal}
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all shadow-xl shadow-brand-red/25"
            >
              Start Collaboration
              <Calendar size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
