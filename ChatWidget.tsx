{/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={w-20 h-20 rounded-[2rem] flex items-center justify-center text-4xl shadow-2xl transition-all duration-500 ${
          isOpen ? "bg-red-500 rotate-90" : "bg-emerald-950 hover:bg-emerald-600"
        }}
      >
        {isOpen ? "✕" : "💬"}
      </button>
    </div>
  );
};

export default ChatWidget;
