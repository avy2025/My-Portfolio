import { motion } from 'framer-motion';

export const Experience = () => {
  const experiences = [
    {
      date: "2023 - Present",
      title: "President @ ACE-DTC",
      description: "Leading the official technical society of Delhi Technical Campus. Organizing national-level hackathons, tech workshops, and community-building initiatives for 500+ students."
    },
    {
      date: "Currently",
      title: "B.Tech in Artificial Intelligence & Machine Learning",
      description: "Delhi Technical Campus (GGSIPU). Focusing on advanced algorithms, data structures, and the intersection of AI with real-world systems."
    }
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-syne font-extrabold text-white mb-6"
          >
            EXPERIENCE <br />
            <span className="text-primary">& LEADERSHIP</span>
          </motion.h2>
          <p className="text-text-muted text-xl max-w-2xl font-medium">
            Academic journey and professional contributions
          </p>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`relative mb-20 md:w-1/2 ${i % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:ml-auto'}`}
            >
              {/* Dot */}
              <div className="absolute left-[-32px] md:left-auto md:right-[-41px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 box-content" 
                   style={i % 2 !== 0 ? { left: 'auto', right: 'auto', marginLeft: '-41px' } : {}}
              />
              
              <div className="glass p-8 rounded-2xl hover:border-primary/40 transition-all duration-300">
                <span className="text-primary font-syne font-bold text-sm uppercase tracking-widest mb-4 block">
                  {exp.date}
                </span>
                <h3 className="text-2xl font-syne font-bold text-white mb-4">
                  {exp.title}
                </h3>
                <p className="text-text-muted leading-relaxed font-medium">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
