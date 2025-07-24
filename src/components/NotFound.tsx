import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-6">
      <h1 className="text-6xl font-bold text-blue-400 mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 underline hover:text-blue-600">Go to Home</Link>
    </div>
  );
};

export default NotFound;
