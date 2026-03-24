import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, Phone, Instagram, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PROJECTS, Project } from './constants';
import { cn } from './lib/utils';
import profileImage from '../改.png';

// --- Components ---

const BackgroundVideo = () => {
  return (
    <div id="bg-video-container" className="bg-video-container">
      <video
        src="https://assets.mixkit.co/videos/preview/mixkit-blue-crystal-like-light-leak-4522-large.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="bg-video-content"
      />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Works', path: '/' },
    { name: 'Profile', path: '/profile' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const container = document.getElementById('bg-video-container');
    const mainContent = document.getElementById('main-content');
    if (isOpen) {
      container?.classList.add('menu-open');
      mainContent?.classList.add('blur-sm', 'opacity-50', 'pointer-events-none');
    } else {
      container?.classList.remove('menu-open');
      mainContent?.classList.remove('blur-sm', 'opacity-50', 'pointer-events-none');
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center text-white pointer-events-none">
      <Link to="/" className="text-lg md:text-2xl font-display font-semibold tracking-tighter hover:opacity-50 transition-opacity duration-500 pointer-events-auto">
        LYU JIACHUN
      </Link>
      
      {/* Menu Toggle - Always visible for "sidebar" feel */}
      <button 
        className="z-50 p-2 hover:opacity-50 transition-opacity duration-500 pointer-events-auto" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-black/20 backdrop-blur-xl text-white flex flex-col items-center justify-center z-40 pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ 
                    delay: i * 0.1 + 0.2, 
                    duration: 0.8, 
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                  className="pointer-events-auto"
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-3xl md:text-5xl font-display italic hover:tracking-widest transition-all duration-700",
                      location.pathname === link.path && "underline underline-offset-[12px] decoration-1"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number; key?: string | number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative aspect-[4/5] overflow-hidden bg-zinc-100"
    >
      <Link to={`/project/${project.id}`}>
        {project.videoThumbnail ? (
          <video
            src={project.videoThumbnail}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 text-white backdrop-blur-sm">
          <p className="text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{project.category}</p>
          <h3 className="text-3xl font-display italic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">{project.title}</h3>
          <p className="text-sm mt-2 opacity-80 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-150">{project.year}</p>
        </div>
      </Link>
    </motion.div>
  );
};

// --- Pages ---

const HomePage = () => {
  return (
    <main id="main-content" className="pt-32 pb-24 px-6 md:px-12 transition-all duration-700">
      <header className="mb-24 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-7xl font-display leading-[0.9] tracking-tighter mb-8"
        >
          PORT<br />FOLIO
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-muted max-w-xl font-serif italic"
        >
          Lyu Jiachun — Animation artist and designer exploring the boundaries of hand-drawn media, loops, and digital interaction.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: PROJECTS.length * 0.1 }}
          className="group relative aspect-[4/5] overflow-hidden flex flex-col items-start justify-center pl-12"
        >
          <div className="text-left">
            <h3 className="text-3xl font-display italic mb-2">
              Coming Soon <span className="font-sans not-italic ml-2 text-2xl">：）</span>
            </h3>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div className="pt-32 px-12">Project not found.</div>;

  return (
    <motion.div 
      id="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto transition-all duration-700"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest mb-12 hover:opacity-50">
        <ArrowRight className="rotate-180" size={16} /> Back to Works
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        <div className="lg:col-span-8">
          {project.videoUrl ? (
            <div className="aspect-video bg-black mb-8">
              <iframe 
                src={project.videoUrl} 
                className="w-full h-full"
                allowFullScreen
                title={project.title}
              />
            </div>
          ) : (
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full aspect-video object-cover mb-8"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt={`${project.title} ${i}`} 
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <p className="text-xs uppercase tracking-widest text-muted mb-2">{project.category} / {project.year}</p>
          <h1 className="text-5xl font-display italic mb-6">{project.title}</h1>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Description</h4>
              <p className="text-muted leading-relaxed">{project.description}</p>
            </div>

            {project.technique && (
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Technique</h4>
                <p className="text-muted">{project.technique}</p>
              </div>
            )}

            {project.details && (
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Key Highlights</h4>
                <ul className="list-disc list-inside text-muted space-y-2">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProfilePage = () => {
  return (
    <motion.main 
      id="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto transition-all duration-700"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="aspect-[3/4] overflow-hidden bg-zinc-100">
          <img 
            src={profileImage} 
            alt="Lyu Jiachun" 
            className="w-full h-full object-cover"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        
        <div>
          <h1 className="text-6xl font-display mb-2">Lyu Jiachun</h1>
          <h2 className="text-3xl font-serif italic mb-8">吕 家淳</h2>
          
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              Born in 2000, Lyu Jiachun is an animation artist whose work explores the intersection of traditional hand-drawn techniques and digital experimentation.
            </p>
            <p>
              His practice often centers on philosophical themes such as "Eternal Return" and the passage of time, translated through experimental formats like one-cut animations and loop structures.
            </p>
            <p>
              His debut work "When the Light Off" (2022) received international recognition, being nominated for several film festivals including the Animur Film Festival and kinovertikal. He continues to push the boundaries of spatial expression and narrative through a multidisciplinary approach involving 3D assistance, rotoscoping, and UI design.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Main Works</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-end border-b border-border pb-2">
                <span className="font-display italic text-xl">Go Around Mobius</span>
                <span className="text-xs text-muted">2025</span>
              </li>
              <li className="flex justify-between items-end border-b border-border pb-2">
                <span className="font-display italic text-xl">In the Box</span>
                <span className="text-xs text-muted">2023</span>
              </li>
              <li className="flex justify-between items-end border-b border-border pb-2">
                <span className="font-display italic text-xl">When the Light Off</span>
                <span className="text-xs text-muted">2021</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

const ContactPage = () => {
  return (
    <motion.main 
      id="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-6 md:px-12 md:pt-0 lg:pt-64 min-h-screen flex flex-col justify-start md:justify-center lg:justify-start max-w-4xl mx-auto transition-all duration-700"
    >
      <h1 className="text-5xl md:text-8xl font-display italic tracking-tighter mb-16 md:mb-24 whitespace-nowrap">
        Get in touch <span className="font-sans not-italic ml-4 text-4xl md:text-7xl">：）</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-12">
          <a href="mailto:junesui00@gmail.com" className="block">
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Email</p>
            <p className="text-xl font-serif contact-link">
              junesui00@gmail.com
            </p>
          </a>
          
          <div className="block">
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Phone</p>
            <p className="text-xl font-serif contact-link">+81 080-7288-7746</p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="block">
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Social</p>
            <div className="flex gap-8">
              <a href="#" className="text-base font-serif contact-link">Instagram</a>
              <a href="#" className="text-base font-serif contact-link">Vimeo</a>
              <a href="#" className="text-base font-serif contact-link">LinkedIn</a>
            </div>
          </div>
          
          <div className="block">
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Location</p>
            <p className="text-xl font-serif contact-link">Kyoto, Japan</p>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg selection:bg-ink selection:text-bg">
        <BackgroundVideo />
        <div className="top-gradient-mask" />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <footer className="px-6 md:px-12 py-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest text-muted">
          <p>© 2026 Lyu Jiachun. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-ink transition-colors duration-500">Works</Link>
            <Link to="/profile" className="hover:text-ink transition-colors duration-500">Profile</Link>
            <Link to="/contact" className="hover:text-ink transition-colors duration-500">Contact</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}
