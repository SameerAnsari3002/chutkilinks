"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient.js";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
  const router = useRouter();

  useEffect(() => {
    const getUserSession = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUserSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
  };

  return (
    <nav className="h-16 bg-purple-700 flex justify-between px-4 lg:px-8 items-center text-white">
      {/* Logo */}
      <div className="logo font-bold text-xl lg:text-2xl">
        <Link href="/">ChutkiLinks</Link>
      </div>

      {/* Desktop and Tablet Navigation */}
      <ul className="hidden sm:flex gap-4 items-center">
        <Link href="/">
          <li className="hover:underline cursor-pointer">Home</li>
        </Link>
        {user?.name ?? (
          <Link href="/dashboard">
            <li className="hover:underline cursor-pointer">Dashboard</li>
          </Link>
        )}

        <Link href="/about">
          <li className="hover:underline cursor-pointer">About</li>
        </Link>
        <Link href="/contact">
          <li className="hover:underline cursor-pointer">Contact Us</li>
        </Link>
        <li className="flex gap-2">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-purple-500 rounded-lg px-4 py-2 font-bold transition duration-200 hover:bg-purple-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/login">
                <button className="bg-purple-500 rounded-lg px-4 py-2 font-bold transition duration-200 hover:bg-purple-600">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="bg-purple-500 rounded-lg px-4 py-2 font-bold transition duration-200 hover:bg-purple-600">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="sm:hidden text-white font-bold text-xl"
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-2/3 max-w-xs h-full bg-purple-800 text-white z-50 p-6 shadow-lg flex flex-col">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-white text-2xl self-end mb-4"
            aria-label="Close Menu"
          >
            ×
          </button>
          <nav className="flex flex-col gap-4">
            <Link href="/" onClick={() => setIsSidebarOpen(false)}>
              <div className="hover:underline">Home</div>
            </Link>
            {user?.name ?? (
              <Link href="/" onClick={() => setIsSidebarOpen(false)}>
                <div className="hover:underline">Dashboard</div>
              </Link>
            )}
            <Link href="/about" onClick={() => setIsSidebarOpen(false)}>
              <div className="hover:underline">About</div>
            </Link>
            <Link href="/contact" onClick={() => setIsSidebarOpen(false)}>
              <div className="hover:underline">Contact Us</div>
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsSidebarOpen(false);
                  }}
                  className="bg-purple-500 rounded-lg px-4 py-2 font-bold transition duration-200 hover:bg-purple-600"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsSidebarOpen(false)}>
                    <button className="bg-purple-500 rounded-lg px-4 py-2 font-bold transition duration-200 hover:bg-purple-600">
                      Login
                    </button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsSidebarOpen(false)}>
                    <button className="bg-purple-500 rounded-lg px-4 py-2 font-bold transition duration-200 hover:bg-purple-600">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
