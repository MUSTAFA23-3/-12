
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAiAssistantResponse = async (userMessage: string) => {
  if (!API_KEY) return "عذراً، نظام الذكاء الاصطناعي غير مفعل حالياً.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "أنت المساعد الذكي الخاص بمنصة الأستاذ محمد زايد، مدرس الأحياء والجيولوجيا. وظيفتك الإجابة على استفسارات الطلاب بأسلوب لطيف ومشجع. ركز على تقديم معلومات عن الكورسات، طرق الدفع (فودافون كاش، فيزا)، وكيفية التواصل مع المستر. لا تخرج عن سياق المنصة التعليمية.",
        temperature: 0.7,
      },
    });
    return response.text || "لم أستطع فهم طلبك، يرجى المحاولة مرة أخرى.";
  } catch (error) {
    console.error("AI Error:", error);
    return "حدث خطأ أثناء التواصل مع المساعد الذكي.";
  }
};
