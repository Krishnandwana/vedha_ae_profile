import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 'step-1',
    number: '01',
    phase: 'Phase 01',
    title: 'ANALYZE',
    headline: 'We understand your data and business logic',
    description: 'Before we build any AI solution, we deeply analyze your business processes, data structures, and operational challenges. We identify the best opportunities for intelligent automation and AI enhancement.',
    deliverables: 'Key Deliverables: Data Audit, Process Analysis, AI Opportunity Assessment.',
  },
  {
    id: 'step-2',
    number: '02',
    phase: 'Phase 02',
    title: 'ARCHITECT',
    headline: 'We design intelligent systems, not just code',
    description: 'We craft a comprehensive AI architecture that integrates seamlessly with your existing systems. Every AI model and automation workflow is designed for scalability and performance.',
    deliverables: 'Key Deliverables: AI Architecture Blueprint, Model Selection, Integration Strategy.',
  },
  {
    id: 'step-3',
    number: '03',
    phase: 'Phase 03',
    title: 'PROTOTYPE',
    headline: 'Before full deployment, we prove AI effectiveness',
    description: 'We build and test AI prototypes to validate performance and ensure they meet your business requirements. Proof of concepts help us refine the approach and demonstrate value.',
    deliverables: 'Key Deliverables: AI Prototype, Performance Testing, Validation Results.',
  },
  {
    id: 'step-4',
    number: '04',
    phase: 'Phase 04',
    title: 'DEVELOP',
    headline: 'AI solutions are only as good as their implementation',
    description: 'Our team builds production-ready AI systems with robust training pipelines, intelligent automation, and seamless integration. Every component is crafted for reliability and intelligence.',
    deliverables: 'Key Deliverables: Production AI Models, Automation Systems, Integration APIs.',
  },
  {
    id: 'step-5',
    number: '05',
    phase: 'Phase 05',
    title: 'OPTIMIZE',
    headline: 'What learns, we make it learn better',
    description: 'We continuously monitor, retrain, and optimize your AI systems as your business evolves. Performance analytics and model improvements keep your AI competitive and effective.',
    deliverables: 'Key Deliverables: Performance Monitoring, Model Retraining, Optimization Reports.',
  },
];

const Approach = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const stepIndex = Math.min(Math.floor(progress * (steps.length + 0.5)), steps.length - 1);
      setCurrentStep(stepIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const currentStepData = steps[currentStep];

  return (
    <section 
      ref={sectionRef} 
      id="approach" 
      className="relative bg-background"
    >
      {/* Sticky Split Screen Container */}
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row overflow-hidden">
        {/* Left Pane: Visual Anchor - 35% width */}
        <div className="w-full lg:w-[35%] h-full flex items-center justify-center px-6 relative border-r border-border/20 z-10 bg-background">
          {/* Abstract Background Glow */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          
          <motion.div 
            className="relative z-10 flex flex-col gap-2"
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground text-sm font-mono tracking-widest uppercase mb-4">
              {currentStepData.phase}
            </p>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tighter text-primary">
              {currentStepData.title}
            </h1>
            <div className="h-1 w-24 bg-primary mt-6 rounded-full shadow-[0_0_15px_rgba(229,255,0,0.6)]" />
          </motion.div>
        </div>

        {/* Right Pane: Content Stage - 65% width */}
        <div className="w-full lg:w-[65%] h-full relative bg-background flex items-center justify-center p-6 lg:p-16">
          {/* Background Decoration */}
          <div className="absolute right-0 top-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
          </div>

          {/* Glassmorphic Card */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-2xl p-8 lg:p-12 shadow-2xl shadow-black/50 overflow-hidden group hover:border-primary/30 transition-all duration-500"
            style={{
              background: 'rgba(30, 30, 30, 0.4)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Top decoration line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <div className="flex flex-col gap-8 relative z-10">
              {/* Header with Step Badge */}
              <div className="flex items-center justify-between w-full">
                <span className="inline-flex items-center justify-center bg-primary text-primary-foreground font-mono text-xs font-bold px-3 py-1 rounded-md">
                  {currentStepData.number}/05
                </span>
                <span className="text-muted-foreground text-sm font-medium tracking-wide">
                  {currentStepData.phase}
                </span>
              </div>

              {/* Main Headline */}
              <h3 className="text-3xl md:text-[2.5rem] leading-[1.1] font-bold text-foreground tracking-tight">
                {currentStepData.headline.split(' ').map((word, i, arr) => {
                  const isHighlight = arr.indexOf('shoes') === i || arr.indexOf('strategy') === i || arr.indexOf('go') === i || arr.indexOf('execution') === i || arr.indexOf('up') === i;
                  return (
                    <span key={i}>
                      {isHighlight ? (
                        <span className="text-primary underline decoration-2 underline-offset-4 decoration-white/20">
                          {word}
                        </span>
                      ) : (
                        word
                      )}
                      {i < arr.length - 1 ? ' ' : ''}
                    </span>
                  );
                })}
              </h3>

              {/* Body Text */}
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  {currentStepData.description}
                </p>
                <p className="text-muted-foreground/70 text-sm leading-relaxed">
                  {currentStepData.deliverables}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4">
                <button className="group/btn flex items-center gap-2 text-foreground text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">
                  Explore Process
                  <ArrowRight className="text-lg transition-transform group-hover/btn:translate-x-1" size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vertical Progress Bar */}
        <div className="absolute right-0 top-0 bottom-0 w-16 hidden lg:flex flex-col items-center justify-center z-20 border-l border-border/30 bg-background/50 backdrop-blur-sm">
          <div className="h-[60%] w-[2px] bg-white/10 rounded-full relative">
            {/* Progress Indicator - Simple position based on current step */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-[4px] h-[20%] rounded-full shadow-[0_0_10px_#e6ff00] bg-primary transition-all duration-500"
              style={{
                top: `${(currentStep / (steps.length - 1)) * 80}%`
              }}
            />
          </div>
          <div className="mt-8 transform -rotate-90 origin-center whitespace-nowrap text-xs font-mono text-primary tracking-widest uppercase">
            Scroll
          </div>
        </div>
      </div>

      {/* Spacer for scrollable height */}
      <div style={{ height: `${steps.length * 100}vh` }} />
    </section>
  );
};

export default Approach;
