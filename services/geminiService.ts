
import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStyleAdvice = async (userInput: string) => {
  const productList = PRODUCTS.map(p => `${p.name} (${p.category})`).join(', ');
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userInput,
    config: {
      systemInstruction: `
        You are a world-class fashion stylist for the streetwear brand "not my style" (NMS).
        The brand vibe is minimalist, edgy, and unconventional.
        Available products: ${productList}.
        Help the user find the perfect look based on their occasion, mood, or personality.
        Be concise, cool, and a bit rebellious in your tone.
        Return your response in JSON format.
      `,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          styleAdvice: {
            type: Type.STRING,
            description: "Personalized style advice for the user."
          },
          suggestedProducts: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "List of product names from NMS that match the advice."
          }
        },
        required: ["styleAdvice", "suggestedProducts"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
};
