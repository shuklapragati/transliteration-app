import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/globals.css";

function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, [navigate]);

  return (
    <div className="loading-container">
      <h1 className="logo">🌿 ChalChinh</h1>
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingScreen;
