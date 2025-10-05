import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/welcome");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#f5f5dc]">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-2xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6">Login</h2>
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 mb-4 border border-green-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            className="text-green-700 cursor-pointer font-semibold"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}
