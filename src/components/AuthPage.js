import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        Navigate('/dashboard');
    }


    return (
        <div className="bg-green-50 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center text-green-600">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>
                <form onSubmit={handleFormSubmit} className="mt-6">
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Name 
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-green-400" />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-green-400" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input 
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-green-400" />
                    </div>
                    <button 
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
                            {isLogin ? 'Login' : 'Sign Up'}
                    </button>        
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    {isLogin ? 'New to Plantify?' : 'Already have an account?'}
                    <button onClick={toggleAuthMode} className="ml-1 text-green-500 font-semibold hover:underline">
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;