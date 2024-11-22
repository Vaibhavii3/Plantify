import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const Navigate = useNavigate();

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <header className="flex items-center justify-between p-4 bg-green-500 text-white rounded-lg shadow">
                <h1 className="text-2xl font-bold"> Plantify Dashboard</h1>
                <button className="bg-white text-green-500 px-4 py-2 rounded shadow hover:bg-gray-200">
                    Logout
                </button>
            </header>
            <main className="mt-8">
                <section className="bg-white p-6 rounded-lg shadow mb-8">
                    <h2 className="text-xl font-bold mb-4"> Welcome Back! </h2>
                    <p className="text-gray-700">
                        Explore new groups, participate in discussions, and stay connected with nature lovers.
                    </p>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-bold text-green-600"> My Groups </h3>
                        <ul className="mt-2">
                            <li className="py-2 border-b"> 🌱 Gardening Enthusiasts </li>
                            <li className="py-2 border-b"> 🍃 Nature Walks </li>
                            <li className="py-2"> 🌍 Eco-Friendly Hacks </li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-bold text-green-600"> Popular Discussions </h3>
                        <ul className="mt-2">
                            <li className="py-2 border-b"> How to grow herbs indoors? </li>
                            <li className="py-2 border-b"> Best practices for composting </li>
                            <li className="py-2"> Eco-friendly travel tips </li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-bold text-green-600"> Upcoming Events </h3>
                        <ul className="mt-2">
                            <li className="py-2 border-b"> 🌳 Tree-Planting Drive (April 22) </li>
                            <li className="py-2 border-b"> 🦜 Bird Watching Walk (April 25) </li>
                            <li className="py-2"> 🍀 Green Living Workshop (April 30) </li>
                        </ul>
                    </div>
                </section>
                <button onClick={() => Navigate('/explore')} className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"> Explore Groups and Events </button>
            </main>
        </div>
    );
};

export default Dashboard;