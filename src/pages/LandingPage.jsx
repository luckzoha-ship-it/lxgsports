import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Cpu, Briefcase, Zap, 
  Award, Heart, Calendar, Video, Volume2, Share2, Globe, Palette, 
  PenTool, UserCheck, Users, Gift, Image, Sparkles, Box, Database, ChevronDown 
} from 'lucide-react';

export default function LandingPage({ onOpenPartnerModal }) {
  const [activeVertical, setActiveVertical] = useState('sport');

  const philosophies = [
    { title: "Where Competition Becomes Opportunity", icon: <Award className="text-brand-red" size={24} /> },
    { title: "Built for Performance", icon: <Cpu className="text-brand-red" size={24} /> },
    { title: "Building More Than Agreements", icon: <ShieldCheck className="text-brand-red" size={24} /> },
    { title: "Engineering Better Outcomes", icon: <Zap className="text-brand-red" size={24} /> },
    { title: "Where Leaders Shape Tomorrow", icon: <Briefcase className="text-brand-red" size={24} /> },
    { title: "Where Communities Come Alive", icon: <Heart className="text-brand-red" size={24} /> }
  ];

  const pillars = [
    { 
      title: "We Connect", 
      desc: "People, brands, institutions, and platforms across sport, business, and media.",
      icon: <Users className="text-brand-red" size={28} />
    },
    { 
      title: "We BUILD", 
      desc: "Structured frameworks for partnerships, engagement, and visibility.",
      icon: <Layers icon={Box} />
    },
    { 
      title: "We ACTIVATE", 
      desc: "Live experiences, digital engagement, and commercial integrations.",
      icon: <Zap className="text-brand-red" size={28} />
    }
  ];

  function Layers({ icon: Icon }) {
    return <Icon className="text-brand-red" size={28} />;
  }

  const verticals = [
    {
      id: 'sport',
      title: '01  SPORT & COMPETITIVE PLATFORMS',
      content: 'Sport is one of the most powerful ecosystems in the world - bringing together performance, audiences, brands and communities. LXG works across tournaments, leagues, championships and athlete-driven environments, helping create platforms that enhance engagement, strengthen stakeholder value and drive sustainable growth across the sporting landscape.'
    },
    {
      id: 'brand',
      title: '02  BRAND & COMMERCIAL INTEGRATION',
      content: 'Successful partnerships are built on alignment, not visibility alone. LXG helps connect brands with the right platforms, audiences, and opportunities through strategic sponsorships, commercial integrations and positioning frameworks that create meaningful engagement and long-term value.'
    },
    {
      id: 'entertainment',
      title: '03  ENTERTAINMENT & LIVE EXPERIENCES',
      content: 'Experiences have the power to inspire, connect, and influence. LXG designs and delivers live environments that bring together people, brands, and communities through events, activations and engagement platforms that create impact beyond the moment itself.'
    },
    {
      id: 'digital',
      title: '04  DIGITAL & MEDIA SYSTEMS',
      content: 'Content and connectivity now shape how audiences engage with brands and experiences. LXG develops digital and media-driven ecosystems that extend reach, strengthen engagement and create meaningful connections across physical and digital platforms.'
    },
    {
      id: 'protocol',
      title: '05  PROTOCOL & PARTNERSHIPS',
      content: 'Meaningful progress requires collaboration. LXG works alongside governments, federations, institutions and development partners to support initiatives that align vision with execution, creating platforms that deliver lasting value and measurable impact.'
    }
  ];

  // High fidelity background images from Unsplash to match sportfive.com
  const previewServices = [
    {
      title: "Event Management",
      desc: "LXG keeps every moving part in perfect alignment, from the earliest concept to the final execution.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
      link: "/event-management"
    },
    {
      title: "Media Management",
      desc: "LXG ensures your event continues to make an impression long after the last guest leaves.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop",
      link: "/services"
    },
    {
      title: "Audio & Video Production",
      desc: "LXG captures the essence of your event through visuals that captivate and sound that resonates.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop",
      link: "/services"
    }
  ];

  const industryVerticals = [
    {
      title: "Sports Events",
      subtitle: "Competitive Sport Execution",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=400&auto=format&fit=crop",
      items: ["Winning Mindset", "Rise & Play", "Ultimate Challenge", "Athletes Driven"]
    },
    {
      title: "Conferences",
      subtitle: "Knowledge Platforms",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=400&auto=format&fit=crop",
      items: ["Executive Dialogue", "Power Talks", "Thought Leadership"]
    },
    {
      title: "Corporate Events",
      subtitle: "Brand Experiences",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400&auto=format&fit=crop",
      items: ["High-End Hospitality", "Business Dinner", "Brand Activation"]
    },
    {
      title: "MICE",
      subtitle: "Business Journeys",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=400&auto=format&fit=crop",
      items: ["Meetings & Events", "Strategic Meetings"]
    },
    {
      title: "Entertainment",
      subtitle: "Immersive Shows",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400&auto=format&fit=crop",
      items: ["Cultural Nights", "Music Festivals", "Live Performances"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Full-bleed Hero Section resembling sportfive.com */}
      <section className="relative min-h-[95vh] flex items-center bg-black overflow-hidden border-b border-dark-border px-4 sm:px-6 lg:px-8">
        
        {/* Full-bleed high-impact background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1920&auto=format&fit=crop" 
            alt="Sports Stadium Lights" 
            className="w-full h-full object-cover object-center opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="max-w-7xl mx-auto z-10 w-full relative">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full text-brand-red text-xs uppercase tracking-widest font-sans font-bold animate-fade-in">
              <Sparkles size={12} /> Shaping What’s Next
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.9] uppercase">
              We Don't Just <br/>
              <span className="text-brand-red">Create Experiences</span>
            </h1>
            
            <p className="font-sans text-lg sm:text-2xl text-gray-300 max-w-2xl font-medium leading-relaxed">
              We Build Ecosystems That Move Industries Forward.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                to="/services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all shadow-xl shadow-brand-red/20"
              >
                Explore LXG
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={() => {
                  const el = document.getElementById('verticals-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-dark-border text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all"
              >
                Our Ecosystem
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-dark-bg px-4 sm:px-6 lg:px-8 border-b border-dark-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">from idea</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-wide">
              to impact
            </h2>
            <p className="text-gray-400 font-sans max-w-xl mx-auto text-sm">
              We Begin with Ideas - but we never stay there.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophies.map((philo, idx) => (
              <div key={idx} className="glass-card p-8 rounded-lg flex flex-col justify-between h-48 border border-dark-border">
                <div className="w-10 h-10 rounded bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-4">
                  {philo.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white uppercase leading-snug">
                  {philo.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onOpenPartnerModal}
              className="group inline-flex items-center gap-2 text-brand-red hover:text-white font-sans font-bold text-xs uppercase tracking-widest transition-colors duration-300"
            >
              Move Forward 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Ecosystem Enabler / What defines LXG */}
      <section className="py-24 bg-dark-bg px-4 sm:px-6 lg:px-8 border-b border-dark-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">what</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-wide">
              defines lxg?
            </h2>
            <p className="text-brand-red font-display font-bold text-sm tracking-wider uppercase">
              WE ARE AN ECOSYSTEM ENABLER
            </p>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              LXG is a sports and experience-driven platform that builds structured systems across commercial partnerships, live engagements, technology, and strategic collaborations.
            </p>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              We don’t operate in silos. We operate where industries connect and create value.
            </p>
            <div className="pt-4">
              <Link
                to="/about"
                className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-dark-border text-white font-sans font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded transition-all w-fit"
              >
                Get to know Us
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="glass-card p-6 rounded-lg flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-brand-red/10 border border-brand-red/20 flex items-center justify-center flex-shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 font-sans text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we Architect / Services */}
      <section className="py-24 bg-dark-bg px-4 sm:px-6 lg:px-8 border-b border-dark-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">what we architect</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-wide">
                Services
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-gray-400 font-sans text-sm leading-relaxed">
                LXG combines decades of strategic expertise with cutting-edge technology to deliver comprehensive digital solutions. We don’t just offer services; we provide the tools to build a dominant brand presence through high-impact visuals and data-driven marketing.
              </p>
            </div>
          </div>

          {/* High fidelity image grid matching sportfive.com */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewServices.map((service, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-lg overflow-hidden h-[360px] flex flex-col justify-end p-8 border border-dark-border/40 shadow-xl transition-all duration-300"
              >
                {/* Background image card */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/10"></div>
                </div>

                <div className="z-10 space-y-4">
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 font-sans text-xs leading-relaxed max-w-sm">
                    {service.desc}
                  </p>
                  <Link
                    to={service.link}
                    className="group inline-flex items-center gap-1.5 text-brand-red hover:text-white font-sans font-bold text-xs uppercase tracking-widest pt-2 transition-colors"
                  >
                    View Details
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all shadow-xl shadow-brand-red/10"
            >
              Explore All Services
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Accordion Where LXG Operates */}
      <section id="verticals-section" className="py-24 bg-dark-bg px-4 sm:px-6 lg:px-8 border-b border-dark-border">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">where</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-wide">
              lxg operates
            </h2>
          </div>

          <div className="border border-dark-border rounded-lg overflow-hidden divide-y divide-dark-border bg-dark-card/30">
            {verticals.map((vert) => {
              const isExpanded = activeVertical === vert.id;
              return (
                <div key={vert.id} className="transition-all duration-300">
                  <button
                    onClick={() => setActiveVertical(isExpanded ? '' : vert.id)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none hover:bg-white/5 transition-colors"
                  >
                    <span className={`font-display font-bold sm:text-lg tracking-wider uppercase transition-colors ${isExpanded ? 'text-brand-red' : 'text-gray-300'}`}>
                      {vert.title}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-red' : ''}`} 
                    />
                  </button>
                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-gray-400 font-sans text-sm leading-relaxed animate-fade-in pl-12 border-l-2 border-brand-red">
                      {vert.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Verticals Grid with image overlays */}
      <section className="py-24 bg-dark-bg px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">verticals</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-wide">
              Our Verticals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industryVerticals.map((v, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-lg overflow-hidden h-80 flex flex-col justify-end p-6 border border-dark-border/50 shadow-lg"
              >
                {/* Background Image Card */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={v.image} 
                    alt={v.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-40 group-hover:opacity-55"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent"></div>
                </div>

                <div className="z-10 space-y-4">
                  <div>
                    <h3 className="font-display font-black text-xl text-white uppercase tracking-wide leading-tight mb-1">
                      {v.title}
                    </h3>
                    <span className="block text-[10px] uppercase font-bold tracking-widest text-brand-red">
                      {v.subtitle}
                    </span>
                  </div>
                  <ul className="space-y-2 border-t border-white/10 pt-4 font-sans text-xs text-gray-300">
                    {v.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-brand-red rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
