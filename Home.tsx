
import React from 'react';
import { Course } from '../types';

interface HomeProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

const Home: React.FC<HomeProps> = ({ courses, onSelectCourse }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -mr-48 -mt-24 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -ml-32 -mb-16 opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-tight">
            منصة التفوق في <br />
            <span className="hashtag-gradient">الأحياء والجيولوجيا</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-medium">
            لطلاب الثانوية العامة والأزهرية - مع أحدث أساليب الشرح المبسط والربط العملي.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-2xl shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-1 transition active:scale-95">
              ابدأ رحلة النجاح 🚀
            </button>
            <div className="animate-bounce inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-6 py-3 rounded-full">
              <span className="text-2xl font-black hashtag-gradient">#من_أراد_استطاع</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-black uppercase mb-4 tracking-widest">About The Teacher</span>
            <h2 className="text-4xl font-black">أ. محمد زايد في سطور</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-950/40 p-10 rounded-[2.5rem] border border-emerald-800/50 hover:border-emerald-500 transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition">🎓</div>
              <h3 className="font-black text-2xl mb-4 text-emerald-400">خبرة عريقة</h3>
              <p className="text-slate-400 leading-relaxed text-lg">أكثر من 20 عاماً في تدريس مادتي الأحياء والجيولوجيا في كبرى منصات ومراكز القاهرة.</p>
            </div>
            <div className="bg-emerald-950/40 p-10 rounded-[2.5rem] border border-emerald-800/50 hover:border-emerald-400 transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl shadow-teal-500/20 group-hover:scale-110 transition">⭐</div>
              <h3 className="font-black text-2xl mb-4 text-teal-400">صانع الأوائل</h3>
              <p className="text-slate-400 leading-relaxed text-lg">آلاف الطلاب التحقوا بكليات القمة (الطب، الصيدلة، الهندسة) بفضل الله وبمنهجية واضحة.</p>
            </div>
            <div className="bg-emerald-950/40 p-10 rounded-[2.5rem] border border-emerald-800/50 hover:border-lime-500 transition-all group hover:-translate-y-2">
              <div className="w-16 h-16 bg-lime-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl shadow-lime-500/20 group-hover:scale-110 transition">🚀</div>
              <h3 className="font-black text-2xl mb-4 text-lime-400">أسلوب 5D</h3>
              <p className="text-slate-400 leading-relaxed text-lg">تبسيط المعلومات المعقدة عبر رسوم متحركة وربط ذهني يجعل المعلومة مستحيلة النسيان.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
          <div className="text-center md:text-right">
            <h2 className="text-4xl font-black text-slate-900">الكورسات المتاحة</h2>
            <p className="text-slate-500 mt-2 font-medium">اختر مادتك وابدأ رحلة التفوق الآن</p>
          </div>
          <div className="flex gap-2 bg-slate-100 p-1.5 rounded-2xl">
            <button className="px-6 py-2.5 rounded-xl bg-white text-emerald-600 font-black shadow-sm">الكل</button>
            <button className="px-6 py-2.5 rounded-xl text-slate-400 font-black hover:text-emerald-500 transition">أحياء</button>
            <button className="px-6 py-2.5 rounded-xl text-slate-400 font-black hover:text-emerald-500 transition">جيولوجيا</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="group bg-white rounded-[3rem] shadow-xl shadow-emerald-100/30 overflow-hidden border border-emerald-50 hover:shadow-2xl hover:shadow-emerald-200 transition-all cursor-pointer hover:-translate-y-2"
              onClick={() => onSelectCourse(course)}
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
                />
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl font-black text-emerald-600 shadow-xl text-sm">
                  {course.price} ج.م
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-950/60 to-transparent"></div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition leading-tight">{course.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-8 font-medium">{course.description}</p>
                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                  <div className="flex items-center gap-3 text-slate-400 text-xs font-black">
                    <span className="flex items-center gap-1">⏱️ 12 ساعة</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="flex items-center gap-1">📄 {course.content.length} حصص</span>
                  </div>
                  <span className="text-emerald-600 font-black flex items-center gap-1 group-hover:gap-3 transition-all">
                    عرض التفاصيل <span>🡢</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
