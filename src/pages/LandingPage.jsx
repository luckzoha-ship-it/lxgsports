import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Cpu, Briefcase, Zap, 
  Award, Heart, Calendar, Play, Globe, Edit3, 
  FileText, Sparkles, Layers, Volume2, UserCheck, 
  Users, Gift, Building, Video, Box, Database, ChevronDown 
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
      icon: <Layers className="text-brand-red" size={28} />
    },
    { 
      title: "We ACTIVATE", 
      desc: "Live experiences, digital engagement, and commercial integrations.",
      icon: <Zap className="text-brand-red" size={28} />
    }
  ];

  const verticals = [
    {
      id: 'sport',
      title: 'SPORT & COMPETITIVE PLATFORMS',
      content: 'Sport is one of the most powerful ecosystems in the world - bringing together performance, audiences, brands and communities. LXG works across tournaments, leagues, championships and athlete-driven environments, helping create platforms that enhance engagement, strengthen stakeholder value and drive sustainable growth across the sporting landscape.'
    },
    {
      id: 'brand',
      title: 'BRAND & COMMERCIAL INTEGRATION',
      content: 'Successful partnerships are built on alignment, not visibility alone. LXG helps connect brands with the right platforms, audiences, and opportunities through strategic sponsorships, commercial integrations and positioning frameworks that create meaningful engagement and long-term value.'
    },
    {
      id: 'entertainment',
      title: 'ENTERTAINMENT & LIVE EXPERIENCES',
      content: 'Experiences have the power to inspire, connect, and influence. LXG designs and delivers live environments that bring together people, brands, and communities through events, activations and engagement platforms that create impact beyond the moment itself.'
    },
    {
      id: 'digital',
      title: 'DIGITAL & MEDIA SYSTEMS',
      content: 'Content and connectivity now shape how audiences engage with brands and experiences. LXG develops digital and media-driven ecosystems that extend reach, strengthen engagement and create meaningful connections across physical and digital platforms.'
    },
    {
      id: 'protocol',
      title: 'PROTOCOL & PARTNERSHIPS',
      content: 'Meaningful progress requires collaboration. LXG works alongside governments, federations, institutions and development partners to support initiatives that align vision with execution, creating platforms that deliver lasting value and measurable impact.'
    }
  ];

  const previewServices = [
    {
      title: "Event Management",
      desc: "LXG keeps every moving part in perfect alignment, from the earliest concept to the final execution.",
      icon: <Calendar className="text-white" size={22} />,
      link: "/event-management"
    },
    {
      title: "Media Management",
      desc: "LXG ensures your event continues to make an impression long after the last guest leaves.",
      icon: <Video className="text-white" size={22} />,
      link: "/services"
    },
    {
      title: "Audio & Video Production",
      desc: "LXG captures the essence of your event through visuals that captivate and sound that resonates.",
      icon: <Volume2 className="text-white" size={22} />,
      link: "/services"
    }
  ];

  const industryVerticals = [
    {
      title: "Sports Events",
      subtitle: "Competitive Sport Execution",
      items: ["Winning Mindset", "Rise & Play", "Ultimate Challenge", "Athletes Driven"]
    },
    {
      title: "Conferences",
      subtitle: "Knowledge & Leadership Platform",
      items: ["Executive Dialogue", "Power Talks", "Thought Leadership"]
    },
    {
      title: "Corporate Events",
      subtitle: "High-level Brand Experiences",
      items: ["Brand Experiences", "High-End Hospitality", "Business Dinner", "Brand Activation"]
    },
    {
      title: "MICE",
      subtitle: "Structured Business Journeys",
      items: ["Meetings & Events", "Strategic Meetings"]
    },
    {
      title: "Entertainment",
      subtitle: "Curated Immersive Experiences",
      items: ["Cultural Nights", "Music Festivals", "Live Performances"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden border-b border-dark-border px-4 sm:px-6 lg:px-8">
        {/* Dynamic mesh background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-red rounded-full filter blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900 rounded-full filter blur-[120px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b1b1f_1px,transparent_1px),linear-gradient(to_bottom,#1b1b1f_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 z-10">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-3 py-1 rounded-full text-brand-red text-xs uppercase tracking-widest font-sans font-bold animate-fade-in">
            <Sparkles size={12} /> Shaping What’s Next
          </div>
          
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05] uppercase">
            We Don't Just <br/>
            <span className="text-gradient">Create Experiences</span>
          </h1>
          
          <p className="font-sans text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-medium">
            We Build Ecosystems That Move Industries Forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all shadow-xl shadow-brand-red/10"
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
              <div key={idx} className="glass-card p-8 rounded-lg flex flex-col justify-between h-48">
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
                LXG combine decades of strategic expertise with cutting-edge technology to deliver comprehensive digital solutions. We don’t just offer services; we provide the tools to build a dominant brand presence through high-impact visuals and data-driven marketing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewServices.map((service, idx) => (
              <div key={idx} className="glass-card p-8 rounded-lg flex flex-col justify-between h-[300px]">
                <div>
                  <div className="w-10 h-10 rounded bg-white/5 border border-dark-border flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-sans text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <Link
                  to={service.link}
                  className="group flex items-center gap-1.5 text-brand-red hover:text-white font-sans font-bold text-xs uppercase tracking-widest w-fit pt-4 transition-colors"
                >
                  View Details
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
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
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-white/5 transition-colors"
                  >
                    <span className={`font-display font-bold text-sm tracking-widest uppercase transition-colors ${isExpanded ? 'text-brand-red' : 'text-gray-300'}`}>
                      {vert.title}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-red' : ''}`} 
                    />
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6 text-gray-400 font-sans text-sm leading-relaxed animate-fade-in">
                      {vert.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Verticals Grid */}
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
              <div key={idx} className="glass-card p-6 rounded-lg flex flex-col justify-between h-72 border border-dark-border">
                <div>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-wide leading-tight mb-1">
                    {v.title}
                  </h3>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-brand-red mb-4">
                    {v.subtitle}
                  </span>
                </div>
                <ul className="space-y-2 border-t border-dark-border/50 pt-4 font-sans text-xs text-gray-400">
                  {v.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-brand-red rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
