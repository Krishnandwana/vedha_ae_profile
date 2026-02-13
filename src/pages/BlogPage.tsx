import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Blog from '@/components/Blog';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-20"
      >
        <Blog />
      </motion.main>
      <Footer />
    </div>
  );
};

export default BlogPage;
