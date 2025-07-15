import React from 'react';
import { Calendar } from 'lucide-react';

interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}
export const Experience: React.FC = () => {
    const experiences: Experience[] = [
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
            period: "2021 - 2022",
            description: "Développement d'applications web de A à Z, de la conception à la mise en production. Collaboration étroite avec les équipes UX/UI.",
            technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"]
        },
        {
            title: "Développeur Backend",
            company: "",
            period: "2020 - 2021",
            description: "Création d'interfaces utilisateur modernes et responsives pour des clients variés. Intégration d'APIs REST ",
            technologies: ["Python", "Django", "API REST"]
        }
    ];
    return (
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
                        { experiences.map((exp, index) => (
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
    );
};
