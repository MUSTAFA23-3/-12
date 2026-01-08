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
        className={w-20 h-20 rounded-[2rem] flex items-center justify-center text-4xl shadow-2xl transition-all duration-500 group relative overflow-hidden ${isOpen ? 'bg-red-500 rotate-90' : 'bg-emerald-950 hover:bg-emerald-600 hover:-translate-y-3'}}
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
