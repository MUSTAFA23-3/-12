import React, { useState, useEffect } from 'react';
// ⚠️ هام جداً: لا تنس رفع ملف types.ts و vite.config.ts لأنهما غير موجودين
import { View, Course, Student, DiscountCode } from './types'; 
import { INITIAL_COURSES, MOCK_STUDENTS, MOCK_CODES } from './constants';

// ✅ هنا التعديل الصحيح: استدعاء الملفات بأحرف كبيرة كما هي موجودة لديك
import Navbar from './Navbar';
import Home from './Home';
import Auth from './Auth';
import CourseDetails from './CourseDetails';
import Dashboard from './Dashboard';
import ChatWidget from './ChatWidget';
import Footer from './Footer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [user, setUser] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [students, setStudents] = useState<Student[]>(MOCK_STUDENTS);
  const [codes, setCodes] = useState<DiscountCode[]>(MOCK_CODES);

  const switchView = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    switchView(View.COURSE_DETAILS);
  };

  const handleAddCourse = (newCourse: Course) => {
    setCourses([...courses, newCourse]);
  };

  const handleAddCode = (newCode: DiscountCode) => {
    setCodes([...codes, newCode]);
  };

  const handleLogin = (username: string) => {
    setUser(username);
    if (username === 'Mohamed_Zayed') {
      switchView(View.DASHBOARD);
    } else {
      switchView(View.HOME);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={currentView} onNavigate={switchView} user={user} />
      
      <main className="flex-grow">
        {currentView === View.HOME && (
          <Home courses={courses} onSelectCourse={handleSelectCourse} />
        )}
        
        {currentView === View.AUTH && (
          <Auth onLogin={handleLogin} />
        )}
        
        {currentView === View.COURSE_DETAILS && selectedCourse && (
          <CourseDetails course={selectedCourse} onBack={() => switchView(View.HOME)} />
        )}
        
        {currentView === View.DASHBOARD && (
          <Dashboard 
            courses={courses} 
            students={students} 
            codes={codes} 
            onAddCourse={handleAddCourse}
            onAddCode={handleAddCode}
            onLogout={() => { setUser(null); switchView(View.HOME); }}
          />
        )}
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
