import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Video, Volume2, Share2, Globe, Palette, 
  PenTool, UserCheck, Users, Gift, Image, Sparkles, Box, ArrowRight
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "Event Management",
      desc: "LXG keeps every moving part in perfect alignment, from the earliest concept to the final execution. With extensive expertise in planning, coordination, and on-ground management, LXG ensures your event unfolds seamlessly, confidently, and exactly as envisioned.",
      icon: <Calendar size={22} className="text-brand-red" />,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
      link: "/event-management"
    },
    {
      title: "Media Management",
      desc: "LXG ensures your event continues to make an impression long after the last guest leaves. By managing press, broadcast, and digital coverage, LXG keeps every message, moment, and detail aligned, extending your event’s reach, relevance, and recall.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop",
      icon: <Video size={22} className="text-brand-red" />
    },
    {
      title: "Audio & Video Production",
      desc: "LXG captures the essence of your event through visuals that captivate and sound that resonates. From initial vision to final cut, every frame and note is aligned with the energy, scale, and emotion of your event, ensuring it is experienced exactly as intended.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop",
      icon: <Volume2 size={22} className="text-brand-red" />
    },
    {
      title: "Digital Media Solutions",
      desc: "LXG drives your event’s presence across every platform. Through live streaming, real-time engagement, and tailored digital content, every message and interaction aligns with your event, making it visible, engaging, and memorable.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop",
      icon: <Share2 size={22} className="text-brand-red" />
    },
    {
      title: "Web Development",
      desc: "LXG designs and delivers event websites, ticketing platforms, and digital experiences that function seamlessly and engage audiences effectively. Every feature, interaction, and interface is aligned with your event’s goals, creating a digital presence that performs, connects, and scales effortlessly.",
      image: "https://images.unsplash.com/photo-1547658719-da2b81169d42?q=80&w=600&auto=format&fit=crop",
      icon: <Globe size={22} className="text-brand-red" />
    },
    {
      title: "Creative Designs",
      desc: "LXG translates your event’s vision into striking visuals. From branding and campaigns to signage and environmental graphics, every element is aligned to tell a cohesive story before and during your event.",
      image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=600&auto=format&fit=crop",
      icon: <Palette size={22} className="text-brand-red" />
    },
    {
      title: "Content Writing & Storytelling",
      desc: "LXG crafts narratives that give your event a voice and a story. From overarching concepts to social media captions, every word, message, and idea is aligned with your event’s purpose, engaging audiences, amplifying impact, and leaving a lasting impression.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
      icon: <PenTool size={22} className="text-brand-red" />
    },
    {
      title: "Guests & Protocol Services",
      desc: "LXG manages every detail of VIPs and distinguished guests, from arrivals to departures, ensuring protocol is followed flawlessly. Every interaction, movement, and touchpoint is aligned to create a seamless, dignified, and memorable guest experience.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
      icon: <UserCheck size={22} className="text-brand-red" />
    },
    {
      title: "Athlete & Delegation Management",
      desc: "LXG manages logistics, coordination, and on-ground flow for every moment of your guests’ journey, ensuring performance remains the focus and the experience seamless, professional, and memorable.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
      icon: <Users size={22} className="text-brand-red" />
    },
    {
      title: "Souvenirs, Giveaways & Offset Printing",
      desc: "LXG handles every step of creating tangible memories, from design and printing to delivery. Every item is aligned with your event’s theme and standards, ensuring keepsakes that are thoughtful, high-quality, and remembered long after the event.",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop",
      icon: <Gift size={22} className="text-brand-red" />
    },
    {
      title: "Venue Design & Transformation",
      desc: "LXG transforms spaces into experiences, carefully aligning lighting, layout, ambiance, and flow. Every element is designed in-house to reflect your event’s vision, creating environments that feel immersive, intentional, and memorable.",
      image: "https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?q=80&w=600&auto=format&fit=crop",
      icon: <Image size={22} className="text-brand-red" />
    },
    {
      title: "Brand Amplification",
      desc: "LXG produces large-scale branding that stands out naturally, amplifying your presence while keeping every element aligned with your event’s identity.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
      icon: <Sparkles size={22} className="text-brand-red" />
    },
    {
      title: "3D Modeling",
      desc: "LXG creates detailed 3D representations of your event, from layouts to structures. Every model and visualization is aligned with your vision, allowing precise planning, review, and refinement before execution.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop",
      icon: <Box size={22} className="text-brand-red" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-24 bg-black border-b border-dark-border px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-[-20%] right-[10%] w-[50%] h-[50%] bg-brand-red rounded-full filter blur-[120px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6 z-10 relative">
          <span className="text-brand-red font-sans font-bold text-xs uppercase tracking-widest">what we architect</span>
          <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white uppercase">
            Services
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            LXG combines decades of strategic expertise with cutting-edge technology to deliver comprehensive solutions. We don’t just offer services; we provide the tools to build a dominant brand presence through high-impact visuals and data-driven marketing.
          </p>
        </div>
      </section>

      {/* Grid List */}
      <section className="py-24 bg-dark-bg px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-lg overflow-hidden min-h-[340px] flex flex-col justify-end p-8 border border-dark-border/40 shadow-xl transition-all duration-300"
              >
                {/* Background image card */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-35 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/10"></div>
                </div>

                <div className="z-10 space-y-4">
                  <div className="w-10 h-10 rounded bg-brand-red/10 border border-brand-red/20 flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-black text-xl text-white uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 font-sans text-xs leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
                    {service.link ? (
                      <Link
                        to={service.link}
                        className="group inline-flex items-center gap-1.5 text-brand-red hover:text-white font-sans font-bold text-xs uppercase tracking-widest transition-colors duration-300"
                      >
                        View Details
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <span className="text-gray-500 font-sans font-bold text-xs uppercase tracking-widest">
                        Standard Offering
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
