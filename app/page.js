import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

// Update the font path to point to the public folder
const poppins = localFont({
  src: "/fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen flex items-center justify-center p-4">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        <div className="flex flex-col gap-4 items-center justify-center text-center md:text-left">
          <p className={`text-2xl md:text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="px-6 md:px-0 md:w-3/4 text-gray-700">
            We are the most straightforward URL Shortener in the world.
          </p>
          <div className="flex gap-3">
            <Link href="/shorten">
              <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold text-white hover:bg-purple-600 transition duration-200">
                GET START
              </button>
            </Link>
          </div>
        </div>
        <div className="relative h-64 md:h-auto flex items-center justify-center">
          <Image
            className="mix-blend-darken object-contain"
            alt="An image of a vector"
            src="/vector.jpg"
            fill
          />
        </div>
      </section>
    </main>
  );
}
