import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We work with businesses of all sizes, from startups to enterprises. Our solutions are particularly effective for companies in e-commerce, SaaS, professional services, healthcare, and any organization looking to grow their digital presence.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope. A website can be completed in 4-6 weeks, while comprehensive marketing campaigns typically run for 3-6 months. We always provide a detailed timeline during our initial consultation.',
  },
  {
    question: 'Do you work with existing brands or only new ones?',
    answer: 'Both! We love helping new brands establish their identity from scratch, and we also specialize in refreshing and revitalizing existing brands that need a modern update.',
  },
  {
    question: 'What kind of results can I expect?',
    answer: 'Results vary by project type, but our clients typically see 2-5x improvement in key metrics within 6 months. This includes increased website traffic, higher conversion rates, better engagement, and improved brand recognition.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Absolutely! We offer various support and retainer packages to ensure your digital assets continue to perform. This includes maintenance, updates, ongoing optimization, and strategic consulting.',
  },
  {
    question: 'Can I cancel or change my plan at any time?',
    answer: 'Yes, our plans are flexible. You can upgrade, downgrade, or cancel your plan with 30 days notice. We believe in earning your business through results, not contracts.',
  },
];

const FAQ = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} id="faq" className="py-32 md:py-40 min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto px-6"
      >
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-badge inline-flex mb-6 md:mb-8"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            FAQ
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Frequently asked questions
          </motion.h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="mb-4 rounded-2xl overflow-hidden relative"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.37) 0px 8px 32px 0px, rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(8px) saturate(120%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Subtle theme color tint */}
              <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-gradient-to-tl from-primary/6 via-primary/3 to-transparent rounded-2xl pointer-events-none" />
              
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 md:py-8 flex items-center justify-between text-left relative z-10"
              >
                <span className="font-display font-semibold text-lg text-foreground pr-8">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === index ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' : 'bg-muted/50 text-muted-foreground'
                }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 md:px-8 pb-6 text-muted-foreground leading-relaxed relative z-10">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      );
    };

export default FAQ;
