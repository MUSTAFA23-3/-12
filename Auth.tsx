
import React, { useState } from 'react';

interface AuthProps {
  onLogin: (username: string) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAction = () => {
    if (mode === 'login') {
      if (username === 'Mohamed_Zayed' && password === '2026') {
        onLogin('Mohamed_Zayed');
      } else if (username && password) {
        onLogin(username);
      } else {
        alert('يرجى إدخال البيانات كاملة');
      }
    } else {
      alert('تم إنشاء الحساب بنجاح! يمكنك الدخول الآن.');
      setMode('login');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-16 bg-slate-50/50 animate-in zoom-in-95 duration-500">
      <div className="max-w-md w-full bg-white p-10 md:p-12 rounded-[3.5rem] shadow-2xl shadow-emerald-100/50 border border-emerald-50">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner animate-float">👋</div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">أهلاً بك في منصتنا</h2>
          <p className="text-slate-400 font-medium">بيتك التعليمي الآمن للتفوق</p>
        </div>

        <div className="bg-emerald-50 p-1.5 rounded-[2rem] mb-10 flex border border-emerald-100">
          <button 
            onClick={() => setMode('login')}
            className={`flex-1 py-4 rounded-3xl font-black text-sm transition-all duration-300 ${mode === 'login' ? 'bg-white shadow-xl text-emerald-600' : 'text-slate-400 hover:text-emerald-700'}`}
          >
            تسجيل دخول
          </button>
          <button 
            onClick={() => setMode('signup')}
            className={`flex-1 py-4 rounded-3xl font-black text-sm transition-all duration-300 ${mode === 'signup' ? 'bg-white shadow-xl text-emerald-600' : 'text-slate-400 hover:text-emerald-700'}`}
          >
            حساب جديد
          </button>
        </div>

        {mode === 'login' ? (
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-black text-emerald-600/60 mb-2 mr-4 uppercase tracking-widest">Login Name</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="اسم المستخدم أو الهاتف" 
                className="w-full px-7 py-5 bg-slate-50 rounded-3xl border border-slate-100 focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none transition-all shadow-inner"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-emerald-600/60 mb-2 mr-4 uppercase tracking-widest">Security Code</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="كلمة المرور" 
                className="w-full px-7 py-5 bg-slate-50 rounded-3xl border border-slate-100 focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none transition-all shadow-inner"
              />
            </div>
            <button 
              onClick={handleAction}
              className="w-full py-5 bg-emerald-950 text-white rounded-[2rem] font-black text-lg hover:bg-emerald-800 shadow-2xl shadow-emerald-900/10 transition active:scale-95"
            >
              دخول آمن 🔒
            </button>
            <div className="mt-8 text-center text-xs text-slate-400 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50">
              Admin Login: <span className="font-mono text-emerald-600 font-black">Mohamed_Zayed / 2026</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <input type="text" placeholder="الاسم ثلاثي" className="w-full px-7 py-5 bg-slate-50 rounded-3xl border border-slate-100 focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none transition shadow-inner" />
            <div className="grid grid-cols-2 gap-4">
               <select className="w-full px-4 py-5 bg-slate-50 rounded-3xl border border-slate-100 focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none transition text-sm font-bold shadow-inner">
                  <option>الصف الأول</option>
                  <option>الصف الثاني</option>
                  <option selected>الصف الثالث</option>
               </select>
               <select className="w-full px-4 py-5 bg-slate-50 rounded-3xl border border-slate-100 focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none transition text-sm font-bold shadow-inner">
                  <option>عام</option>
                  <option>أزهر</option>
               </select>
            </div>
            <input type="tel" placeholder="رقم الموبايل الشخصي" className="w-full px-7 py-5 bg-slate-50 rounded-3xl border border-slate-100 focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none transition shadow-inner" />
            <input type="tel" placeholder="رقم ولي الأمر" className="w-full px-7 py-5 bg-red-50/50 rounded-3xl border border-red-100 focus:bg-white focus:ring-2 focus:ring-red-600 outline-none transition placeholder-red-300 shadow-inner" />
            <input type="password" placeholder="كلمة السر" className="w-full px-7 py-5 bg-slate-50 rounded-3xl border border-slate-100 focus:bg-white focus:ring-2 focus:ring-emerald-600 outline-none transition shadow-inner" />
            <button 
              onClick={handleAction}
              className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-black text-lg hover:bg-emerald-700 shadow-2xl shadow-emerald-200 transition active:scale-95"
            >
              إنشاء الحساب ✅
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
