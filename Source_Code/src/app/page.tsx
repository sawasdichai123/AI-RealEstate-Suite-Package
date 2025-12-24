// src/app/page.tsx
"use client"
import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("")

  return (
    <main className="min-h-screen bg-slate-50 p-8 text-slate-900">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">AI Real Estate Pro ✨</h1>
        <p className="text-slate-500 mb-8 text-lg">Generate high-converting property descriptions in seconds.</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Property Details</label>
            <textarea 
              className="w-full p-4 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition"
              rows={4}
              placeholder="e.g. Modern 3-bedroom villa with private pool, near BTS Ekkamai..."
            />
          </div>
          
          <button 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95"
          >
            {loading ? "Generating..." : "Generate Marketing Content"}
          </button>

          {result && (
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="font-bold text-blue-800 mb-2">AI Generated Result:</h3>
              <p className="whitespace-pre-wrap leading-relaxed">{result}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}