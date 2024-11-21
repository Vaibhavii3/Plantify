import React from "react";

const LandingPage = () => {
    return (
        <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-green-600">
                Welcome to Plantify
            </h1>
            <p className="mt-4 text-lg text-gray-700">
                Connect with nature lovers, share ideas, and grow together.
            </p>
            <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600">
                Get Started
            </button>
        </div>
    );
};

export default LandingPage;