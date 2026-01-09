"use client";

import React, { useState, useRef, useEffect } from "react";
import { generateResponse } from "./GeminiService";

interface Message {
  text: string;
  isBot: boolean;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "أهلاً بك! أنا مساعدك الذكي في منصة زايد، كيف يمكنني مساعدتك اليوم؟",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await generateResponse(userMessage);
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { text: "عذراً، حدث خطأ ما. حاول مرة أخرى.", isBot: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="w-[350px] md:w-[420px] h-[550px] bg-slate-50 rounded-[2.5rem] shadow-2xl border border-white flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-6 bg-emerald-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-xl">
                🤖
              </div>
              <div>
                <h3 className="font-black text-sm">مساعد زايد الذكي</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-emerald-300 font-bold">
                    متصل الآن
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={flex ${
                  msg.isBot ? "justify-start" : "justify-end"
                }}
              >
                <div
                  className={max-w-[85%] p-4 ${
                    msg.isBot
                      ? "bg-white text-slate-800 rounded-2xl shadow-sm border border-slate-100"
                      : "bg-emerald-600 text-white rounded-2xl shadow-md"
                  }}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-6 bg-white border-t border-emerald-50 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="تحدث معي كأنك مع المستر..."
              className="flex-1 bg-slate-50 px-7 py-5 rounded-[2rem] text-sm font-black border border-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner"
            />
            <button
              onClick={handleSend}
              className="w-16 h-16 bg-emerald-600 text-white rounded-[1.5rem] flex items-center justify-center shadow-xl hover:bg-emerald-700 active:scale-90 transition-all"
            >
              🚀
            </button>
          </div>
        </div>
      )}
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
