


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    // 2 second ke baad Login page pe bhej dega
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-beige">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="text-softgreen text-4xl font-bold"
      >
        ChalChinh 🌿
      </motion.div>
    </div>
  );
}
