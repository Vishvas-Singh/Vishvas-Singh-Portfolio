import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import './App.css';
import profilePic from './assets/vishvas.jpg';
import AscensionLogo from './assets/Ascension.png';
import ASULogo from './assets/ASU.png';
import TAMIDLogo from './assets/TAMID.png';

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  logo: string;
  bullets: string[];
}

interface Project {
  title: string;
  tech: string;
  description: string;
  github?: string;
}

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  logo: string;
  note?: string;
}

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const INTERESTS = ['Data science and engineering', 'Machine Learning', 'Stats'];

const education: Education[] = [
  {
    degree: 'B.S. in Computer Science (Honors)',
    school: 'Arizona State University',
    location: 'Tempe, AZ',
    period: 'Expected May 2027',
    logo: ASULogo,
    note: 'Barrett, The Honors College · GPA 3.83',
  },
  {
    degree: 'M.S. in Data Science, Analytics, and Engineering (4+1 Accelerated)',
    school: 'Arizona State University',
    location: 'Tempe, AZ',
    period: 'Expected May 2028',
    logo: ASULogo,
  },
];

const experiences: Experience[] = [
  {
    title: 'Data Engineering & Infrastructure Intern',
    company: 'Ascension',
    location: 'Remote',
    period: 'May 2026 – Aug 2026',
    logo: AscensionLogo,
    bullets: [
      'Led optimization of 4 production data pipelines in Airflow and BigQuery supporting data for 15 hospitals by rewriting inefficient SQL stored procedures, reducing runtime by 68% and compute consumption by up to 75%',
      'Developed an Airflow-orchestrated ETL pipeline using medallion architecture, provisioning GCS buckets and BigQuery land/ingest layers for 3 file types and implemented SQL-based schema evolution and deduplication',
      'Improved reliability of 2 production GCP pipelines by redesigning Python/Airflow logic to handle duplicate file runs and empty-source failures, eliminating unnecessary compute spend; deployed through Jenkins CI/CD',
    ],
  },
  {
    title: 'Undergraduate Research Intern',
    company: 'Barrett, The Honors College',
    location: 'Tempe, AZ',
    period: 'Aug 2025 – May 2026',
    logo: ASULogo,
    bullets: [
      'Led data analysis on public policy law across 8 R1 states using difference-in-differences and event-study models',
      'Leveraged Pandas and SQL to clean, normalize, and enrich 100,000+ rows, enhancing data reliability for analysis',
      'Automated Google Scholar profile scraping in Python using Selenium and Beautiful Soup, implementing methods from published research to reduce manual data collection time by 70%',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'TAMID Group, Arizona State University',
    location: 'Tempe, AZ',
    period: 'Jan 2023 – Present',
    logo: TAMIDLogo,
    bullets: [
      'Deployed official club website in TypeScript (hosted on Vercel), used by 25+ members, and streamlined campus recruitment for 400+ freshmen, saving 7 hours per recruitment cycle and cutting application review time by 60%',
      'Engineered scalable frontend architecture with custom React hooks and CSS, enhancing UI/UX and performance',
      'Collaborated in sprints with 5-person team using Git/GitHub and CI workflows, delivering project 3 weeks early',
    ],
  },
];

const projects: Project[] = [
  {
    title: 'Honors Thesis – FinTech Tax Reporting Platform',
    tech: 'TypeScript, React, Excel Automation',
    description:
      'Built 0→1 fintech platform with 6-member cross-functional team to help users navigate GAAP/IFRS tax reporting. Embedded business logic and translated accounting flowcharts into structured frontend UI/UX using TypeScript and React to automate Excel document generation workflows for 5+ modules. Led sprint planning and cross-functional collaboration of 7 teammates, accelerating module delivery by 30%.',
  },
  {
    title: 'Spotify Podcast Data Pipeline',
    tech: 'Python, Apache Airflow, SQLite, XML, Vosk, pydub, REST APIs',
    description:
      'Engineered a fully automated ETL pipeline in Apache Airflow to ingest, store, and process podcast information from an RSS feed, handling daily scheduling and metadata persistence via SQLite. Integrated Vosk speech-to-text with audio preprocessing, achieving >90% transcription accuracy while reducing workload across 100+ episodes.',
    github: 'https://github.com/Vishvas-Singh/Spotify-Podcast_Pipeline',
  },
  {
    title: 'Loan Approval Prediction System',
    tech: 'Python, FastAPI, Scikit-learn, Pandas, Matplotlib, Uvicorn',
    description:
      'Built binary classification model with Support Vector Classifier to predict loan approvals with ~86% accuracy. Applied data cleaning, feature engineering and hyperparameter tuning (GridSearchCV), improving F1-score by 10%. Deployed model using FastAPI with endpoints, Pydantic input validation, and Uvicorn hosting.',
    github: 'https://github.com/Vishvas-Singh/Loan-Approval-Prediction-app',
  },
  {
    title: 'Automated Stock Market and Financial News Tracker',
    tech: 'Python, Alpha Vantage API, HTML, SMTP, Cron Jobs',
    description:
      'Developed automation program using Python to track daily stock market trends and financial news. Integrated Alpha Vantage API to fetch intra-day stock data with API handling, displaying insights with HTML. Automated market-close alerts using SMTP and cron jobs for email notifications, saving 45 minutes/day on research.',
    github: 'https://github.com/Vishvas-Singh/stock-data-report',
  },
  {
    title: 'PostgreSQL Index Performance Analysis',
    tech: 'PostgreSQL, Flask, Python, Faker, psycopg2, HTML/CSS/JavaScript',
    description:
      'Built Flask web application demonstrating database index impact on query performance with 10,000+ records. Implemented side-by-side comparison of indexed vs non-indexed queries, achieving 79.5% faster execution for single table queries and 21.2% improvement for JOIN operations. Automated data generation using Faker library for realistic testing scenarios.',
    github: 'https://github.com/Vishvas-Singh/PostgreSQL-Index-Performance-Analysis',
  },
];

/* ------------------------------------------------------------------ */
/* Animation helpers                                                   */
/* ------------------------------------------------------------------ */

// Fires once when an element scrolls into view.
function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'zoom';
  className?: string;
}) {
  const [ref, visible] = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal reveal-${direction} ${visible ? 'in' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="mb-10">
      <h2 className="font-display text-3xl md:text-4xl font-bold">{children}</h2>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  // Scroll position drives the background parallax (--sy), mobile progress bar and header style.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--sy', String(y));
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      setScrolled(y > 40);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Which section is mid-screen -> fills the side rail.
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(SECTIONS.findIndex((s) => s.id === e.target.id));
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background: flat dot grid that scrolls slower than the content */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="bg-dots parallax absolute inset-0" style={{ backgroundPosition: '0 calc(var(--sy, 0) * -0.3px)' }} />
      </div>

      {/* Mobile scroll progress */}
      <div
        ref={barRef}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-[var(--accent)] z-50 lg:hidden"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* Header */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 border-b ${
          scrolled ? 'bg-[var(--bg)] border-line' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#about" className="font-display text-xl font-bold">
            Vishvas Singh
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold px-4 py-2 rounded-md border border-line bg-panel hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Side rail: fills as you move through the sections */}
      <nav aria-label="Sections" className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-30 h-80">
        <div className="relative h-full w-[2px] bg-[var(--line)]">
          <div
            className="absolute inset-x-0 top-0 h-full origin-top bg-[var(--accent)] transition-transform duration-700 ease-out"
            style={{ transform: `scaleY(${active / (SECTIONS.length - 1)})` }}
          />
          {SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={i === active ? 'true' : undefined}
              className="group absolute flex items-center gap-3"
              style={{ top: `${(i / (SECTIONS.length - 1)) * 100}%`, left: '-5px', transform: 'translateY(-50%)' }}
            >
              <span
                className={`block w-3 h-3 rounded-full border-2 transition-colors duration-500 ${
                  i <= active ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-[var(--bg)] border-[var(--line)]'
                }`}
              />
              <span
                className={`text-sm font-medium transition-opacity duration-300 ${
                  i === active ? 'opacity-100 c-accent' : 'opacity-0 group-hover:opacity-100 c-muted'
                }`}
              >
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      <main className="relative z-10 lg:pl-28">
        {/* Hero */}
        <section id="about" className="min-h-screen flex items-center pt-28 pb-20">
          <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-[1fr_auto] gap-14 items-center">
            <div>
              <Reveal>
                <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05]">Vishvas Singh</h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-4 text-xl md:text-2xl c-muted">
                  <span className="font-semibold text-[var(--text)]">Interests:</span> {INTERESTS.join(', ')}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 text-lg leading-relaxed max-w-xl">
                  I'm a junior at Arizona State University pursuing a B.S. in Computer Science with a 3.83 GPA. I'm passionate
                  about data-driven problem solving, analytics, and building scalable data systems.
                </p>
                <p className="mt-4 text-lg leading-relaxed max-w-xl c-muted">
                  I specialize in data engineering/analytics/science, machine learning, and software development.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://github.com/Vishvas-Singh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold bg-[var(--text)] text-white hover:bg-[var(--accent)] transition-colors"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/vishvas-singh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold border border-line bg-panel hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal direction="zoom" delay={200} className="justify-self-center">
              <div
                className="parallax relative w-56 h-56 md:w-72 md:h-72"
                style={{ transform: 'translate3d(0, calc(var(--sy, 0) * 0.06px), 0)' }}
              >
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border-2 border-[var(--accent)]" />
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-panel border border-line">
                  <img src={profilePic} alt="Vishvas Singh" className="w-full h-full object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <SectionTitle>Education</SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((ed, i) => (
                <Reveal key={ed.degree} delay={i * 120} direction="up" className="h-full">
                  <article className="bg-panel border border-line rounded-md p-6 h-full flex gap-4 hover:border-[var(--accent)] transition-colors">
                    <div className="w-14 h-14 rounded border border-line p-2 flex-shrink-0 flex items-center justify-center bg-white">
                      <img src={ed.logo} alt={`${ed.school} logo`} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold leading-snug">{ed.degree}</h3>
                      <p className="c-accent font-medium mt-1">{ed.school}</p>
                      <p className="text-sm c-muted mt-2">
                        {ed.location} &middot; {ed.period}
                      </p>
                      {ed.note && <p className="text-sm c-muted mt-1">{ed.note}</p>}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <SectionTitle>Professional experience</SectionTitle>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <Reveal key={exp.company} direction={i % 2 === 0 ? 'right' : 'left'}>
                  <article className="bg-panel border border-line rounded-md p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-5">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded border border-line p-2 flex-shrink-0 flex items-center justify-center bg-white">
                          <img src={exp.logo} alt={`${exp.company} logo`} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold">{exp.title}</h3>
                          <p className="c-accent font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="sm:text-right text-sm c-muted">
                        <p>{exp.location}</p>
                        <p>{exp.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 leading-relaxed">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <SectionTitle>Featured projects</SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 120} className="h-full">
                  <article className="bg-panel border border-line rounded-md p-6 h-full flex flex-col hover:border-[var(--accent)] transition-colors">
                    <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.split(', ').map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-sm border border-line c-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="leading-relaxed mb-5 flex-grow">{p.description}</p>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-semibold c-accent hover:underline"
                      >
                        <Github size={18} />
                        View on GitHub
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-28">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-tight">Let’s connect</h2>
              <p className="mt-5 text-lg c-muted max-w-xl">
                I'm always open to discussing new opportunities, collaborations, or just chatting about technology!
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href="mailto:vishvas.singh.2005@gmail.com"
                  className="flex items-center gap-3 px-6 py-3.5 rounded-md bg-[var(--text)] text-white font-semibold hover:bg-[var(--accent)] transition-colors"
                >
                  <Mail size={20} />
                  vishvas.singh.2005@gmail.com
                </a>
                <a
                  href="tel:+14802733937"
                  className="flex items-center gap-3 px-6 py-3.5 rounded-md border border-line bg-panel font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  <Phone size={20} />
                  (480) 273-3937
                </a>
              </div>
              <div className="mt-8 flex gap-6 c-muted">
                <a
                  href="https://github.com/Vishvas-Singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/vishvas-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="py-8 border-t border-line">
          <p className="max-w-5xl mx-auto px-6 text-sm c-muted">
            &copy; {new Date().getFullYear()} Vishvas Singh. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}