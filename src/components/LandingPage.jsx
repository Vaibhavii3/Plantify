import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gradient-to-r from-green-100 via-green-200 to-green-50 text-gray-800"
      }`}
      style={{
        backgroundImage: isDarkMode
          ? "none"
          : "url('bg.jpg')",
        backgroundBlendMode: isDarkMode ? "none" : "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {isDarkMode ? "Welcome to Plantify 🌿" : "Welcome to Plantify"}
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          {isDarkMode
            ? "Discover a community of nature lovers and grow your green knowledge."
            : "Connect with nature lovers, share ideas, and grow together."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={() => navigate("/auth")}
            className={`px-6 py-3 rounded-lg shadow-lg transition duration-300 ${
              isDarkMode
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/explore")}
            className={`px-6 py-3 rounded-lg shadow-lg transition duration-300 ${
              isDarkMode
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;