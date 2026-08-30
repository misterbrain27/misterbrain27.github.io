import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import financialDocImage from '../assets/images/projects/illustration-analyse-financiere.webp';


interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
      {
          title: "Financial-doc-analyzer ",
          description: "Système RAG (Retrieval-Augmented Generation) full-stack d'analyse de documents financiers français",
          image: "",
          technologies: [ "FastAPI", "Angular","Ollama", "PostgreSQL", "SQLAlchemy 2"],
          github: "#",
          demo: "#"
      },
      {
          title: "Application de test de compétences ",
          description: "Quiz personnalisable par le recruteur pour profil comptable, finance ou gestion ",
          image: "",
          technologies: ["Django", "Django Rest", "Angular","Celery", "PostgreSQL"],
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
  ];

  return (
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
                  {projects.map((project, index) => (
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
  );
};