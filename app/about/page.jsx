import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-purple-100 min-h-screen py-12 px-6 md:px-12 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            About Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to the future of URL shortening! Our mission is to make 
            sharing links easier, faster, and more secure. Unlike traditional 
            services, we prioritize user privacy, ensuring that your data is 
            never tracked or shared.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you&apos;re a marketer, developer, or an everyday internet user, 
            our tool is built to save you time and provide seamless functionality. 
            Join thousands of users who trust us to simplify their online sharing 
            experience.
          </p>
          <Link href="/features">
            <button className="bg-purple-600 rounded-lg shadow-lg px-6 py-3 text-lg font-semibold text-white hover:bg-purple-700 transition duration-300 ease-in-out">
              Learn More
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative h-64 sm:h-80 md:h-full flex items-center justify-center overflow-hidden">
          <Image
            className="mix-blend-darken"
            alt="About Us illustration"
            src="/vector.jpg"
            layout="intrinsic"
            width={700}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
