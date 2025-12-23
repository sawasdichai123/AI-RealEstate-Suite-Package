export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-slate-800">AI Real Estate Marketing Suite</h1>
        <p className="text-slate-500 mb-6">สร้างคอนเทนต์ขายบ้านระดับมืออาชีพในคลิกเดียว</p>
        
        {/* สร้าง Form ตรงนี้ */}
        <form className="space-y-4">
          <input className="w-full border p-2 rounded" placeholder="ชื่อโครงการ/บ้าน" />
          <textarea className="w-full border p-2 rounded" placeholder="จุดเด่น (เช่น สระว่ายน้ำ, ใกล้ BTS)" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Generate Content ✨
          </button>
        </form>
      </div>
    </main>
  );
}