import React, { useState } from 'react';
import { Lock, ArrowRight, UserPlus, Sparkles, School } from 'lucide-react';

interface LoginViewProps {
  onLogin: (password: string) => boolean;
  onGoToStudentPortal: () => void;
  logoUrl?: string;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLogin, onGoToStudentPortal, logoUrl }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onLogin(password);
    if (!success) {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row animate-fade-in">
        
        {/* Left Side - Brand */}
        <div className="md:w-1/2 bg-gradient-to-br from-indigo-600 to-violet-700 p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 shadow-inner">
               <Sparkles size={24} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Professor<br/>Conectado</h1>
            <p className="text-indigo-100 text-lg">Sua suíte completa de gestão escolar e inteligência artificial.</p>
          </div>

          <div className="relative z-10 mt-12">
            <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Desenvolvido para</p>
            <div className="flex items-center gap-3">
               <img src={logoUrl || "https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png"} className="h-8 brightness-0 invert opacity-80" alt="Logo" />
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 justify-center md:justify-start">
              <Lock className="text-indigo-600" size={24} /> 
              Área Restrita
            </h2>
            <p className="text-gray-500 mt-2">Acesso exclusivo para docentes e administradores.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Senha de Acesso</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                className={`w-full p-4 bg-gray-50 border rounded-xl focus:ring-2 outline-none transition-all text-lg ${error ? 'border-red-300 focus:ring-red-200 bg-red-50' : 'border-gray-200 focus:ring-indigo-100 focus:border-indigo-400'}`}
                placeholder="Digite sua senha..."
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1 animate-pulse">
                   Senha incorreta. Tente novamente.
                </p>
              )}
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Entrar no Sistema <ArrowRight size={20} />
            </button>
          </form>

          <div className="my-8 flex items-center gap-4">
             <div className="h-px bg-gray-200 flex-1"></div>
             <span className="text-gray-400 text-sm uppercase font-bold">Ou</span>
             <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <button 
            onClick={onGoToStudentPortal}
            className="w-full py-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-xl font-bold hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 group"
          >
             <UserPlus size={20} className="group-hover:scale-110 transition-transform"/>
             Sou Aluno (Acesso Público)
          </button>
          
          <p className="mt-6 text-center text-xs text-gray-400">
             Esqueceu a senha? Contate a coordenação pedagógica.
          </p>
        </div>

      </div>
    </div>
  );
};