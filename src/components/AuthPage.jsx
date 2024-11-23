import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? "text-white" : "text-gray-800"
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
      <div
        className={`p-8 rounded-lg shadow-md w-11/12 sm:w-96 ${
          isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white"
        }`}
      >
        <h2
          className={`text-2xl font-bold text-center ${
            isDarkMode ? "text-green-400" : "text-green-600"
          }`}
        >
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleFormSubmit} className="mt-6">
          {!isLogin && (
            <div className="mb-4">
              <label
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white focus:ring-green-400"
                    : "border-gray-300 focus:ring-green-400"
                }`}
              />
            </div>
          )}
          <div className="mb-4">
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-green-400"
                  : "border-gray-300 focus:ring-green-400"
              }`}
            />
          </div>
          <div className="mb-6">
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-green-400"
                  : "border-gray-300 focus:ring-green-400"
              }`}
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 rounded-lg text-white transition duration-300 ${
              isDarkMode
                ? "bg-green-500 hover:bg-green-700"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          {isLogin ? "New to Plantify?" : "Already have an account?"}
          <button
            onClick={toggleAuthMode}
            className={`ml-1 font-semibold underline transition ${
              isDarkMode ? "text-green-400 hover:text-green-300" : "text-green-500 hover:text-green-400"
            }`}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;