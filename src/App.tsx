import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { PROJECTS, Project, Category } from './constants';
import {
  LANGS,
  LanguageProvider,
  PROFILE_BIO,
  useLang,
  useLocalized,
  useT,
  type Localized,
} from './i18n';
import { cn } from './lib/utils';
import profileImage from '../改.png';
import backgroundVideo from '../背景.mp4';

const CATEGORY_KEY: Record<Category, 'categoryAnimation' | 'categoryDesign' | 'categoryClientWork'> = {
  Animation: 'categoryAnimation',
  Design: 'categoryDesign',
  'Client Work': 'categoryClientWork',
};

// --- Components ---

const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const fadeDuration = 0.8;
    video.playbackRate = 0.33;

    const handleTimeUpdate = () => {
      const duration = video.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;
      const timeLeft = duration - video.currentTime;
      if (timeLeft <= fadeDuration) {
        container.classList.add('bg-video-ending');
      } else {
        container.classList.remove('bg-video-ending');
      }
    };

    const handleSeeked = () => {
      if (video.currentTime < 0.1) {
        container.classList.remove('bg-video-ending');
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('seeked', handleSeeked);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, []);

  return (
    <div ref={containerRef} id="bg-video-container" className="bg-video-container">
      <video
        ref={videoRef}
        src={backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        className="bg-video-content"
      />
    </div>
  );
};

const LanguageSwitch = () => {
  const { lang, setLang } = useLang();
  const t = useT();

  return (
    <div
      className="flex items-center gap-3 text-xs tracking-widest pointer-events-auto"
      role="group"
      aria-label={t('langSwitchLabel')}
    >
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-current={lang === code}
          className={cn(
            'transition-opacity duration-500 hover:opacity-100',
            lang === code
              ? 'opacity-100 underline underline-offset-[6px] decoration-1'
              : 'opacity-40',
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const t = useT();

  const navLinks = [
    { label: t('navWorks'), path: '/' },
    { label: t('navProfile'), path: '/profile' },
    { label: t('navContact'), path: '/contact' },
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

  const nav = (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center text-white pointer-events-none">
      <Link to="/" className="text-lg md:text-2xl font-display font-semibold tracking-tighter hover:opacity-50 transition-opacity duration-500 pointer-events-auto">
        LYU JIACHUN
      </Link>

      <div className="flex items-center gap-5 md:gap-8">
        <LanguageSwitch />

        {/* Menu Toggle - Always visible for "sidebar" feel */}
        <button
          className="z-50 p-2 hover:opacity-50 transition-opacity duration-500 pointer-events-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

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
            <div className="fixed inset-0 flex items-center justify-center">
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
                        "display-cjk text-3xl md:text-5xl font-display italic hover:tracking-widest transition-all duration-700",
                        location.pathname === link.path && "underline underline-offset-[12px] decoration-1"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  if (typeof document === 'undefined') return nav;
  return createPortal(nav, document.body);
};

const ProjectCard = ({ project, index }: { project: Project; index: number; key?: string | number }) => {
  const t = useT();
  const l = useLocalized();
  const isIcon = project.thumbnailStyle === 'icon';
  const title = l(project.title);

  const caption = (
    <>
      <p className="text-xs uppercase tracking-widest mb-2">{t(CATEGORY_KEY[project.category])}</p>
      <h3 className="display-cjk text-3xl font-display italic">{title}</h3>
      <p className="text-sm mt-2 opacity-80">{project.year}</p>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        'group relative overflow-hidden',
        // Icon cards carry a lot of empty space, so they stay shorter on phones.
        isIcon ? 'aspect-[5/4] md:aspect-[4/5]' : 'aspect-[4/5] bg-zinc-100',
      )}
    >
      <Link to={`/project/${project.id}`}>
        {isIcon ? (
          // An icon is already a finished graphic: it only grows on hover. No scrim,
          // no blur — those exist to make text readable over a photo.
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={project.thumbnail}
              alt={title}
              style={{ ['--icon-scale' as string]: String(project.thumbnailScale ?? 0.66) }}
              className="icon-thumb object-contain transition-transform duration-700 group-hover:scale-[1.08]"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-6 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {caption}
            </div>
          </div>
        ) : (
          <>
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
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            )}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 text-white backdrop-blur-sm [&>*]:translate-y-4 [&>*]:transition-transform [&>*]:duration-700 group-hover:[&>*]:translate-y-0">
              {caption}
            </div>
          </>
        )}
      </Link>
    </motion.div>
  );
};

// --- Pages ---

const HomePage = () => {
  const t = useT();

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
          {t('homeTagline')}
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
          className="group relative aspect-[2/1] md:aspect-[4/5] overflow-hidden flex flex-col items-start justify-center pl-12"
        >
          <div className="text-left">
            <h3 className="text-3xl font-display italic mb-2">
              {t('comingSoon')} <span className="font-sans not-italic ml-2 text-2xl">：）</span>
            </h3>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const t = useT();
  const l = useLocalized();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div className="pt-32 px-12">{t('notFound')}</div>;

  const title = l(project.title);
  const isIcon = project.thumbnailStyle === 'icon';
  const heroImage = isIcon && project.images.length > 0 ? project.images[0] : project.thumbnail;
  const galleryImages = isIcon && project.images.length > 0 ? project.images.slice(1) : project.images;
  // Phone screenshots are tall; three across keeps them from swallowing the page.
  const tallGallery = isIcon;

  return (
    <motion.div
      id="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto transition-all duration-700"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest mb-12 hover:opacity-50">
        <ArrowRight className="rotate-180" size={16} /> {t('backToWorks')}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        <div className="lg:col-span-8">
          {project.videoUrl ? (
            <div className="aspect-video bg-black mb-8">
              <iframe
                src={project.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={title}
              />
            </div>
          ) : (
            <img
              src={heroImage}
              alt={title}
              className="w-full aspect-video object-cover mb-8"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}

          <div className={cn('grid gap-4', tallGallery ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2')}>
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} ${i + 1}`}
                className={cn('w-full', isIcon ? 'h-auto object-contain' : 'aspect-[4/3] object-cover')}
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <p className="text-xs uppercase tracking-widest text-muted mb-2">
            {t(CATEGORY_KEY[project.category])} / {project.year}
            {project.duration && ` / ${project.duration}`}
          </p>
          <h1 className="display-cjk text-5xl font-display italic mb-6">{title}</h1>

          <div className="space-y-8">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-2">{t('sectionDescription')}</h4>
              <p className="text-muted leading-relaxed">{l(project.description)}</p>
            </div>

            {project.technique && (
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-2">{t('sectionTechnique')}</h4>
                <p className="text-muted">{l(project.technique)}</p>
              </div>
            )}

            {project.details && (
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-2">{t('sectionHighlights')}</h4>
                <ul className="list-disc list-outside pl-5 text-muted space-y-2 leading-relaxed">
                  {l<string[]>(project.details as Localized<string[]>).map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {(project.externalLink || project.note) && (
              <div>
                {project.externalLink && (
                  <a
                    href={project.externalLink.url}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border border-border px-4 py-2 hover:opacity-70 transition-opacity duration-500"
                  >
                    {l(project.externalLink.label)}
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {project.note && (
                  <p className="text-xs text-muted mt-3 leading-relaxed">{l(project.note)}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProfilePage = () => {
  const t = useT();
  const l = useLocalized();
  const films = PROJECTS.filter(p => p.category === 'Animation');

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
            alt={t('profileName')}
            className="w-full h-full object-cover"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div>
          <h1 className="display-cjk text-5xl md:text-6xl font-display mb-2">{t('profileName')}</h1>
          <h2 className="display-cjk text-3xl font-serif italic mb-8">{t('profileNameSub')}</h2>

          <div className="space-y-6 text-muted leading-relaxed">
            {l(PROFILE_BIO).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="text-xs uppercase tracking-widest font-bold mb-6">{t('profileMainWorks')}</h3>
            <ul className="space-y-4">
              {films.map(film => (
                <li key={film.id} className="flex justify-between items-end gap-4 border-b border-border pb-2">
                  <Link
                    to={`/project/${film.id}`}
                    className="display-cjk font-display italic text-xl hover:opacity-60 transition-opacity duration-500"
                  >
                    {l(film.title)}
                  </Link>
                  <span className="text-xs text-muted shrink-0">{film.year.split('.')[0]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

const ContactPage = () => {
  const t = useT();

  return (
    <motion.main
      id="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-6 md:px-12 md:pt-0 lg:pt-64 min-h-screen flex flex-col justify-start md:justify-center lg:justify-start max-w-4xl mx-auto transition-all duration-700"
    >
      <h1 className="contact-title display-cjk text-5xl md:text-8xl font-display italic tracking-tighter mb-16 md:mb-24">
        {t('contactTitle')} <span className="contact-emoticon font-sans not-italic ml-2 md:ml-4 text-4xl md:text-7xl">：）</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-12">
          <a href="mailto:junesui00@gmail.com" className="block">
            <p className="text-xs uppercase tracking-widest text-muted mb-2">{t('contactEmail')}</p>
            <p className="text-xl font-serif contact-link">
              junesui00@gmail.com
            </p>
          </a>

          <div className="block">
            <p className="text-xs uppercase tracking-widest text-muted mb-2">{t('contactPhone')}</p>
            <p className="text-xl font-serif contact-link">+81 080-7288-7746</p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="block">
            <p className="text-xs uppercase tracking-widest text-muted mb-2">{t('contactSocial')}</p>
            <div className="flex gap-8">
              <a href="https://www.instagram.com/kajun_nnn?igsh=MW5tY3R5cndpc3hmdg%3D%3D&utm_source=qr" className="text-base font-serif contact-link">Instagram</a>
              <a href="https://vimeo.com/user136057454?fl=pp&fe=sh" className="text-base font-serif contact-link">Vimeo</a>
              <a href="https://line.me/ti/p/JloExy_RXt" className="text-base font-serif contact-link">LINE</a>
            </div>
          </div>

          <div className="block">
            <p className="text-xs uppercase tracking-widest text-muted mb-2">{t('contactLocation')}</p>
            <p className="text-xl font-serif contact-link">{t('contactCity')}</p>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

const AppShell = () => {
  const location = useLocation();
  const t = useT();
  const isProjectPage = location.pathname.startsWith('/project/');
  const isHomePage = location.pathname === '/';

  return (
    <div
      className={cn(
        "min-h-screen bg-bg selection:bg-ink selection:text-bg",
        isProjectPage && "project-page",
        isHomePage && "home-page"
      )}
    >
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
        <p>{t('footerRights')}</p>
        <div className="flex gap-8">
          <Link to="/" className="hover:text-ink transition-colors duration-500">{t('navWorks')}</Link>
          <Link to="/profile" className="hover:text-ink transition-colors duration-500">{t('navProfile')}</Link>
          <Link to="/contact" className="hover:text-ink transition-colors duration-500">{t('navContact')}</Link>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppShell />
      </Router>
    </LanguageProvider>
  );
}
