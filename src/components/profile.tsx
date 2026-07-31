import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';

export const Profile: React.FC = () => {
  return (
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
                              href="https://www.linkedin.com/in/david-abitbol-dev/"
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
  );
};