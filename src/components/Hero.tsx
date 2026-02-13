import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';

const Hero = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} id="hero" className="relative h-screen overflow-hidden flex flex-col bg-[#0A0A0A]">
      {/* Interactive Dot Grid Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-20" 
        style={{ 
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      />

      {/* Main Hero Section */}
      <main className="relative flex-1 flex flex-col items-center justify-center py-20 z-10 w-full max-w-[1400px] mx-auto px-4">
        {/* 3D Glass Logo Reveal */}
        <motion.div 
          className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex items-center justify-center mb-4 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
        >
          {/* Background Glow */}
          <motion.div 
            className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] pointer-events-none"
            animate={{
              opacity: [0.6, 0.8, 0.6],
              filter: ['blur(40px)', 'blur(50px)', 'blur(40px)'],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Logo Container with Float Animation */}
          <motion.div 
            className="relative w-full h-full"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent blur-xl rounded-full" />
            
            {/* Vedha Icon SVG */}
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src="/vedha-icon.svg" 
                alt="Vedha" 
                className="w-3/4 h-3/4 object-contain drop-shadow-[0_0_15px_rgba(230,255,0,0.3)]"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(230, 255, 0, 0.3))'
                }}
              />
            </div>

            {/* Decorative blurred elements for depth */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>

        {/* Typography Block */}
        <motion.div 
          className="text-center px-4 max-w-5xl mx-auto -mt-4 md:-mt-10 relative z-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] md:leading-[0.95] tracking-tighter text-white">
            <span className="block text-white/90">Intelligent Solutions,</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50 pb-2">
              Human-Centered AI
            </span>
          </h1>
          <p className="mt-6 text-white/50 text-xs md:text-sm font-medium uppercase tracking-[0.2em] max-w-lg mx-auto">
            AI Development &amp; Automation Services
          </p>
        </motion.div>

        {/* Magnetic CTA */}
        <motion.div 
          className="mt-8 md:mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Link to="/contact">
            <motion.button 
              className="group relative overflow-hidden rounded-xl bg-primary px-8 py-4 transition-all duration-300"
              whileHover={{ 
                y: -4,
                boxShadow: '0 0 40px -10px rgba(230, 255, 0, 0.6)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="relative z-10 flex items-center gap-3">
                <span className="text-background text-base md:text-lg font-bold tracking-tight">
                  Book a Free Consultation
                </span>
                <ArrowRight className="text-background group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </motion.button>
          </Link>
        </motion.div>
      </main>

      <div className="fixed bottom-6 right-6 hidden md:block z-20 opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-xs font-mono text-white rotate-90 origin-bottom-right inline-block">
          SCROLL
        </span>
      </div>
    </section>
  );
};

export default Hero;
