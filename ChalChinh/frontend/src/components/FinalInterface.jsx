export default function FinalInterface() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#f5f5dc]">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        ChalChinh Transliteration App
      </h1>
      <textarea
        placeholder="Type here..."
        className="w-1/2 h-40 p-4 border border-green-300 rounded-lg mb-4"
      />
      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
        Transliterate
      </button>
    </div>
  );
}
