
import React from 'react';
import { View } from './types';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
  user: string | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, user }) => {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-emerald-50 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate(View.HOME)}>
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-emerald-200 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all">
              Z
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black md:text-2xl leading-tight">
                أ. محمد <span className="text-emerald-600">زايد</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">Biology & Geology Specialist</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate(View.HOME)}
              className={`font-bold transition hidden md:block ${currentView === View.HOME ? 'text-emerald-600 underline decoration-2 underline-offset-8' : 'text-slate-600 hover:text-emerald-600'}`}
            >
              الرئيسية
            </button>
            <button 
              onClick={() => onNavigate(View.AUTH)}
              className="bg-emerald-950 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-emerald-800 transition shadow-xl hover:shadow-emerald-200 active:scale-95"
            >
              {user ? (user === 'Mohamed_Zayed' ? 'لوحة التحكم' : 'حسابي') : 'دخول الطلاب'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
