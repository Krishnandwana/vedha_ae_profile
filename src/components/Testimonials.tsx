import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Quote } from 'lucide-react';
import { useRef, useEffect } from 'react';

const testimonials = [
  {
    quote: "Vedha transformed our digital presence completely. Our website traffic increased by 300% and conversions doubled within 6 months.",
    author: 'Sarah Chen',
    role: 'CEO',
    company: 'TechFlow Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    quote: "The marketing strategy they developed helped us reach our target audience like never before. Best investment we've made.",
    author: 'Michael Torres',
    role: 'VP of Sales',
    company: 'GrowthMetrics',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    quote: "Working with Vedha was seamless. They built us a world-class product that our customers love. Highly recommended!",
    author: 'Emily Watson',
    role: 'COO',
    company: 'Innovate Labs',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

const Testimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let isHovering = false;
    let lastTime = Date.now();

    const smoothScroll = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      
      if (!isHovering && scrollContainer && deltaTime > 16) {
        const scrollWidth = scrollContainer.scrollWidth;
        const currentScroll = scrollContainer.scrollLeft;
        
        // Reset to start when reaching the duplicated items (halfway through total scroll)
        if (currentScroll >= (scrollWidth / 2)) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 0.4;
        }
        
        lastTime = currentTime;
      }
      
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section ref={ref} id="testimonials" className="py-32 md:py-40 bg-muted/30 min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto px-6"
      >
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16 md:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-xs font-medium tracking-wider uppercase text-primary">
                Client Praise
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight"
            >
              What They Say
            </motion.h2>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-12 pr-20 testimonials-carousel">
          <style>{`
            .testimonials-carousel::-webkit-scrollbar {
              display: none;
            }
            .testimonials-carousel {
              scroll-behavior: auto;
            }
          `}</style>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={`${testimonial.author}-${index}`}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index % 3) }}
              className="group flex-none w-[90vw] sm:w-[75vw] md:w-[55vw] lg:w-[480px] rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-500 relative overflow-hidden shadow-2xl"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.37) 0px 8px 32px 0px, rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(8px) saturate(120%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Subtle theme color tint in bottom right */}
              <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-gradient-to-tl from-primary/8 via-primary/4 to-transparent rounded-2xl pointer-events-none" />
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

              <Quote className="w-10 h-10 text-primary/30 mb-6 relative z-10" />

              <p className="text-foreground text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 relative z-10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p> 
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
