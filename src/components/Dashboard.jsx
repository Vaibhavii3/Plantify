import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // Import useTheme hook

const Dashboard = () => {
  const Navigate = useNavigate();
  const { theme } = useTheme(); // Get dark mode state from ThemeContext
  const isDarkMode = theme === 'dark'; // Check if dark mode is active

  return (
    <div className={`min-h-screen p-8 mt-12 ${isDarkMode ? "text-white" : "text-gray-800"}`}       style={{
      backgroundImage: isDarkMode
        ? "none"
        : "url('bg.jpg')",
      backgroundBlendMode: isDarkMode ? "none" : "overlay",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* Header */}
      <header className={`flex items-center justify-between p-4 rounded-lg shadow ${isDarkMode ? "bg-green-600 text-white" : "bg-green-500 text-white"}`}>
        <h1 className="text-2xl font-bold">Plantify Dashboard</h1>
        <button className={`px-4 py-2 rounded shadow ${isDarkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-white text-green-500 hover:bg-gray-200"}`}>
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="mt-8">
        {/* Welcome Section */}
        <section className={`p-6 rounded-lg shadow mb-8 ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}>
          <h2 className="text-xl font-bold mb-4">Welcome Back!</h2>
          <p>Explore new groups, participate in discussions, and stay connected with nature lovers.</p>
        </section>

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* My Groups */}
          <div className={`p-4 rounded-lg shadow ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}>
            <h3 className={`text-lg font-bold ${isDarkMode ? "text-green-400" : "text-green-600"}`}>My Groups</h3>
            <ul className="mt-2">
              <li className="py-2 border-b">🌱 Gardening Enthusiasts</li>
              <li className="py-2 border-b">🍃 Nature Walks</li>
              <li className="py-2">🌍 Eco-Friendly Hacks</li>
            </ul>
          </div>

          {/* Popular Discussions */}
          <div className={`p-4 rounded-lg shadow ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}>
            <h3 className={`text-lg font-bold ${isDarkMode ? "text-green-400" : "text-green-600"}`}>Popular Discussions</h3>
            <ul className="mt-2">
              <li className="py-2 border-b">How to grow herbs indoors?</li>
              <li className="py-2 border-b">Best practices for composting</li>
              <li className="py-2">Eco-friendly travel tips</li>
            </ul>
          </div>

          {/* Upcoming Events */}
          <div className={`p-4 rounded-lg shadow ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}>
            <h3 className={`text-lg font-bold ${isDarkMode ? "text-green-400" : "text-green-600"}`}>Upcoming Events</h3>
            <ul className="mt-2">
              <li className="py-2 border-b">🌳 Tree-Planting Drive (April 22)</li>
              <li className="py-2 border-b">🦜 Bird Watching Walk (April 25)</li>
              <li className="py-2">🍀 Green Living Workshop (April 30)</li>
            </ul>
          </div>
        </section>

        {/* Explore Button */}
        <button
          onClick={() => Navigate("/explore")}
          className={`px-6 py-3 rounded-lg mt-5 transition-colors ${isDarkMode ? "bg-green-600 text-white hover:bg-green-600" : "bg-green-500 text-white hover:bg-green-600"}`}
        >
          Explore Groups and Events
        </button>
      </main>
    </div>
  );
};

export default Dashboard;