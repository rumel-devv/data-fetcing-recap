import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      
      {/* 404 Text */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-green-500">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-lg md:text-xl text-gray-300">
        Oops! Page not found
      </p>

      <p className="text-sm text-gray-400 mt-2 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;