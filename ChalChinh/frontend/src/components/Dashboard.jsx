import React from "react";

export default function Dashboard({ user }) {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-[#d0f0c0] to-[#f5f5dc]">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          Welcome {user?.name || user?.email} 👋
        </h1>
        <p className="text-green-600">This is your ChalChinh Transliteration Dashboard</p>
      </div>
    </div>
  );
}
