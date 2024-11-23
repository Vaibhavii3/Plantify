import React from "react";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, useTheme } from "../src/context/ThemeContext";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <Router>
      <div
        className={`flex flex-col min-h-screen ${
          isDarkMode ? "dark" : "light"
        }`}
      >
        <Navbar />
        <main className="flex-grow">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const MainApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default MainApp;