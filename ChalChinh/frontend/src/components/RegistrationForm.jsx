import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    language: "",
    phone: "",
    city: "",
    state: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/welcome");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#f5f5dc]">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Register
        </h2>
        <input
          type="text"
          placeholder="Native Language"
          className="w-full p-2 mb-4 border border-green-300 rounded-lg"
          value={form.language}
          onChange={(e) => setForm({ ...form, language: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-2 mb-4 border border-green-300 rounded-lg"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          className="w-full p-2 mb-4 border border-green-300 rounded-lg"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />
        <input
          type="text"
          placeholder="State"
          className="w-full p-2 mb-4 border border-green-300 rounded-lg"
          value={form.state}
          onChange={(e) => setForm({ ...form, state: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
