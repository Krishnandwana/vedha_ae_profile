import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Terminal, Bot, Palette } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  services: string[];
  icon: React.ElementType;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Tech Development',
    description: 'Scalable architecture built for the digital age, ensuring robustness and speed.',
    services: ['Web App', 'Mobile', 'API', 'Cloud Infrastructure'],
    icon: Terminal,
  },
  {
    id: 2,
    title: 'AI Development & Services',
    description: 'Cutting-edge artificial intelligence solutions that transform your business operations and unlock intelligent automation.',
    services: ['Custom AI Agents', 'Computer Vision', 'Natural Language Processing', 'Chatbots', 'Predictive Analytics'],
    icon: Bot,
  },
  {
    id: 3,
    title: 'Design & Branding',
    description: 'Crafting memorable visual narratives that resonate with your audience.',
    services: ['Identity', 'UI/UX', 'Motion', 'Print'],
    icon: Palette,
  },
];

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section ref={ref} id="services" className="relative py-32 md:py-40 bg-muted/30 overflow-hidden min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Our Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white tracking-tight leading-[0.95]"
          >
            AI solutions <br />
            <span className="text-gray-500">for intelligent business.</span>
          </motion.h2>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(`/services?service=${service.id}`)}
                className="group relative flex flex-col justify-between p-10 rounded-2xl bg-card-dark border border-border-dark cursor-pointer overflow-hidden min-h-[420px] transition-all duration-300 hover:border-primary hover:scale-[1.02]"
                style={{
                  backgroundColor: 'rgba(42, 45, 21, 1)',
                  borderColor: hoveredCard === service.id ? '#e6ff00' : 'rgba(63, 66, 34, 1)',
                }}
              >
                {/* Background Gradient Glow */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] transition-opacity duration-500 ${hoveredCard === service.id ? 'opacity-100' : 'opacity-0'}`}></div>
                
                <div className="relative z-10 flex flex-col gap-8">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-full border border-border-dark transition-all duration-300 ${hoveredCard === service.id ? 'bg-primary text-background-dark' : 'bg-background-dark/50 text-primary'}`}>
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  
                  <div>
                    <h3 className={`text-4xl font-bold mb-6 leading-tight transition-colors duration-300 ${hoveredCard === service.id ? 'text-primary' : 'text-white'}`}>
                      {service.title}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {service.services.map((item, idx) => (
                        <li
                          key={idx}
                          className="px-3 py-1 rounded-full border border-border-dark bg-background-dark/30 text-gray-300 text-sm font-medium"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Reveal Description on Hover */}
                <div 
                  className="relative z-10 transition-all duration-400 ease-out overflow-hidden"
                  style={{
                    maxHeight: hoveredCard === service.id ? '100px' : '0',
                    opacity: hoveredCard === service.id ? 1 : 0,
                    marginTop: hoveredCard === service.id ? '1.5rem' : '0',
                  }}
                >
                  <p className="text-lg text-gray-200 font-medium leading-relaxed border-t border-border-dark pt-4">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
