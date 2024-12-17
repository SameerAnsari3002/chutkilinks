"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Loader from "@/components/Loader";
import { supabase } from "@/lib/supabaseClient.js";

export default function DashboardLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  // Function to check authentication
  const checkAuth = async () => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        console.error("Auth Error:", error?.message);
        router.push("/login");
      } else {
        setUser(user);
      }
    } catch (err) {
      console.error("Unexpected Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [router]);

  if (loading) return <Loader />;

  const mainClass = `transition-all duration-300 ${
    isOpen ? "ml-64" : "ml-16"
  } flex-1`;

  return (
    <div className="min-h-screen bg-purple-100 text-gray-900 flex">
      <Sidebar user={user} isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main className={mainClass}>{children}</main>
    </div>
  );
}
