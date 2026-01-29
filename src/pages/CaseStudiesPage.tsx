import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, Users, Download } from 'lucide-react';

const allCaseStudies = [
  {
    title: 'E-commerce Brand Transformation',
    category: 'Web + Marketing',
    date: 'Nov 2024',
    result: '+250% Revenue',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    description: 'Complete digital transformation for a growing e-commerce brand, resulting in significant revenue growth.',
    icon: TrendingUp,
  },
  {
    title: 'SaaS Platform Launch',
    category: 'Product Development',
    date: 'Oct 2024',
    result: '10K Users in 30 Days',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
    description: 'Successfully launched a SaaS platform with rapid user acquisition and engagement strategies.',
    icon: Users,
  },
  {
    title: 'B2B Lead Generation Campaign',
    category: 'Digital Marketing',
    date: 'Sep 2024',
    result: '5x More Qualified Leads',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description: 'Implemented a comprehensive lead generation strategy that quintupled qualified leads.',
    icon: Download,
  },
  {
    title: 'Mobile App Development',
    category: 'Product Development',
    date: 'Aug 2024',
    result: '4.8★ App Rating',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    description: 'Developed a user-centric mobile application with exceptional user ratings and retention.',
    icon: TrendingUp,
  },
  {
    title: 'Brand Identity Redesign',
    category: 'Branding',
    date: 'Jul 2024',
    result: '+180% Brand Recognition',
    image: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&h=600&fit=crop',
    description: 'Complete brand identity overhaul that significantly increased market recognition.',
    icon: TrendingUp,
  },
  {
    title: 'SEO & Content Strategy',
    category: 'Digital Marketing',
    date: 'Jun 2024',
    result: '+400% Organic Traffic',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop',
    description: 'Data-driven SEO strategy that quadrupled organic search traffic within 6 months.',
    icon: TrendingUp,
  },
];

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-20"
      >
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-xs font-medium tracking-wider uppercase text-primary">
                Our Impact
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Real results from real clients. Explore how we've helped businesses transform their digital presence and achieve measurable growth.
            </p>
          </motion.div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-32 px-6 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCaseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.article
                  key={study.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
                  style={{ background: 'rgba(38, 40, 27, 1)' }}
                >
                  <div 
                    className="aspect-[16/10] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${study.image})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  
                  {/* Result Badge */}
                  <div className="absolute top-6 right-6 bg-primary text-background font-bold text-sm px-4 py-2 rounded-lg shadow-lg transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300 flex items-center gap-1">
                    <Icon size={18} />
                    {study.result}
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-muted-foreground text-sm font-medium tracking-wide mb-2 uppercase">{study.category}</p>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {study.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>View Details</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
