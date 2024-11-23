import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Explore = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  const groups = [
    { name: "🌱 Gardening Enthusiasts", description: "Tips and tricks for gardening." },
    { name: "🍃 Nature Walks", description: "Explore nature trails together." },
    { name: "🌍 Eco-Friendly Hacks", description: "Sustainable living ideas." },
  ];

  const discussions = [
    { title: "How to grow herbs indoors?", tags: ["Gardening", "Herbs"] },
    { title: "Best practices for composting", tags: ["Composting", "Eco-Friendly"] },
    { title: "Eco-friendly travel tips", tags: ["Travel", "Green Living"] },
  ];

  const events = [
    { name: "🌳 Tree-Planting Drive", date: "April 22", location: "City Park" },
    { name: "🦜 Bird Watching Walk", date: "April 25", location: "National Forest" },
    { name: "🍀 Green Living Workshop", date: "April 30", location: "Eco Center" },
  ];

  return (
    <div
      className={`min-h-screen p-8 mt-12 ${
        isDarkMode ? "text-gray-200" : "text-gray-800"
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
      {/* Header */}
      <header
        className={`flex items-center justify-between p-4 rounded-lg shadow ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-green-500 text-white"
        }`}
      >
        <h1 className="text-2xl font-bold">Explore</h1>
        <button
          onClick={handleBackToDashboard}
          className={`px-4 py-2 rounded shadow ${
            isDarkMode
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
              : "bg-white text-green-500 hover:bg-gray-200"
          }`}
        >
          Back to Dashboard
        </button>
      </header>

      {/* Main Content */}
      <main className="mt-8 space-y-8">
        {/* Groups Section */}
        <section
          className={`p-6 rounded-lg shadow ${
            isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white"
          }`}
        >
          <h2
            className={`text-xl font-bold mb-4 ${
              isDarkMode ? "text-green-400" : "text-green-600"
            }`}
          >
            Groups to Join
          </h2>
          <ul className="space-y-4">
            {groups.map((group, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">{group.name}</h3>
                  <p>{group.description}</p>
                </div>
                <button
                  className={`px-4 py-2 rounded ${
                    isDarkMode
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  Join
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Discussions Section */}
        <section
          className={`p-6 rounded-lg shadow ${
            isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white"
          }`}
        >
          <h2
            className={`text-xl font-bold mb-4 ${
              isDarkMode ? "text-green-400" : "text-green-600"
            }`}
          >
            Popular Discussions
          </h2>
          <ul className="space-y-4">
            {discussions.map((discussion, index) => (
              <li key={index} className="flex flex-col">
                <h3 className="text-lg font-bold">{discussion.title}</h3>
                <div className="flex gap-2 mt-2">
                  {discussion.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-xs px-2 py-1 rounded ${
                        isDarkMode
                          ? "bg-green-600 text-white"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Events Section */}
        <section
          className={`p-6 rounded-lg shadow ${
            isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white"
          }`}
        >
          <h2
            className={`text-xl font-bold mb-4 ${
              isDarkMode ? "text-green-400" : "text-green-600"
            }`}
          >
            Upcoming Events
          </h2>
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">{event.name}</h3>
                  <p>
                    {event.date} | {event.location}
                  </p>
                </div>
                <button
                  className={`px-4 py-2 rounded ${
                    isDarkMode
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  Register
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Explore;