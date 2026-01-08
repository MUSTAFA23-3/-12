
import React, { useState } from 'react';
import { Course } from '../types';

interface CourseDetailsProps {
  course: Course;
  onBack: () => void;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course, onBack }) => {
  const [showPayModal, setShowPayModal] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-in slide-in-from-left-4 duration-500">
      <button 
        onClick={onBack}
        className="mb-10 flex items-center gap-2 text-slate-400 hover:text-emerald-600 font-black transition-all group bg-white px-6 py-2 rounded-2xl shadow-sm border border-slate-100"
      >
        <span className="text-2xl group-hover:-translate-x-2 transition-transform">🡢</span> العودة للكورسات
      </button>

      <div className="bg-white rounded-[4rem] shadow-2xl shadow-emerald-100/40 overflow-hidden border border-emerald-50">
        <div className="h-[450px] relative">
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent flex flex-col justify-end p-12 md:p-16">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight max-w-3xl">{course.title}</h1>
            <div className="flex flex-wrap gap-4">
               <span className="bg-emerald-600 text-white px-8 py-3 rounded-2xl font-black shadow-2xl shadow-emerald-900/20 text-lg">
                 السعر: {course.price} ج.م
               </span>
               <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-2xl font-black text-lg">
                 {course.content.length} محاضرات تفصيلية
               </span>
            </div>
          </div>
        </div>

        <div className="p-10 md:p-16">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-black mb-10 text-slate-900 flex items-center gap-4">
                <span className="w-3 h-10 bg-emerald-600 rounded-full"></span>
                محتوى الكورس التعليمي
              </h3>
              <div className="space-y-5">
                {course.content.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-7 bg-emerald-50/30 rounded-[2rem] border border-emerald-100/50 hover:bg-emerald-50 transition-all group cursor-pointer">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-slate-400 group-hover:text-emerald-600 group-hover:scale-110 shadow-sm transition-all border border-emerald-50">
                        {idx + 1}
                      </div>
                      <span className="font-bold text-slate-800 text-lg group-hover:translate-x-1 transition-all">{item}</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <span className="text-xs font-black text-emerald-500 opacity-0 group-hover:opacity-100 transition">اضغط للفتح</span>
                       <span className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center shadow-sm">🔒</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <div className="bg-emerald-600 p-10 rounded-[3rem] text-white shadow-2xl shadow-emerald-200 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                <h4 className="font-black text-2xl mb-4 relative z-10">اشترك الآن 🔓</h4>
                <p className="text-emerald-100 text-sm mb-8 leading-relaxed relative z-10 font-medium">افتح المحتوى بالكامل واستمتع بمتابعة خاصة وامتحانات دورية لضمان التفوق.</p>
                <button 
                  onClick={() => setShowPayModal(true)}
                  className="w-full py-5 bg-white text-emerald-950 rounded-3xl font-black text-xl shadow-xl hover:shadow-2xl hover:bg-emerald-50 transition active:scale-95 relative z-10"
                >
                  تفعيل الكورس
                </button>
              </div>

              <div className="bg-slate-900 p-10 rounded-[3rem] text-white border border-emerald-900/30">
                <h4 className="font-black text-2xl mb-8 text-emerald-400">مميزاتنا ✨</h4>
                <ul className="space-y-5 text-base text-slate-300 font-bold">
                  <li className="flex items-center gap-4 group">
                    <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 group-hover:scale-110 transition">✓</span>
                    فيديوهات بجودة 4K
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 group-hover:scale-110 transition">✓</span>
                    ملازم PDF حصرية
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 group-hover:scale-110 transition">✓</span>
                    تقارير دورية لأولياء الأمور
                  </li>
                  <li className="flex items-center gap-4 group">
                    <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 group-hover:scale-110 transition">✓</span>
                    بنك أسئلة الوزارة المحدث
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPayModal && (
        <div className="fixed inset-0 bg-emerald-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-[4rem] p-12 max-w-xl w-full relative shadow-2xl border border-emerald-100">
            <button onClick={() => setShowPayModal(false)} className="absolute top-10 left-10 text-slate-400 hover:text-red-500 text-3xl transition-colors">✕</button>
            <h3 className="text-4xl font-black text-center mb-12 text-slate-900">تفعيل الاشتراك</h3>
            
            <div className="space-y-8">
              <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100 shadow-inner">
                <label className="block text-sm font-black text-emerald-800 mb-4 mr-4 uppercase tracking-widest">Center Code / Session Code</label>
                <div className="flex gap-3">
                  <input type="text" placeholder="اكتب الكود هنا" className="flex-1 px-6 py-4 bg-white rounded-2xl border border-emerald-200 text-center font-mono uppercase font-black text-xl shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none" />
                  <button onClick={() => alert('تم التفعيل!')} className="bg-emerald-600 text-white px-10 rounded-2xl font-black text-lg hover:bg-emerald-700 transition shadow-lg">تفعيل</button>
                </div>
              </div>

              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-slate-100"></div>
                <span className="px-6 text-slate-400 text-xs font-black uppercase tracking-[0.3em]">أو ادفع أونلاين</span>
                <div className="flex-grow border-t border-slate-100"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="p-6 border border-slate-100 rounded-3xl flex flex-col items-center gap-3 hover:bg-emerald-50 hover:border-emerald-200 transition-all group">
                  <span className="text-3xl group-hover:scale-110 transition">💳</span>
                  <span className="font-black text-slate-700 text-sm">الدفع بالفيزا</span>
                </button>
                <button className="p-6 border border-slate-100 rounded-3xl flex flex-col items-center gap-3 hover:bg-emerald-50 hover:border-emerald-200 transition-all group">
                  <span className="text-3xl group-hover:scale-110 transition text-emerald-600">📱</span>
                  <span className="font-black text-slate-700 text-sm">فودافون كاش</span>
                </button>
              </div>

              <div className="flex gap-4 pt-6">
                <input type="text" placeholder="كود خصم إضافي" className="flex-1 p-5 bg-slate-50 rounded-2xl text-center font-mono text-sm border border-slate-100 focus:bg-white transition shadow-inner" />
                <button onClick={() => alert('كود صحيح!')} className="bg-slate-900 text-white px-10 rounded-2xl font-black text-sm hover:bg-black transition">خصم</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
