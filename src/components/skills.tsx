import React from 'react';

interface Skill {
    name: string;
    level: number;
}

interface SkillCategory {
    category: string;
    skills: Skill[];
}

export const Skills: React.FC = () => {
    const skillCategories: SkillCategory[] = [
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
    ];

    return (
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
                    {skillCategories.map((category, index) => (
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
    );
};
