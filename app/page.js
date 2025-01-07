import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen flex items-center justify-center py-12 px-6 md:px-12 lg:py-20">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl w-full">
        {/* Left Content */}
        <div className="flex flex-col justify-center gap-6 items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Looking for the Best URL Shortener?
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-md">
            The best URL shortener in the market! We make URL shortening simple, fast, and reliable.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-6">
            <Link href="/signup">
              <button className="bg-purple-600 rounded-lg shadow-lg px-8 py-3 text-lg font-semibold text-white hover:bg-purple-700 transition duration-300 ease-in-out">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <Image
            className="mix-blend-darken object-contain"
            alt="Illustration showing efficient URL shortening"
            src="/MyApril8.jpg"
            layout="fill"
            priority
          />
        </div>
      </section>
    </main>
  );
}
