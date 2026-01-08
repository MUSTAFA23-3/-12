
import React, { useState, useRef, useEffect } from 'react';
import { getAiAssistantResponse } from './services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    { role: 'bot', text: 'أهلاً بك يا بطل! 👋 أنا المساعد الذكي لمستر محمد زايد. كيف أساعدك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    const response = await getAiAssistantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-10 left-10 z-[100] flex flex-col items-start gap-4">
      {isOpen && (
        <div className="w-80 md:w-[400px] h-[600px] bg-white rounded-[3.5rem] shadow-2xl shadow-emerald-900/10 border border-emerald-100 overflow-hidden flex flex-col animate-in slide-in-from-bottom-12 fade-in duration-500 origin-bottom-left">
          <div className="bg-emerald-600 p-8 text-white flex justify-between items-center shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl transition-transform group-hover:scale-125 duration-1000"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg border border-white/20">🤖</div>
              <div className="flex flex-col">
                <span className="text-xl font-black leading-tight">المساعد الذكي</span>
                <span className="text-[10px] opacity-70 font-black uppercase tracking-[0.3em] mt-1">Ready to help 24/7</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-all text-2xl relative z-10 w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-xl">✕</button>
          </div>

          <div ref={scrollRef} className="flex-1 p-8 overflow-y-auto bg-slate-50/30 space-y-6 scrollbar-hide">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                <div className={`max-w-[90%] p-5 rounded-[2rem] text-sm font-bold leading-relaxed shadow-sm transition-all duration-300 ${
                  m.role === 'user' 
                  ? 'bg-emerald-600 text-white rounded-br-none shadow-emerald-200' 
                  : 'bg-white text-slate-700 rounded-bl-none border border-emerald-50'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-[2rem] rounded-bl-none border border-emerald-50 shadow-sm flex gap-1.5 items-center">
                  <span className="w-2 h-2 bg-emerald-300 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-emerald-50 flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="تحدث معي كأنك مع المستر..." 
              className="flex-1 bg-slate-50 px-7 py-5 rounded-[2rem] text-sm font-black border border-slate-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 transition-all shadow-inner"
            />
            <button 
              onClick={handleSend}
              className="w-16 h-16 bg-emerald-600 text-white rounded-[1.5rem] flex items-center justify-center shadow-xl shadow-emerald-100 hover:bg-emerald-700 active:scale-90 transition-all"
            >
              <span className="text-2xl">🚀</span>
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-20 h-20 rounded-[2rem] flex items-center justify-center text-4xl shadow-2xl transition-all duration-500 group relative overflow-hidden ${isOpen ? 'bg-red-500 rotate-90' : 'bg-emerald-950 hover:bg-emerald-600 hover:-translate-y-3'}`}
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="group-hover:scale-110 transition-transform relative z-10">{isOpen ? '✕' : '💬'}</span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full border-4 border-slate-50 animate-pulse"></span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
