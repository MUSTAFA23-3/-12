
import React, { useState } from 'react';
import { Course, Student, DiscountCode, DashTab } from './types';

interface DashboardProps {
  courses: Course[];
  students: Student[];
  codes: DiscountCode[];
  onAddCourse: (course: Course) => void;
  onAddCode: (code: DiscountCode) => void;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ courses, students, codes, onAddCourse, onAddCode, onLogout }) => {
  const [activeTab, setActiveTab] = useState<DashTab>(DashTab.CONTENT);
  const [newCourse, setNewCourse] = useState({ title: '', price: '', image: '' });

  const handleCreateCourse = () => {
    if (!newCourse.title || !newCourse.price) return alert('أكمل البيانات');
    onAddCourse({
      id: Date.now().toString(),
      title: newCourse.title,
      price: Number(newCourse.price),
      image: newCourse.image || 'https://picsum.photos/seed/new/800/600',
      description: 'كورس جديد تمت إضافته من لوحة التحكم.',
      content: ['محاضرة 1', 'محاضرة 2']
    });
    setNewCourse({ title: '', price: '', image: '' });
    alert('تم النشر بنجاح!');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row animate-in fade-in duration-500">
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-white border-l border-emerald-50 p-10 flex flex-col shadow-2xl shadow-emerald-900/5">
        <div className="mb-14">
          <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black mb-6 shadow-xl shadow-emerald-200">Z</div>
          <h2 className="text-2xl font-black text-slate-900 leading-tight">لوحة التحكم ⚙️</h2>
          <p className="text-emerald-500 text-[10px] mt-2 font-black uppercase tracking-[0.2em]">Platform Administration</p>
        </div>
        
        <nav className="space-y-3 flex-1">
          <button 
            onClick={() => setActiveTab(DashTab.CONTENT)}
            className={`w-full flex items-center gap-4 p-5 rounded-3xl font-black transition-all ${activeTab === DashTab.CONTENT ? 'bg-emerald-600 text-white shadow-2xl shadow-emerald-200 scale-105' : 'text-slate-500 hover:bg-emerald-50 hover:text-emerald-700'}`}
          >
            <span className="text-xl">📁</span> إدارة المحتوى
          </button>
          <button 
            onClick={() => setActiveTab(DashTab.STUDENTS)}
            className={`w-full flex items-center gap-4 p-5 rounded-3xl font-black transition-all ${activeTab === DashTab.STUDENTS ? 'bg-emerald-600 text-white shadow-2xl shadow-emerald-200 scale-105' : 'text-slate-500 hover:bg-emerald-50 hover:text-emerald-700'}`}
          >
            <span className="text-xl">👨‍🎓</span> شؤون الطلاب
          </button>
          <button 
            onClick={() => setActiveTab(DashTab.CODES)}
            className={`w-full flex items-center gap-4 p-5 rounded-3xl font-black transition-all ${activeTab === DashTab.CODES ? 'bg-emerald-600 text-white shadow-2xl shadow-emerald-200 scale-105' : 'text-slate-500 hover:bg-emerald-50 hover:text-emerald-700'}`}
          >
            <span className="text-xl">🏷️</span> أكواد الخصم
          </button>
        </nav>

        <button 
          onClick={onLogout}
          className="mt-14 flex items-center gap-4 p-5 text-red-500 font-black rounded-3xl hover:bg-red-50 transition-all border border-transparent hover:border-red-100"
        >
          <span className="text-xl">🚪</span> تسجيل الخروج
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 md:p-16 overflow-y-auto">
        {activeTab === DashTab.CONTENT && (
          <div className="max-w-5xl animate-in slide-in-from-top-6 duration-500">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-emerald-100/50 border border-emerald-50 mb-16 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-1 bg-emerald-600"></div>
              <h3 className="text-2xl font-black mb-10 text-emerald-700 flex items-center gap-3">
                 نشر كورس جديد 🚀
              </h3>
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 mr-4">عنوان الكورس</label>
                  <input 
                    type="text" 
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                    placeholder="مثلاً: الباب الأول - الدعامة" 
                    className="w-full p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition shadow-inner" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 mr-4">سعر الكورس</label>
                  <input 
                    type="number" 
                    value={newCourse.price}
                    onChange={(e) => setNewCourse({...newCourse, price: e.target.value})}
                    placeholder="ج.م" 
                    className="w-full p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition shadow-inner" 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-slate-400 mr-4">رابط الغلاف الخارجي</label>
                  <input 
                    type="text" 
                    value={newCourse.image}
                    onChange={(e) => setNewCourse({...newCourse, image: e.target.value})}
                    placeholder="https://..." 
                    className="w-full p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition shadow-inner" 
                  />
                </div>
              </div>
              <button 
                onClick={handleCreateCourse}
                className="w-full py-6 bg-emerald-600 text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-1 transition-all active:scale-95"
              >
                نشر الكورس الآن 🚀
              </button>
            </div>

            <h3 className="text-3xl font-black mb-10 text-slate-800">إدارة الكورسات القائمة</h3>
            <div className="grid gap-8">
              {courses.map(c => (
                <div key={c.id} className="bg-white p-8 rounded-[2.5rem] flex items-center justify-between border border-emerald-50 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group">
                  <div className="flex items-center gap-6">
                    <img src={c.image} className="w-20 h-20 rounded-3xl object-cover shadow-lg group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="text-xl font-black text-slate-800">{c.title}</h4>
                      <div className="flex gap-4 mt-2">
                         <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest">{c.price} EGP</span>
                         <span className="text-slate-400 text-xs font-bold">{c.content.length} محاضرات</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="w-12 h-12 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition shadow-sm border border-slate-100">⚙️</button>
                    <button className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center hover:bg-red-100 transition shadow-sm border border-red-100">✕</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === DashTab.STUDENTS && (
          <div className="animate-in slide-in-from-top-6 duration-500">
            <div className="flex justify-between items-center mb-12">
               <h3 className="text-3xl font-black text-slate-800">قائمة الطلاب</h3>
               <button className="bg-emerald-50 text-emerald-700 px-8 py-3 rounded-2xl font-black text-sm border border-emerald-100 hover:bg-emerald-100 transition">تصدير Excel</button>
            </div>
            <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-emerald-100/50 border border-emerald-50 overflow-hidden">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-emerald-50/50 text-emerald-700 font-black text-xs uppercase tracking-[0.2em] border-b border-emerald-100">
                    <th className="p-8">الاسم والبيانات</th>
                    <th className="p-8">الصف التعليمي</th>
                    <th className="p-8">رقم الطالب</th>
                    <th className="p-8 text-red-600">رقم ولي الأمر</th>
                    <th className="p-8">الاشتراكات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {students.map(s => (
                    <tr key={s.id} className="hover:bg-emerald-50/20 transition-all cursor-pointer group">
                      <td className="p-8">
                        <div className="font-black text-slate-800 text-lg group-hover:text-emerald-700 transition">{s.name}</div>
                        <div className="text-[10px] text-emerald-400 font-black uppercase mt-1">{s.track === 'general' ? 'ثانوية عامة' : 'ثانوية أزهرية'}</div>
                      </td>
                      <td className="p-8">
                         <span className="bg-slate-50 px-4 py-2 rounded-xl text-sm font-bold text-slate-500 border border-slate-100">{s.grade}</span>
                      </td>
                      <td className="p-8 text-sm font-bold text-slate-700 font-mono">{s.studentPhone}</td>
                      <td className="p-8 text-sm font-black text-red-500 font-mono">{s.parentPhone}</td>
                      <td className="p-8">
                        <button className="text-emerald-600 font-black text-xs hover:bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100 transition">عرض الكورسات</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === DashTab.CODES && (
          <div className="max-w-3xl animate-in slide-in-from-top-6 duration-500">
             <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-emerald-100/50 border border-emerald-50 mb-16">
               <h3 className="text-2xl font-black mb-10 text-emerald-700">🏷️ إنشاء كود خصم جديد</h3>
               <div className="grid grid-cols-3 gap-6 mb-10">
                  <div className="col-span-2 space-y-2">
                     <label className="text-xs font-black text-slate-400 mr-4">اسم الكود</label>
                     <input type="text" placeholder="ZAYED50" className="w-full p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100 font-mono uppercase font-black text-xl focus:bg-white outline-none transition shadow-inner" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-black text-slate-400 mr-4">النسبة %</label>
                     <input type="number" placeholder="50" className="w-full p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100 text-center font-black text-xl focus:bg-white outline-none transition shadow-inner" />
                  </div>
               </div>
               <button className="w-full py-6 bg-emerald-600 text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-emerald-100 hover:bg-emerald-700 transition-all">
                 تفعيل الكود الآن 🔓
               </button>
             </div>

             <h3 className="text-3xl font-black mb-10 text-slate-800">الأكواد النشطة</h3>
             <div className="grid gap-6">
               {codes.map(c => (
                 <div key={c.id} className="bg-white p-8 rounded-[2.5rem] flex items-center justify-between border border-emerald-50 shadow-sm hover:border-emerald-200 transition-all">
                    <div className="flex items-center gap-6">
                       <div className="bg-emerald-50 text-emerald-600 px-8 py-3 rounded-2xl font-mono font-black text-xl border border-emerald-100 shadow-sm">{c.code}</div>
                       <div>
                          <span className="font-black text-slate-800 text-lg">خصم {c.percentage}%</span>
                          <div className="text-[10px] text-emerald-400 font-black mt-1 uppercase tracking-widest">Active Now</div>
                       </div>
                    </div>
                    <button className="bg-red-50 text-red-500 px-6 py-3 rounded-2xl font-black text-xs hover:bg-red-100 transition border border-red-100">إيقاف الكود</button>
                 </div>
               ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
