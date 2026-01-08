import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import profilePic from './assets/vishvas.jpg';

export default function Portfolio() {
  const experiences = [
    {
      title: "Software Engineer (Honors Thesis)",
      company: "Arizona State University/Barrett, The Honors College", 
      location: "Tempe, AZ", 
      period: "Sep 2025 - Present", 
      bullets: [
        "Deploying a full-stack accounting tool for a financial startup on AWS", 
        "Backend: Django, Python", 
        "Database: Dynamo DB", 
        "Frontend: TypeScript, Tailwind CSS", 
        "SDLC: Jira, Scrum"
      ]
    },
    {
      title: "Undergraduate Research Intern",
      company: "Barrett, The Honors College",
      location: "Tempe, AZ",
      period: "Aug 2025 – Present",
      bullets: [
        "Leading data analysis on post-tenure law across 8 R1 states using difference-in-differences and event-based models",
        "Leveraged Pandas and Google Scholar APIs to clean and enrich 20,000+ rows, enhancing data reliability for analysis",
        "Automated web scraping in Python (Selenium and Beautiful Soup), reducing manual data collection time by 70%"
      ]
    },
    {
      title: "Software Engineer",
      company: "TAMID Group, Arizona State University",
      location: "Tempe, AZ",
      period: "Oct 2024 – Present",
      bullets: [
        "Deployed official club website in TypeScript (hosted on Vercel), used by 25+ members, and streamlined campus recruitment for 400+ freshmen",
        "Engineered scalable frontend architecture with custom React hooks, Context API, and CSS, enhancing UI/UX with responsive grid layouts",
        "Collaborated in sprints with 5-person team using Git/GitHub and CI workflows, delivering project 3 weeks early"
      ]
    }
  ];

  const projects = [
    {
      title: "Spotify Podcast Data Pipeline",
      tech: "Python, Apache Airflow, SQLite, XML, Vosk, pydub, REST APIs",
      description: "Engineered a fully automated ETL pipeline in Apache Airflow to ingest, store, and process podcast information from an RSS feed, handling daily scheduling and metadata persistence via SQLite. Integrated Vosk speech-to-text with audio preprocessing, achieving >90% transcription accuracy while reducing workload across 100+ episodes.",
      github: "https://github.com/Vishvas-Singh/Spotify-Podcast_Pipeline"
    },
    {
      title: "Loan Approval Prediction System",
      tech: "Python, FastAPI, Scikit-learn, Pandas, Matplotlib, Uvicorn",
      description: "Built binary classification model with Support Vector Classifier to predict loan approvals with ~86% accuracy. Applied data cleaning, feature engineering and hyperparameter tuning (GridSearchCV), improving F1-score by 10%. Deployed model using FastAPI with endpoints, Pydantic input validation, and Uvicorn hosting.",
      github: "https://github.com/Vishvas-Singh/Loan-Approval-Prediction-app"
    },
    {
      title: "Automated Stock Market and Financial News Tracker",
      tech: "Python, Alpha Vantage API, HTML, SMTP, Cron Jobs",
      description: "Developed automation program using Python to track daily stock market trends and financial news. Integrated Alpha Vantage API to fetch intra-day stock data with API handling, displaying insights with HTML. Automated market-close alerts using SMTP and cron jobs for email notifications, saving 45 minutes/day on research.",
      github: "https://github.com/Vishvas-Singh/stock-data-report"
    }, 
    {
      title: "PostgreSQL Index Performance Analysis",
      tech: "PostgreSQL, Flask, Python, Faker, psycopg2, HTML/CSS/JavaScript",
      description: "Built Flask web application demonstrating database index impact on query performance with 10,000+ records. Implemented side-by-side comparison of indexed vs non-indexed queries, achieving 79.5% faster execution for single table queries and 21.2% improvement for JOIN operations. Automated data generation using Faker library for realistic testing scenarios.",
      github: "https://github.com/Vishvas-Singh/PostgreSQL-Index-Performance-Analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Vishvas Singh</h1>
            <div className="flex gap-6 text-sm">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm overflow-hidden flex-shrink-0">
              <img
                src={profilePic}
                alt="Vishvas Singh"
                className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Computer Science Student | Data Science & Software Engineering</h2>
              <p className="text-lg text-gray-700 mb-4">
                I'm a junior at Arizona State University pursuing a B.S. in Computer Science with a 3.81 GPA. 
                I'm passionate about data-driven problem solving, analytics, and building scalable data systems.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Currently working as an Undergraduate Research Intern through Barrett, The Honors College and Software Engineer at TAMID Group. 
                I specialize in data engineering/analytics/science, machine learning, and software development.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/Vishvas-Singh" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  <Github size={20} />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/vishvas-singh" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 border-2 border-dashed border-purple-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🤖 AI Assistant (Coming Soon)</h3>
            <p className="text-gray-700">
              Interactive AI chatbot powered by Hugging Face will be integrated here. 
              Ask me anything about my projects, experience, or skills!
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-lg text-blue-600">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{exp.location}</p>
                    <p className="text-gray-600">{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-700 flex">
                      <span className="mr-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-blue-600 mb-4">{project.tech}</p>
                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                  <Github size={18} />
                  View on GitHub
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm always open to discussing new opportunities, collaborations, or just chatting about technology!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="mailto:vishvas.singh.2005@gmail.com" 
               className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              <Mail size={20} />
              vishvas.singh.2005@gmail.com
            </a>
            <a href="tel:+14802733937" 
               className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              <Phone size={20} />
              (480) 273-3937
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/Vishvas-Singh" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-white transition-colors">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/vishvas-singh" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2025 Vishvas Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}