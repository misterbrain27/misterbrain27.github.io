import React from 'react';
import {Github, Linkedin, Mail} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
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
  );
};