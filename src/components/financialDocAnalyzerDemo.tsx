import {
  AlertTriangle,
  ArrowLeft,
  Brain,
  Check,
  ChevronRight,
  FileText,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import ingestionGif from '../assets/financialdemorag/ingestionH264.gif';
import retrievalGif from '../assets/financialdemorag/retriavalH264.gif';
import verificationGif from '../assets/financialdemorag/verificationH264.gif';
import ingestionVideo from '../assets/financialdemorag/ingestionH264.mov';
import retrievalVideo from '../assets/financialdemorag/retriavalH264.mov';
import verificationVideo from '../assets/financialdemorag/verificationH264.mov';

const caseItems = [
  'Données financières',
  'Tableaux',
  'Notes internes',
  'Risques',
];

const processCards = [
  {
    title: 'Extraction intelligente',
    icon: Brain,
    items: caseItems,
    accent: 'bg-cyan-100 text-cyan-700',
  },
  {
    title: 'Formats supportés',
    icon: FileText,
    items: ['PDF'],
    accent: 'bg-red-100 text-red-700',
  },
  {
    title: 'Analyse par IA',
    icon: Sparkles,
    items: ['Synthèse', 'indicateurs', 'contexte'],
    accent: 'bg-violet-100 text-violet-700',
  },
];

const insightRows = [
  { label: 'Chiffre d’affaires', value: '1,24 M€', trend: 'up' },
  { label: 'Résultat net', value: '215 K€', trend: 'up' },
  { label: 'Marge nette', value: '17,3 %', trend: 'up' },
  { label: 'Endettement', value: '42 %', trend: 'up' },
];

const riskItems = [
  'Endettement élevé',
  'Dépendance client',
];

interface FinancialDocAnalyzerDemoProps {
  onBack: () => void;
}

export const FinancialDocAnalyzerDemo = ({ onBack }: FinancialDocAnalyzerDemoProps) => {
  return (
    <div className="min-h-screen bg-[#eef3f6] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-[#eef3f6]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-cyan-500 hover:text-cyan-700"
          >
            <ArrowLeft size={16} />
            Portfolio
          </button>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 shadow-sm">
              <Search size={18} />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-slate-900">FinancialRAG</div>
              <div className="text-xs text-slate-500">Analyse de documents financiers</div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-28 h-48 bg-gradient-to-r from-cyan-100/40 via-sky-100/40 to-indigo-100/40 blur-3xl" />

        <div className="relative">
          <div className="mb-8 flex justify-end gap-3">
            <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-cyan-500">
              Upload
            </button>
            <button className="rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm hover:bg-cyan-500/20">
              Chat
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {processCards.map(({ title, icon: Icon, items, accent }) => (
              <div key={title} className="rounded-[24px] border border-slate-200 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-[18px] font-bold text-slate-800">{title}</div>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${accent}`}>
                    <Icon size={18} />
                  </div>
                </div>

                {title === 'Formats supportés' ? (
                  <div className="flex h-28 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-xl bg-red-500 text-white shadow-lg shadow-red-200">
                      <FileText size={26} />
                      <span className="absolute bottom-2 right-2 text-[10px] font-bold">PDF</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          <Check size={12} />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-10 max-w-6xl rounded-[34px] border border-[#102235] bg-[#061b2d] p-4 shadow-[0_30px_80px_rgba(2,6,23,0.35)]">
            <div className="rounded-[28px] border border-slate-700/80 bg-[#0b2338] p-4 sm:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="text-[20px] font-black text-white">Analyse du document</div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  En ligne
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-4">
                  <div className="mb-4 flex items-center gap-2 text-sm">
                    <button className="rounded-md bg-cyan-500/15 px-3 py-2 font-medium text-cyan-300">Résumé</button>
                    <button className="rounded-md px-3 py-2 text-slate-300">Indicateurs clés</button>
                    <button className="rounded-md px-3 py-2 text-slate-300">Graphiques</button>
                  </div>

                  <div className="space-y-4">
                    <div className="h-16 rounded-xl bg-slate-700/60" />
                    <div className="grid gap-3 sm:grid-cols-2">
                      {insightRows.map((row) => (
                        <div key={row.label} className="rounded-xl border border-slate-700 bg-slate-900/60 p-3">
                          <div className="mb-2 text-xs uppercase tracking-[0.14em] text-slate-400">{row.label}</div>
                          <div className="flex items-end justify-between">
                            <div className="text-2xl font-bold text-cyan-300">{row.value}</div>
                            <div className="h-8 w-16 rounded-md bg-emerald-500/10" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-4">
                    <div className="mb-3 text-sm font-medium text-slate-300">Évolution</div>
                    <div className="flex h-28 items-end gap-2">
                      {[30, 45, 34, 60, 48, 72, 88].map((height, idx) => (
                        <div key={idx} className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-400 to-cyan-300" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-sm font-medium text-slate-200">Risques détectés</div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/15 text-red-300">
                        <AlertTriangle size={16} />
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-200">
                      {riskItems.map((risk) => (
                        <li key={risk} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-red-400" />
                          {risk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 flex items-center justify-center">
            <div className="w-full max-w-4xl rounded-[24px] border border-slate-300 bg-[#eff3f6] p-5 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3 text-slate-700">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                  <ShieldCheck size={22} />
                </div>
                <input
                  value="Quel est le chiffre d’affaires de l’exercice ?"
                  readOnly
                  className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none"
                />
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg shadow-cyan-200 hover:bg-cyan-600">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[{
              title: 'Ingestion',
              media: ingestionVideo,
              poster: ingestionGif,
            }, {
              title: 'Recherche',
              media: retrievalVideo,
              poster: retrievalGif,
            }, {
              title: 'Vérification',
              media: verificationVideo,
              poster: verificationGif,
            }].map(({ title, media, poster }) => (
              <div key={title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_30px_rgba(15,23,42,0.06)]">
                <div className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">{title}</div>
                <video
                  src={media}
                  poster={poster}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-44 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
