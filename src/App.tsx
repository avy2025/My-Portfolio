import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Background noise texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://res.cloudinary.com/dzvxsgo77/image/upload/v1647412151/noise_ovvjox.png')]" />
    </div>
  );
}

export default App;
