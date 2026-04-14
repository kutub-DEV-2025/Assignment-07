import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">

      <h1 className="text-6xl font-bold text-[#244D3F]">
        404
      </h1>

      <h2 className="text-2xl font-semibold text-gray-900 mt-4">
        Page not found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-[#244D3F] text-white rounded-lg hover:bg-[#1f4035] transition"
      >
        ← Back to Home
      </Link>

    </div>
  );
}