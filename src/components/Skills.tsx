import { motion } from 'framer-motion';
import { Brain, Code, Rocket } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: ["System Design", "LLMs & RAG", "Computer Vision (YOLOv8)", "Deep Learning", "Natural Language Processing"]
    },
    {
      title: "Full-Stack Development",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python (Flask/Django)", "TypeScript / JavaScript", "HTML5 & Modern CSS", "System Architecture", "Real-time Systems"]
    },
    {
      title: "Interests & Focus",
      icon: <Rocket className="w-8 h-8" />,
      skills: ["AI in Healthcare", "Accessibility Tech", "Intelligent Automation", "Backend Engineering", "Scaling Applications"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-syne font-extrabold text-white mb-6 uppercase"
          >
            Core <span className="text-primary">Skills</span>
          </motion.h2>
          <p className="text-text-muted text-xl max-w-2xl mx-auto font-medium">
            Technical expertise in AI/ML and Software Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[2rem] border-white/5 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="mb-8 text-primary p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-2xl font-syne font-bold text-white mb-8">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-3 text-text-muted font-medium hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
