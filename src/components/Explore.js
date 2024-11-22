import React from "react";
import { useNavigate } from "react-router-dom";

const Explore = () => {

    const Navigate = useNavigate();

    const handleBackToDashboard = () => {
        Navigate('/dashboard');
    }

    const groups = [
        { name: '🌱 Gardening Enthusiasts', description: 'Tips and tricks for gardening.' },
        { name: '🍃 Nature Walks', description: 'Explore nature trails together.' },
        { name: '🌍 Eco-Friendly Hacks', description: 'Sustainable living ideas.' },
    ];

    const discussions = [
        { title: 'How to grow herbs indoors?', tags: ['Gardening', 'Herbs'] },
        { title: 'Best practices for composting', tags: ['Composting', 'Eco-Friendly'] },
        { title: 'Eco-friendly travel tips', tags: ['Travel', 'Green Living'] },
    ];

    const events = [
        { name: '🌳 Tree-Planting Drive', date: 'April 22', location: 'City Park' },
        { name: '🦜 Bird Watching Walk', date: 'April 25', location: 'National Forest' },
        { name: '🍀 Green Living Workshop', date: 'April 30', location: 'Eco Center' },
    ];
    
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <header className="flex items-center justify-between p-4 bg-green-500 text-white rounded-lg shadow">
                <h1 className="text-2xl font-bold"> Explore </h1>
                <button onClick={handleBackToDashboard} className="bg-white text-green-500 px-4 py-2 rounded shadow hover:bg-gray-200">
                    Back to Dashboard
                </button>
            </header>

            <main className="mt-8 space-y-8">
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-bold text-green-600 mb-4"> Groups to Join</h2>
                    <ul className="space-y-4">
                        {groups.map((group, index) => (
                            <li key={index} className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-bold">{group.name}</h3>
                                    <p className="text-gray-700">{group.description}</p>
                                </div>
                                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                    Join
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-bold text-green-600 mb-4"> Popular Discussions </h2>
                    <ul className="space-y-4">
                        {discussions.map((discussion, index) => (
                            <li key={index} className="flex flex-col">
                                <h3 className="text-lg font-bold">{discussion.title}</h3>
                                <div className="flex gap-2 mt-2">
                                    {discussion.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-bold text-green-600 mb-4"> Upcoming Events </h2>
                    <ul className="space-y-4">
                        {events.map((event, index) => (
                            <li key={index}
                                className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-bold">{event.name}</h3>
                                        <p className="text-gray-700">{event.date} | {event.location} </p>
                                    </div>
                                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
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