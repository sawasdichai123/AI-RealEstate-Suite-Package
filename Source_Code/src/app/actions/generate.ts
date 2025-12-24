// src/app/actions/generate.ts
"use server"
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateContent(formData: any) {
  const { title, location, features } = formData;
  
  const prompt = `You are a professional Real Estate Marketer. 
  Write a property description for: ${title} located in ${location}. 
  Highlight these features: ${features}. 
  Provide 3 versions: 1. Professional Website 2. Engaging Instagram 3. Short Facebook Ad.`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}