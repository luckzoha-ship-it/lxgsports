import React from 'react';
import { ArrowRight, Trophy, Zap, Shield, Globe, Award, Sparkles, Star } from 'lucide-react';

export default function AboutPage({ onOpenPartnerModal }) {
  return (
    <div className="pt-20">
      {/* Header section */}
      <section className="relative py-24 bg-black border-b border-dark-border px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-[-20%] left-[10%] w-[50%] h-[50%] bg-brand-red rounded-full filter blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-6 z-10 relative">
          <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">Your Vision Our mission</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white uppercase">
            About Us
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At LXG, we transform your boldest ideas into digital reality by aligning your brand’s aspirations with our strategic expertise. Our mission is to provide the high-fidelity 3D design and innovative marketing solutions necessary to bridge the gap between imagination and impact, ensuring your vision is met with the precision and professional legacy required to lead in today’s marketplace.
          </p>
        </div>
      </section>

      {/* L X G - Why brands choose us */}
      <section className="py-24 bg-dark-bg px-4 sm:px-6 lg:px-8 border-b border-dark-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">About LXG</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-wide">
              why brands choose lxg?
            </h2>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              LXG Events shapes experiences with intent, structure, and impact. Since 2004, we’ve delivered moments that move people, brands, and institutions.
            </p>
            <div className="p-6 border border-dark-border rounded-lg bg-dark-card/20 space-y-2">
              <span className="text-brand-red font-display font-black text-lg">This Is LXG!</span>
              <p className="text-gray-400 font-sans text-xs leading-relaxed">
                We believe in the power of elevation over expansion. Every partnership we build, every arena we shape, is guided by a commitment to excellence.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {/* L */}
            <div className="glass-card p-6 rounded-lg flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-brand-red/10 border border-brand-red/20 flex items-center justify-center flex-shrink-0 font-display font-black text-brand-red text-xl">
                L
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-1">
                  Lead
                </h3>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  Every moment is guided by purpose, shaping experiences that matter.
                </p>
              </div>
            </div>
            {/* X */}
            <div className="glass-card p-6 rounded-lg flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-brand-red/10 border border-brand-red/20 flex items-center justify-center flex-shrink-0 font-display font-black text-brand-red text-xl">
                X
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-1">
                  Execute
                </h3>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  Every detail is aligned, letting events flow seamlessly and naturally.
                </p>
              </div>
            </div>
            {/* G */}
            <div className="glass-card p-6 rounded-lg flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-brand-red/10 border border-brand-red/20 flex items-center justify-center flex-shrink-0 font-display font-black text-brand-red text-xl">
                G
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-1">
                  Grow
                </h3>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  Every moment leaves an impression, creating memories that last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moments & Legacy Section */}
      <section className="py-24 bg-dark-bg px-4 sm:px-6 lg:px-8 border-b border-dark-border">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">Moments by Lxg</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-wide">
                We Create events don't happen by chance.
              </h2>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">
                They are engineered through clarity, discipline, and intent. At LXG, we craft each project with intention, turning every step into moments that become milestones.
              </p>
            </div>
            
            <div className="lg:col-span-6 border-l border-dark-border pl-8 space-y-8">
              <div className="space-y-2">
                <span className="font-display font-extrabold text-5xl text-white">20+</span>
                <p className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">years of iconic events</p>
              </div>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">
                Decades of crafting iconic events that leave a lasting mark.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="glass-card p-8 rounded-lg space-y-4">
              <div className="w-10 h-10 rounded bg-white/5 border border-dark-border flex items-center justify-center text-brand-red">
                <Globe size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-white uppercase">Global & Multi-Country</h3>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">
                Seamlessly executing events from local districts to international arenas with consistent standards.
              </p>
            </div>
            <div className="glass-card p-8 rounded-lg space-y-4">
              <div className="w-10 h-10 rounded bg-white/5 border border-dark-border flex items-center justify-center text-brand-red">
                <Zap size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-white uppercase">In-House Creative & Production</h3>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">
                Full control over every detail, from visual concept design to physical on-ground production.
              </p>
            </div>
            <div className="glass-card p-8 rounded-lg space-y-4">
              <div className="w-10 h-10 rounded bg-white/5 border border-dark-border flex items-center justify-center text-brand-red">
                <Shield size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-white uppercase">Trusted by Leaders</h3>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">
                Partnerships built on credibility, reliability, and excellence with governments, military bodies, and major corporates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shaping Arenas */}
      <section className="py-24 bg-dark-bg px-4 sm:px-6 lg:px-8 border-b border-dark-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">Shaping Arenas</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-wide">
              Where LXG Delivers
            </h2>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              LXG brings expertise and creativity to every arena - from sports and corporate events to MICE, conferences, and entertainment - shaping experiences that leave a mark and are remembered.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 border border-dark-border rounded bg-dark-card/10 hover:border-brand-red/30 transition-colors">
              <span className="font-display font-bold text-sm text-white uppercase tracking-wider block mb-1">Dynamic Sports Management</span>
              <p className="text-gray-500 text-xs font-sans">Full-scale tournaments, competitive league orchestrations, and athlete integrations.</p>
            </div>
            <div className="p-6 border border-dark-border rounded bg-dark-card/10 hover:border-brand-red/30 transition-colors">
              <span className="font-display font-bold text-sm text-white uppercase tracking-wider block mb-1">Corporate Events</span>
              <p className="text-gray-500 text-xs font-sans">High-level corporate brand launches, stakeholder experiences, and dinners.</p>
            </div>
            <div className="p-6 border border-dark-border rounded bg-dark-card/10 hover:border-brand-red/30 transition-colors">
              <span className="font-display font-bold text-sm text-white uppercase tracking-wider block mb-1">Impactful Conferences</span>
              <p className="text-gray-500 text-xs font-sans">Thought leadership forums, panel dialogues, and knowledge sharing platforms.</p>
            </div>
            <div className="p-6 border border-dark-border rounded bg-dark-card/10 hover:border-brand-red/30 transition-colors">
              <span className="font-display font-bold text-sm text-white uppercase tracking-wider block mb-1">MICE</span>
              <p className="text-gray-500 text-xs font-sans">Structured corporate travel journeys, board meetings, and conventions.</p>
            </div>
            <div className="p-6 border border-dark-border rounded bg-dark-card/10 hover:border-brand-red/30 transition-colors sm:col-span-2">
              <span className="font-display font-bold text-sm text-white uppercase tracking-wider block mb-1">Immersive Entertainment</span>
              <p className="text-gray-500 text-xs font-sans">Music festivals, curated cultural nights, and massive scale public live performances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Be a Partner section */}
      <section className="py-28 bg-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[50%] right-[10%] w-[40%] h-[40%] bg-brand-red rounded-full filter blur-[100px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-4">
            <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">LXG, Moving Forward</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white uppercase tracking-wide leading-tight">
              Let’s Build <br/>
              <span className="text-gradient">What People Remember</span>
            </h2>
            <p className="text-gray-400 font-sans text-sm max-w-xl mx-auto">
              If you’re planning an event that represents leadership, carries responsibility, and demands excellence - let's collaborate.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="p-4 border border-dark-border/60 rounded bg-dark-card/30">
              <span className="font-display font-bold text-xs text-white uppercase block mb-1">Global Collaborations</span>
            </div>
            <div className="p-4 border border-dark-border/60 rounded bg-dark-card/30">
              <span className="font-display font-bold text-xs text-white uppercase block mb-1">Sporting IPS</span>
            </div>
            <div className="p-4 border border-dark-border/60 rounded bg-dark-card/30">
              <span className="font-display font-bold text-xs text-white uppercase block mb-1">Strategic Growth</span>
            </div>
            <div className="p-4 border border-dark-border/60 rounded bg-dark-card/30">
              <span className="font-display font-bold text-xs text-white uppercase block mb-1">Thought Leadership</span>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={onOpenPartnerModal}
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all shadow-xl shadow-brand-red/20"
            >
              Join Us Now
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
