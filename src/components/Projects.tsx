import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const projects = [
  {
    category: "Machine Learning / AI",
    items: [
      {
        title: "AI-BagCounter",
        tag: "Computer Vision",
        desc: "Automated jute sack counting system using YOLOv8 and ByteTrack on CCTV footage for logistics.",
        link: "https://github.com/avy2025/AI-BagCounter",
        isGitHub: true
      },
      {
        title: "BeyondWords",
        tag: "NLP • Accessibility",
        desc: "AI-powered real-time platform featuring multilingual live subtitles and sign language interpretation.",
        link: "https://github.com/avy2025/BeyondWords",
        isGitHub: true
      },
      {
        title: "LiveTranslateSubs",
        tag: "Speech-to-Text",
        desc: "Real-time speech translation web app built with Flask, Socket.IO, and OpenAI Whisper.",
        link: "https://github.com/avy2025/LiveTranslateSubs",
        isGitHub: true
      },
      {
        title: "RecruitDesk",
        tag: "ML • Recruitment",
        desc: "AI system to rank resumes based on semantic match with job descriptions.",
        link: "https://github.com/avy2025/RecruitDesk",
        isGitHub: true
      }
    ]
  },
  {
    category: "Full-Stack Development",
    items: [
      {
        title: "TaskPilotAI",
        tag: "AI Agents • Web",
        desc: "Autonomous task agent that researches and streams thought processes to a custom dashboard.",
        link: "https://github.com/avy2025/TaskPilotAI-",
        isGitHub: true
      },
      {
        title: "VidaForge",
        tag: "Life/Income OS",
        desc: "AI-powered OS for optimizing daily energy, task planning, and sustainable income building.",
        link: "https://github.com/avy2025/VidaForge",
        isGitHub: true
      },
      {
        title: "Code Visualizer",
        tag: "Java • Visualization",
        desc: "Tool that demonstrates step-by-step code execution and variable state changes.",
        link: "https://github.com/avy2025/Code-Execution-Visualizer",
        isGitHub: true
      }
    ]
  },
  {
    category: "Frontend & UI/UX",
    items: [
      {
        title: "HRM Solutions",
        tag: "Business Portfolio",
        desc: "Premium HR Consulting & Executive Search platform built with React, Tailwind, and Motion.",
        link: "https://hrmanagementsolution.netlify.app/",
        isGitHub: false
      },
      {
        title: "TradeMind AI",
        tag: "Trading UI",
        desc: "Futuristic, AI-themed trading assistant interface focused on high-quality user experience.",
        link: "https://github.com/avy2025/TradeMind-AI",
        isGitHub: true
      },
      {
        title: "Gemini-AI Bot",
        tag: "JS • Chatbot",
        desc: "Interactive and responsive AI chatbot interface using vanilla JavaScript.",
        link: "https://github.com/avy2025/Gemini-AI-Chatbot",
        isGitHub: true
      }
    ]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-syne font-extrabold text-white mb-6 uppercase tracking-tighter"
          >
            FEATURED <br />
            <span className="text-primary">PROJECTS</span>
          </motion.h2>
          <p className="text-text-muted text-xl max-w-2xl font-medium">
            Categorized collection of my technical work across AI, Web, and Systems.
          </p>
        </div>

        {projects.map((section, idx) => (
          <div key={idx} className="mb-24 last:mb-0">
            <h3 className="text-sm font-syne font-bold text-text-muted uppercase tracking-[0.4em] mb-12 border-b border-white/5 pb-4">
              {section.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((project, i) => (
                <motion.a
                  key={i}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative glass p-8 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 p-8 text-white/20 group-hover:text-primary/50 transition-colors">
                    {project.isGitHub ? <GithubIcon size={40} /> : <ExternalLink size={40} />}
                  </div>
                  
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 border border-primary/20">
                    {project.tag}
                  </span>
                  
                  <h4 className="text-2xl font-syne font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-text-muted leading-relaxed font-medium mb-8">
                    {project.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                    {project.isGitHub ? "View GitHub" : "Visit Site"} 
                    <span className="text-primary">→</span>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
