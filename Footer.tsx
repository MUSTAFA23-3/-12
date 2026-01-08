
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-emerald-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-emerald-600 rounded-[1.5rem] flex items-center justify-center text-white font-black text-3xl shadow-2xl shadow-emerald-100">
              Z
            </div>
            <span className="text-3xl font-black">أ. محمد <span className="text-emerald-600">زايد</span></span>
          </div>
          <p className="text-slate-400 max-w-sm font-bold leading-loose text-lg">
            المنصة الأولى والوحيدة التي تدمج بين علم الأحياء والجيولوجيا بأسلوب تفاعلي حديث يضمن لك الدرجة النهائية بإذن الله.
          </p>
        </div>
        
        <div>
          <h4 className="font-black text-emerald-950 mb-8 uppercase tracking-[0.2em] text-xs">Quick Navigation</h4>
          <ul className="space-y-5 text-slate-500 font-bold text-base">
            <li><a href="#" className="hover:text-emerald-600 transition-all flex items-center gap-2"><span>🡢</span> الرئيسية</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-all flex items-center gap-2"><span>🡢</span> كورسات الأحياء</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-all flex items-center gap-2"><span>🡢</span> كورسات الجيولوجيا</a></li>
            <li><a href="#" className="hover:text-emerald-600 transition-all flex items-center gap-2"><span>🡢</span> تواصل معنا</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-emerald-950 mb-8 uppercase tracking-[0.2em] text-xs">Social Presence</h4>
          <div className="flex gap-5">
            <a href="#" className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl hover:bg-emerald-600 hover:text-white hover:shadow-xl hover:shadow-emerald-200 transition-all">f</a>
            <a href="#" className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl hover:bg-emerald-600 hover:text-white hover:shadow-xl hover:shadow-emerald-200 transition-all">y</a>
            <a href="#" className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl hover:bg-emerald-600 hover:text-white hover:shadow-xl hover:shadow-emerald-200 transition-all">t</a>
          </div>
          <div className="mt-8">
             <p className="text-slate-400 text-sm font-black uppercase tracking-[0.2em]">Next-Gen Learning Hub</p>
             <p className="text-emerald-600 font-black mt-1 text-sm bg-emerald-50 inline-block px-3 py-1 rounded-lg border border-emerald-100 shadow-sm animate-pulse">
               Crafted with Love by Mostafa Mahmoud 💎
             </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-emerald-50 text-center">
         <p className="text-[10px] text-slate-300 font-black uppercase tracking-[0.4em]">
           &copy; 2024 Mohamed Zayed Educational Platform. The Pinnacle of Biology.
         </p>
      </div>
    </footer>
  );
};

export default Footer;
