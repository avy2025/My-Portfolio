import { motion } from 'framer-motion';
import { Button } from './Button';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export const Contact = () => {
  const socials = [
    { name: 'LinkedIn', icon: <LinkedinIcon size={20} />, href: 'https://www.linkedin.com/in/ranjan-thakur-615b08306/' },
    { name: 'GitHub', icon: <GithubIcon size={20} />, href: 'https://github.com/avy2025' },
    { name: 'Instagram', icon: <InstagramIcon size={20} />, href: 'https://www.instagram.com/thakur.ranjan25/' },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-syne font-extrabold text-white mb-8 tracking-tighter">
            GET IN <span className="text-primary italic">TOUCH</span>
          </h2>
          <p className="text-text-muted text-xl max-w-2xl mx-auto font-medium mb-12">
            Let's collaborate on the future of AI. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <a href="mailto:thakur.ranjan25@gmail.com">
            <Button size="lg" className="rounded-full px-12 group">
              <Mail className="mr-3 group-hover:rotate-12 transition-transform" />
              Say Hello
            </Button>
          </a>
        </motion.div>

        <div className="flex justify-center gap-6 mb-24">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="p-4 rounded-2xl glass text-text-muted hover:text-primary hover:border-primary transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <footer className="pt-16 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-text-muted font-medium text-sm">
            <p>&copy; 2025 Ranjan Thakur. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Built with <span className="text-primary">♥</span> and Code.
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px]">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px]">Terms of Use</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
