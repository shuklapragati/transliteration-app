import React, { useState } from "react";

export default function AuthPage({ onLogin, onRegister }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#f5f5dc]">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="w-full bg-green-600 text-white py-2 rounded">
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          New user?{" "}
          <button onClick={onRegister} className="text-green-700 underline">
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
