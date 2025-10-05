import { useNavigate } from "react-router-dom";

export default function WelcomeBack() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#f5f5dc]">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Welcome Back to ChalChinh 🌿
      </h1>
      <button
        onClick={() => navigate("/app")}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Go to App
      </button>
    </div>
  );
}
