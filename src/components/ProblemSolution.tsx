import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { useInView } from '@/hooks/useInView';

const allProblems = [
  'Manual tasks consume valuable human resources and time.',
  'Repetitive processes slow down business operations.',
  'Data analysis requires hours of manual work weekly.',
  'Customer support queues overwhelm human agents.',
  'Decision-making lacks data-driven insights and speed.',
  'Scaling operations requires hiring more personnel.',
  'Human errors in data processing impact accuracy.',
  'Complex workflows need intelligent automation solutions.',
  'Customer inquiries lack personalized, instant responses.',
  'Business processes operate without predictive capabilities.',
  'Document processing relies on time-intensive manual review.',
  'Quality control depends on human oversight alone.',
  'Inventory management lacks intelligent forecasting systems.',
  'Customer onboarding processes require extensive human intervention.',
  'Content generation demands significant time investment.',
  'Data patterns remain hidden without advanced analytics.',
  'Communication systems lack intelligent routing and prioritization.',
  'Compliance monitoring requires constant manual oversight.',
  'Performance optimization operates without intelligent insights.',
  'Resource allocation lacks predictive planning capabilities.',
  'Risk assessment relies on outdated manual methodologies.',
  'Customer behavior analysis remains fragmented and reactive.',
  'Operational efficiency suffers from lack of automation.',
  'Business intelligence lacks real-time processing power.',
  'Workflow coordination depends on human intervention.',
  'Data integration operates without intelligent processing.',
  'Security monitoring lacks AI-powered threat detection.',
  'Process optimization requires manual analysis and adjustment.',
  'Customer experience lacks personalization at scale.',
  'Predictive maintenance operates on reactive schedules.',
  'Knowledge management systems lack intelligent search.',
  'Resource planning operates without demand forecasting.',
  'Quality assurance relies entirely on human judgment.',
  'Performance monitoring lacks intelligent anomaly detection.',
  'Business operations lack adaptive, learning systems.',
  'Data processing pipelines require manual intervention.',
  'Customer segmentation operates on static, outdated models.',
  'Competitive analysis lacks real-time market intelligence.',
  'Innovation cycles operate without intelligent experimentation.',
  'Operational costs rise due to inefficient manual processes.',
];

// Split problems into 4 groups for 4 rows
const problemsRow1 = allProblems.slice(0, 10);
const problemsRow2 = allProblems.slice(10, 20);
const problemsRow3 = allProblems.slice(20, 30);
const problemsRow4 = allProblems.slice(30, 40);

interface HoverableProblemProps {
  problem: string;
  uniqueId: string;
  onHover: (id: string | null) => void;
  hoveredId: string | null;
}

const HoverableProblem = ({ problem, uniqueId, onHover, hoveredId }: HoverableProblemProps) => {
  const isHovered = hoveredId === uniqueId;
  const shouldBlur = hoveredId !== null && !isHovered;

  return (
    <motion.a
      href="#contact"
      onMouseEnter={() => onHover(uniqueId)}
      onMouseLeave={() => onHover(null)}
      className={`
        text-sm md:text-base lg:text-lg font-medium whitespace-nowrap cursor-pointer
        transition-all duration-500 ease-in-out
        ${isHovered ? 'text-primary' : 'text-muted-foreground/55'}
        ${shouldBlur ? 'blur-sm opacity-50' : 'blur-0 opacity-100'}
      `}
    >
      {problem}
    </motion.a>
  );
};

interface ScrollingRowProps {
  problems: string[];
  direction: 'forward' | 'reverse';
  rowId: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}

const ScrollingRow = ({ problems, direction, rowId, hoveredId, onHover }: ScrollingRowProps) => {
  const animationClass = direction === 'forward' ? 'animate-marquee' : 'animate-marquee-reverse';
  const isPaused = hoveredId !== null;

  return (
    <div className="relative overflow-hidden">
      <div
        className={`
          flex whitespace-nowrap
          ${animationClass}
          ${isPaused ? '[animation-play-state:paused]' : ''}
        `}
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        {[...Array(5)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center gap-4 md:gap-6 lg:gap-8 px-6 shrink-0">
            {problems.map((problem, index) => {
              const uniqueId = `${rowId}-${setIndex}-${index}`;
              return (
                <HoverableProblem
                  key={uniqueId}
                  problem={problem}
                  uniqueId={uniqueId}
                  onHover={onHover}
                  hoveredId={hoveredId}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProblemSolution = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section ref={ref} id="problem-solution" className="py-32 md:py-40 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        {/* Scrolling Problem Text - Row 1 */}
        <div className="mb-20 md:mb-28 overflow-hidden">
          <ScrollingRow
            problems={problemsRow1}
            direction="forward"
            rowId="row1"
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        </div>

        {/* Scrolling Problem Text - Row 2 */}
        <div className="mb-20 md:mb-28 overflow-hidden">
          <ScrollingRow
            problems={problemsRow2}
            direction="reverse"
            rowId="row2"
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        </div>

        {/* Solution Section - Centered Heading */}
        <div className="container mx-auto px-6 mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="section-title mb-0">
              We understand AI implementation challenges.
              <br />
              <span className="gradient-text">And how to solve them intelligently.</span>
            </h2>
          </motion.div>
        </div>

        {/* Scrolling Problem Text - Row 3 */}
        <div className="mb-20 md:mb-28 overflow-hidden">
          <ScrollingRow
            problems={problemsRow3}
            direction="forward"
            rowId="row3"
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        </div>

        {/* Scrolling Problem Text - Row 4 */}
        <div className="overflow-hidden">
          <ScrollingRow
            problems={problemsRow4}
            direction="reverse"
            rowId="row4"
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ProblemSolution;
