import React from 'react';

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 font-sans p-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-medium mb-2">Page Not Found</h2>
            <p className="text-lg text-gray-600 text-center max-w-xl">
                The page you're looking for doesn't exist. Please check the URL or navigate back to the home page.
            </p>
            {/* Optional: Add a link to the home page */}
            <a href="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Go to Home
            </a>
        </div>
    );
}

export default NotFound;