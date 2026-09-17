import React from 'react';
import { ArrowRight, Briefcase, Download, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import ingestionGif from '../assets/financialdemorag/ingestionH264.gif';

export const Profile: React.FC = () => {
  return (
      <section id="profile" className="relative overflow-hidden min-h-screen bg-[#040b14] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.12),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.16),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.10),transparent_28%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-12">
                  <div className="text-center lg:text-left">
                      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-300">
                          <Sparkles size={12} />
                          Full Stack • IA • Product
                      </div>

                      <h1 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                          <span className="block text-slate-200">David A.</span>
                          <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                              Développeur Full Stack
                          </span>
                      </h1>

                      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 lg:text-left">
                          Je conçois des produits web premium, orientés performance, UX et valeur métier,
                          avec une forte appétence pour les solutions d’intelligence artificielle et l’automatisation.
                      </p>

                      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
                          <div className="flex items-center gap-2 text-sm text-slate-300">
                              <MapPin size={16} className="text-cyan-300" />
                              <span>Paris, France</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-300">
                              <Mail size={16} className="text-cyan-300" />
                              <span>voir cv</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-300">
                              <Phone size={16} className="text-cyan-300" />
                              <span>+33 0 00 00 00 00</span>
                          </div>
                      </div>

                      <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                          <a
                              href="#"
                              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_30px_rgba(59,130,246,0.35)] transition hover:brightness-110"
                          >
                              <Download size={18} />
                              Télécharger CV
                          </a>
                          <a
                              href="https://github.com/misterbrain27"
                              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:bg-slate-800"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <Github size={18} />
                              GitHub
                          </a>
                          <a
                              href="https://www.linkedin.com/in/david-abitbol-dev/"
                              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:bg-slate-800"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <Linkedin size={18} />
                              LinkedIn
                          </a>
                      </div>
                  </div>

                  <div className="relative mt-12 lg:mt-0">
                      <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur-2xl" />

                      <div className="relative overflow-hidden rounded-[30px] border border-slate-700/80 bg-slate-900/90 p-3 shadow-[0_35px_90px_rgba(8,15,30,0.65)] backdrop-blur-sm">
                          <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
                              <div className="flex items-center gap-2">
                                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                              </div>
                              <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Featured</span>
                          </div>

                          <div className="p-4 sm:p-5">
                              <div className="mb-5 flex items-start justify-between gap-4">
                                  <div>
                                      <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300">Projet phare</p>
                                      <h2 className="mt-2 text-2xl font-bold text-white">Financial-doc-analyzer</h2>
                                  </div>
                                  <div className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-300">
                                      <Briefcase size={12} />
                                      RAG
                                  </div>
                              </div>

                              <div className="relative mb-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-inner shadow-slate-950">
                                  <img
                                      src={ingestionGif}
                                      alt="Démonstration Financial-doc-analyzer"
                                      className="h-60 w-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
                              </div>

                              <div className="mb-5 grid grid-cols-3 gap-3 text-center">
                                  {[
                                      { label: 'Stack', value: 'Full stack' },
                                      { label: 'IA', value: 'RAG' },
                                      { label: 'Impact', value: 'Finance' },
                                  ].map((item) => (
                                      <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-950/70 p-2">
                                          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                                          <div className="mt-1 text-sm font-semibold text-slate-100">{item.value}</div>
                                      </div>
                                  ))}
                              </div>

                              <p className="mb-5 text-sm leading-6 text-slate-300">
                                  Analyse intelligente de documents financiers en français : ingestion, extraction de données,
                                  recherche contextuelle et réponses fiables à partir de sources documentaires.
                              </p>

                              <div className="mb-6 flex flex-wrap gap-2">
                                  {['FastAPI', 'Angular', 'Ollama', 'PostgreSQL', 'RAG'].map((tech) => (
                                      <span key={tech} className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-[11px] text-slate-200">
                                          {tech}
                                      </span>
                                  ))}
                              </div>

                              <div className="flex items-center justify-between gap-3">
                                  <button
                                      onClick={() => {
                                          const url = new URL(window.location.href);
                                          url.searchParams.set('demo', 'financial-doc-analyzer');
                                          window.history.pushState({}, '', url);
                                          window.dispatchEvent(new PopStateEvent('popstate'));
                                      }}
                                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(34,211,238,0.32)] transition hover:brightness-110"
                                  >
                                      Voir la démo
                                      <ArrowRight size={16} />
                                  </button>

                                  <a
                                      href="https://github.com/misterbrain27/open-financial-doc-analyzer"
                                      className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                  >
                                      GitHub
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};