import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface Logo {
  name: string;
  image?: string;
  icon?: string;
  text?: string;
  color?: string;
}

const logos: Logo[] = [
  {
    name: 'COP28',
    image: 'https://www.google.com/s2/favicons?domain=cop28.com&sz=128',
  },
  {
    name: 'Dubai DET',
    image: 'https://www.google.com/s2/favicons?domain=dubaidet.gov.ae&sz=128',
  },
  {
    name: 'Dunkin',
    image: 'https://www.google.com/s2/favicons?domain=dunkindonuts.com&sz=128',
  },
  {
    name: 'Baskin Robbins',
    image: 'https://www.google.com/s2/favicons?domain=baskinrobbins.com&sz=128',
  },
  {
    name: "Arby's",
    image: 'https://www.google.com/s2/favicons?domain=arbys.com&sz=128',
  },
  {
    name: 'Jimmy Johns',
    image: 'https://www.google.com/s2/favicons?domain=jimmyjohns.com&sz=128',
  },
  {
    name: 'Biko Institute',
    image: 'https://www.google.com/s2/favicons?domain=bikoemotionalwellnesscentre.com&sz=128',
  },
  {
    name: 'Buffalo Wild Wings',
    image: 'https://www.google.com/s2/favicons?domain=buffalowildwings.com&sz=128',
  },
];

const LogoMarquee = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} id="logo-marquee" className="py-16 md:py-24 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto px-4 md:px-10 lg:px-40"
      >
        {/* Headline Section */}
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h3 className="text-muted-foreground tracking-wide text-2xl font-light leading-tight px-4 pb-2">
            Trusted by Industry Leaders
          </h3>
          {/* Decorative line */}
          <div className="h-0.5 w-12 bg-primary rounded-full opacity-60"></div>
        </div>

        {/* Logo Grid Section */}
        <div className="w-full" style={{ perspective: '1000px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
            {logos.map((logo, index) => (
              <LogoCard key={logo.name} logo={logo} index={index} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Call to action for partnership */}
        <div className="flex justify-center mt-8">
          <p className="text-muted-foreground/70 text-sm">Join the ranks of industry pioneers.</p>
        </div>
      </motion.div>
    </section>
  );
};

const LogoCard = ({ logo, index, isInView }: { logo: Logo; index: number; isInView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1]
    }}
    whileHover={{ 
      y: -5, 
      rotateX: 2,
      boxShadow: '0 20px 40px -10px rgba(229, 255, 0, 0.1)'
    }}
    className="group relative flex h-40 w-full flex-col items-center justify-center rounded-xl cursor-pointer"
    style={{
      background: 'rgba(30, 30, 30, 0.4)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease, border-color 0.4s ease',
    }}
  >
    {/* Gradient overlay on hover */}
    <div 
      className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl pointer-events-none"
      style={{ transition: 'opacity 0.5s' }}
    />
    
    {/* Logo Content */}
    <div className="relative z-10 flex flex-col items-center gap-3">
      <div
        className="transition-all duration-500 transform group-hover:scale-110 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0"

      >
        {logo.image ? (
          <img 
            src={logo.image} 
            alt={logo.name} 
            className="h-12 w-auto"
          />
        ) : logo.icon ? (
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl" style={{ color: logo.color }}>{logo.icon}</span>
            {logo.text && <span className="text-xl font-bold tracking-tighter">{logo.text}</span>}
          </div>
        ) : (
          <span className="text-3xl font-serif tracking-widest uppercase">{logo.text}</span>
        )}
      </div>
      
      {/* Brand Name */}
      <span className="text-xs font-light tracking-wider uppercase text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-300 font-['Inter',sans-serif] letter-spacing-[0.1em]">
        {logo.name}
      </span>
    </div>
    
    {/* Hover border effect */}
    <div 
      className="absolute inset-0 rounded-xl pointer-events-none group-hover:border-primary/30"
    />
  </motion.div>
);

export default LogoMarquee;
