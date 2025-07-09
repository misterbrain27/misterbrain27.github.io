import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Calendar, ExternalLink, Download } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'experience', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: 'profile', label: 'Profil' },
                  { id: 'experience', label: 'Expériences' },
                  { id: 'skills', label: 'Compétences' },
                  { id: 'projects', label: 'Projets' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              {[
                { id: 'profile', label: 'Profil' },
                { id: 'experience', label: 'Expériences' },
                { id: 'skills', label: 'Compétences' },
                { id: 'projects', label: 'Projets' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Profile Section */}
      <section id="profile" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-blue-400/30 to-white/20 rounded-full blur-sm opacity-60 animate-pulse"></div>
                <div className="relative w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <div className="w-44 h-44 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-blue-400">DA</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  David A.
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-300 mb-6">
                Développeur Full Stack
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                Passionné par le développement web moderne, je crée des applications innovantes 
                avec une attention particulière à l'expérience utilisateur et aux performances. 
                Fort de 3 ans d'expérience, je maîtrise les technologies front-end et back-end.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={20} />
                  <span>Paris, France</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail size={20} />
                  <span>voir cv</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone size={20} />
                  <span>+33 0 00 00 00 00</span>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="#" 
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <Download size={20} />
                  <span>Télécharger CV</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-blue-500 rounded-lg transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/david-a-59a427ba/"
                  className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-blue-500 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Expériences
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Mon parcours professionnel et les projets qui ont façonné mon expertise
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-blue-400"></div>
            
            <div className="space-y-12">
              {[
                {
                  title: "Développeur Full Stack",
                  company: "",
                  period: "2022 - Présent",
                  description: "Développement d'applications web de A à Z, de la conception à la mise en production",
                  technologies: ["Angular", "Python", "Docker", "GCP"]
                },
                {
                  title: "Développeur Full Stack",
                  company: "",
                  period: "2020 - 2022",
                  description: "Développement d'applications web de A à Z, de la conception à la mise en production. Collaboration étroite avec les équipes UX/UI.",
                  technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"]
                },
                {
                  title: "Développeur Backend",
                  company: "",
                  period: "2019 - 2020",
                  description: "Création d'interfaces utilisateur modernes et responsives pour des clients variés. Intégration d'APIs REST ",
                  technologies: ["Python", "Django", "API REST"]
                }
              ].map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900"></div>
                  
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-8' : 'md:ml-1/2 md:pl-8'}`}>
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-blue-400" />
                        <span className="text-blue-400 font-medium">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <h4 className="text-gray-400 mb-4">{exp.company}</h4>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Compétences
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies et outils que je maîtrise pour créer des solutions innovantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                skills: [
                  { name: "Angular", level: 95 },
                  { name: "TypeScript", level: 95 },
                  { name: "Vue.js", level: 80 },
                  { name: "Tailwind CSS", level: 92 }
                ]
              },
              {
                category: "Backend",
                skills: [
                  { name: "Python", level: 95 },
                  { name: "Django", level: 95 },
                  { name: "PostgreSQL", level: 82 },
                  { name: "MongoDB", level: 78 }
                ]
              },
              {
                category: "DevOps",
                skills: [
                  { name: "Docker", level: 80 },
                  { name: "GCP", level: 75 },
                  { name: "Git", level: 95 },
                  { name: "CI/CD", level: 72 }
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-bold mb-6 text-center text-blue-400">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Projets
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Découvrez mes réalisations et projets qui démontrent mes compétences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Application de test de compétences pour recrutement profil comptable, finance ou gestion",
                description: "Quiz personnalisable par le recruteur ",
                image: "",
                technologies: ["Django", "Django Rest", "Angular", "PostgreSQL"],
                github: "#",
                demo: "#"
              },
              {
                title: "Task Management App",
                description: "Application de gestion de tâches collaborative avec temps réel, notifications et tableaux de bord analytiques.",
                image: "",
                technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
                github: "#",
                demo: "#"
              },
              {
                title: "Portfolio Website",
                description: "Site portfolio moderne avec animations, thème sombre et design responsive. Optimisé pour les performances.",
                image: "",
                technologies: ["React", "Tailwind", "Framer Motion", "Vercel"],
                github: "#",
                demo: "#"
              },
              {
                title: "API Documentation",
                description: "Documentation interactive d'API avec tests en temps réel et générateur de code automatique.",
                image: "",
                technologies: ["React", "OpenAPI", "Swagger", "Node.js"],
                github: "#",
                demo: "#"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-blue-500 rounded transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2025 David.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;