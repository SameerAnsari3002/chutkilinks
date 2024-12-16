"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient.js";
import Loader from "@/components/Loader";
import React from "react";
import Sidebar from "../../components/Sidebar";

const DashboardContent = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      {/* Add your URL shortener and other dashboard features here */}
    </div>
  );
};

const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };

    checkUser();
  }, [router]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-purple-100 text-gray-900 flex">
      <Sidebar />
      <main className="flex-1 ml-16 transition-all duration-300">
        <DashboardContent />
      </main>
    </div>
  );
};

export default Dashboard;