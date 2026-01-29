import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, ArrowLeft, TrendingUp } from 'lucide-react';
import { useRef, useEffect } from 'react';

const caseStudies = [
  {
    title: 'E-commerce Brand Transformation',
    category: 'Web + Marketing',
    date: 'Nov 2024',
    result: '+250% Revenue',
    icon: 'trending_up',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
  },
  {
    title: 'SaaS Platform Launch',
    category: 'Product Development',
    date: 'Oct 2024',
    result: '10K Users in 30 Days',
    icon: 'group_add',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
  },
  {
    title: 'B2B Lead Generation Campaign',
    category: 'Digital Marketing',
    date: 'Sep 2024',
    result: '5x More Qualified Leads',
    icon: 'download',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
];

const CaseStudies = () => {
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
          scrollContainer.scrollLeft += 0.8;
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
    <section ref={ref} id="case-studies" className="py-16 md:py-24 pl-6 md:pl-20 overflow-hidden bg-background">
      <div className="max-w-[1440px] mx-auto pr-6 md:pr-20 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Impact</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight"
          >
            Proven Results
          </motion.h2>
        </div>
        
        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-3"
        >
          <button className="size-12 rounded-full border border-border/20 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all group">
            <ArrowLeft className="group-hover:-translate-x-0.5 transition-transform" size={20} />
          </button>
          <button className="size-12 rounded-full bg-primary flex items-center justify-center text-background hover:bg-white transition-all group shadow-[0_0_15px_rgba(230,255,0,0.3)]">
            <ArrowRight className="group-hover:translate-x-0.5 transition-transform" size={20} />
          </button>
        </motion.div>
      </div>

      {/* Horizontal Carousel */}
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-12 pr-20 case-carousel">
        <style>{`
          .case-carousel::-webkit-scrollbar {
            display: none;
          }
          .case-carousel {
            scroll-behavior: auto;
          }
        `}</style>
        {[...caseStudies, ...caseStudies].map((study, index) => (
          <motion.article
            key={study.title}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="relative group flex-none w-[85vw] md:w-[600px] aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
            style={{
              background: 'rgba(38, 40, 27, 1)',
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${study.image})` }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            
            {/* Result Badge */}
            <div className="absolute top-6 right-6 bg-primary text-background font-bold text-sm px-4 py-2 rounded-lg shadow-lg transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300 flex items-center gap-1">
              <TrendingUp size={18} />
              {study.result}
            </div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-muted-foreground text-sm font-medium tracking-wide mb-2 uppercase">{study.category}</p>
                <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                <div className="flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Case Study</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
