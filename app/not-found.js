import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-purple-500 mb-4">404</h1>
        <h2 className="text-4xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
