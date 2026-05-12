import { motion } from 'framer-motion';

const skills = [
  "Machine Learning", "Deep Learning", "LLMs & RAG", "Computer Vision", 
  "Natural Language Processing", "Full-Stack Development", "Python", 
  "TypeScript", "React", "Next.js", "AI in Healthcare", "Accessibility Tech"
];

export const Marquee = () => {
  return (
    <section className="py-20 border-y border-white/5 overflow-hidden bg-white/[0.02]">
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex items-center gap-12 px-6"
        >
          {[...skills, ...skills].map((skill, i) => (
            <div 
              key={i} 
              className="text-4xl md:text-6xl font-syne font-extrabold text-white/10 hover:text-[#FB3640]/40 transition-colors cursor-default uppercase tracking-tighter"
            >
              {skill} <span className="text-[#FB3640] ml-12">/</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
