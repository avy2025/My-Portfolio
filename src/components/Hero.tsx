import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 15]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FB3640]/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#FB3640]/5 rounded-full blur-[150px]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">Available for new projects</span>
          </div>

          <h2 className="text-xl md:text-2xl font-syne font-bold text-[#FB3640] mb-4 uppercase tracking-widest">
            HI, I'M
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-syne font-extrabold text-white leading-[0.9] mb-8 tracking-tighter">
            RANJAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">THAKUR</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-muted max-w-xl mb-12 font-medium leading-relaxed">
            AI/ML Engineer & Full Stack Developer.
          </p>

          <div className="text-sm text-text-muted mb-12 flex flex-col gap-2">
            <p>B.Tech AI/ML @ Delhi Technical Campus</p>
            <p className="flex items-center gap-2">
              India 🇮🇳 <span className="text-white/20 text-xs">•</span> Open to internships, collaborations & hackathons
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg">Explore My Work</Button>
            <Button variant="outline" size="lg">Get In Touch</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ y: y2, rotate }}
          className="relative perspective-1000 hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square max-w-[600px] ml-auto">
            <img 
              src="/assets/avatar/avatar_main.png" 
              alt="Ranjan Thakur"
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(251,54,64,0.3)] transition-transform duration-700 hover:scale-105"
            />
            {/* 3D Glass Card behind avatar */}
            <div className="absolute -inset-10 glass -z-10 rounded-[4rem] rotate-3 opacity-50" />
            <div className="absolute -inset-4 glass -z-10 rounded-[3rem] -rotate-3 opacity-30" />
          </div>
          
          {/* Floating Element 1 */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-10 glass p-4 rounded-xl shadow-2xl z-20"
          >
            <div className="text-[#FB3640] font-syne font-bold text-2xl">AI/ML</div>
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 -right-5 glass p-4 rounded-xl shadow-2xl z-20"
          >
            <div className="text-white font-syne font-bold text-lg">Full-Stack</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
