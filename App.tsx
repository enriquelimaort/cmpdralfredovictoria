import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { ImageEditor } from './components/ImageEditor';
import { AppTab } from './types';
import { LayoutDashboard, Image as ImageIcon, Syringe, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.DASHBOARD);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg text-white">
                <Syringe size={20} />
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">Vacuna<span className="text-indigo-600">Dash</span></span>
            </div>
            
            <nav className="flex space-x-1">
              <button
                onClick={() => setActiveTab(AppTab.DASHBOARD)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === AppTab.DASHBOARD 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <LayoutDashboard size={16} />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab(AppTab.IMAGE_EDITOR)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === AppTab.IMAGE_EDITOR 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-1">
                  <ImageIcon size={16} />
                  <span className="relative">
                    Editor AI
                    <Sparkles size={8} className="absolute -top-1 -right-2 text-amber-500 fill-amber-500" />
                  </span>
                </div>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {activeTab === AppTab.DASHBOARD ? (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Análisis de Vacunación</h1>
                <p className="text-slate-500 mt-1">Resumen de consultas y efectividad de cierres</p>
              </div>
              <div className="text-sm text-slate-400 font-medium bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
                Datos actualizados
              </div>
            </div>
            <Dashboard />
          </div>
        ) : (
          <ImageEditor />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} VacunaDash. Impulsado por Gemini 2.5 Flash.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;