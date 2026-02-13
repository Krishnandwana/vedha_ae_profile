import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Bot } from "lucide-react";

import { Terminal, TrendingUp, Palette, Code, Smartphone, Database, Shield, Search, Share2, LineChart, Palette as PaletteIcon, Sparkles, FileText, Video } from 'lucide-react';

interface ServiceDetail {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  stats: { value: string; label: string }[];
}

const servicesDetails: ServiceDetail[] = [
  {
    id: 1,
    category: 'Development',
    title: 'Tech Development',
    subtitle: 'Structured Tech Core',
    description: 'We reassemble chaos into order. Our development phase utilizes digital disintegration to snap abstract concepts into rigid, high-performance wireframe grids.',
    icon: Terminal,
    features: [
      'Web App Development',
      'Mobile Applications',
      'API Integration',
      'QA Testing',
      'System Architecture',
      'Security Protocols'
    ],
    stats: [
      { value: '99.9%', label: 'Uptime' },
      { value: '0ms', label: 'Latency' }
    ]
  },
  {
  id: 2,
  category: 'AI',
  title: 'AI Development & Services',
  subtitle: 'Intelligent Automation',
  description: 'Cutting-edge artificial intelligence solutions that transform your business operations and unlock intelligent automation.',
  icon: Bot,
  features: [
    'Custom AI Agents',
    'Computer Vision',
    'Natural Language Processing',
    'AI Chatbots',
    'Predictive Analytics',
    'Intelligent Automation'
  ],
  stats: [
    { value: '10x', label: 'Process Efficiency' },
    { value: '24/7', label: 'AI Availability' }
  ]
}
  ,
  {
    id: 3,
    category: 'Branding',
    title: 'Design & Branding',
    subtitle: 'Visual Excellence',
    description: 'Crafting memorable visual narratives that resonate. From brand identity to digital experiences, we create designs that tell your story.',
    icon: Palette,
    features: [
      'Brand Identity',
      'UI/UX Design',
      'Motion Graphics',
      'Print Design',
      'Brand Guidelines',
      'Design Systems'
    ],
    stats: [
      { value: '+180%', label: 'Brand Recognition' },
      { value: '4.8★', label: 'Client Rating' }
    ]
  }
];

const ServicesPage = () => {
  const [searchParams] = useSearchParams();
  const [activeService, setActiveService] = useState(0);
  const currentService = servicesDetails[activeService];
  const Icon = currentService.icon;

  // Scroll to top on mount - immediate scroll
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Set initial service based on URL parameter
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const serviceId = parseInt(serviceParam, 10);
      const serviceIndex = servicesDetails.findIndex(s => s.id === serviceId);
      if (serviceIndex !== -1) {
        setActiveService(serviceIndex);
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative min-h-screen w-full flex overflow-hidden pt-20">
        {/* Left Panel - Service Navigation */}
        <aside className="w-full md:w-1/3 h-[calc(100vh-5rem)] z-40 flex flex-col justify-center px-8 md:px-16 relative"
          style={{
            background: 'rgba(24, 24, 17, 0.85)',
            backdropFilter: 'blur(20px)',
            borderRight: '1px solid rgba(229, 255, 0, 0.15)'
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
                {currentService.category}
              </span>
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter">
                {currentService.subtitle.split(' ')[0]}<br />
                <span className="text-primary">{currentService.subtitle.split(' ').slice(1).join(' ')}</span>
              </h1>
            </div>
            
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">
              {currentService.description}
            </p>

            <nav className="flex flex-col gap-6 pt-10 border-t border-white/10">
              {servicesDetails.map((service, index) => (
                <motion.div
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`group cursor-pointer flex items-center gap-4 transition-opacity ${
                    activeService === index ? '' : 'opacity-30 hover:opacity-100'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <div className={`h-[2px] bg-primary transition-all ${
                    activeService === index ? 'w-12 md:w-20' : 'w-8 group-hover:w-12 md:group-hover:w-20'
                  }`}></div>
                  <span className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
                    {`0${index + 1}. ${service.title.split(' ')[0]}`}
                  </span>
                </motion.div>
              ))}
            </nav>

            {/* Stats */}
            <div className="flex gap-10 pt-8">
              {currentService.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-primary text-xl font-bold">{stat.value}</p>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </aside>

        {/* Right Panel - Service Details */}
        <section className="w-full md:w-2/3 min-h-[calc(100vh-5rem)] relative overflow-y-auto"
          style={{
            background: '#10100c',
            perspective: '1200px'
          }}
        >
          {/* Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-[5] mix-blend-overlay"
            style={{
              backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCKcccFK8Ysi4ikLqkgZlpYh7C7ahBBfT-pwpO9aGL1FxfEv9zts6lAdoJG7aoptz8KpNTUZuLme5F_f2zY5H5QRlTAtz_0wMNQihbcZNP0zed9paBFVvJkfpWDY3Pwhq4kU46cu4Y0AzXj5_JPlFcmOD4xopyi2U78iZuRTHK9P93UNZJcpcifvongH_F4ZoiXPBML49_AjfPoSMFohqHGezW6hH3Z1GxUQqC44ot2M0G86AlPLmdMDmJTS-zLEcuvSLWg8jECZNgu)'
            }}
          />

          {/* Grid Floor */}
          <div className="absolute w-[300%] h-[300%] top-[-100%] left-[-100%] z-[1]"
            style={{
              backgroundImage: 'linear-gradient(rgba(229, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 255, 0, 0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              transform: 'rotateX(70deg) translateY(0) translateZ(-200px)',
              maskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)',
            }}
          />

          {/* 3D Icon Display */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center rounded-3xl"
              style={{
                background: 'rgba(229, 255, 0, 0.03)',
                border: '1px solid rgba(229, 255, 0, 0.6)',
                boxShadow: 'inset 0 0 30px rgba(229, 255, 0, 0.05), 0 0 50px rgba(229, 255, 0, 0.1)'
              }}
            >
              <Icon size={96} className="text-primary" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Features */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {currentService.features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-3 bg-background-dark/90 border border-primary/30 px-4 py-3 rounded-sm backdrop-blur-md hover:border-primary transition-colors cursor-pointer"
                  style={{
                    boxShadow: '0 0 30px -5px rgba(229,255,0,0.1)'
                  }}
                  whileHover={{
                    boxShadow: '0 0 30px -5px rgba(229,255,0,0.3)'
                  }}
                >
                  <span className="text-primary text-xl">•</span>
                  <p className="text-white text-xs md:text-sm font-bold uppercase tracking-wider">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Right Indicator */}
          <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 text-white/40 z-30">
            <div className="w-8 h-8 border border-primary/30 rounded-sm flex items-center justify-center">
              <span className="text-primary text-xl">●</span>
            </div>
            <p className="text-[10px] uppercase font-bold tracking-widest">Active</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
