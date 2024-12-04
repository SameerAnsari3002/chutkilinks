import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaTachometerAlt,
  FaLink,
  FaDollarSign,
  FaToolbox,
  FaUserFriends,
  FaCog,
  FaHeadset,
  FaGlobe,
  FaBars,
  FaTimes,
  FaHome,
} from "react-icons/fa";

const Sidebar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Default avatars for male and female users
  const defaultAvatars = {
    male: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    female: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  };
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header with Toggle Button */}
      <div className="flex items-center justify-between bg-purple-700 text-white p-4">
        <h1 className="text-xl font-bold">ChutkiLinks</h1>
        <button onClick={toggleSidebar} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-purple-700 text-white fixed top-0 left-0 h-full z-20 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 p-4`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center mt-4 mb-8">
          <img
            src={
              user?.profileImage
                ? user.profileImage
                : user?.gender === "male"
                ? defaultAvatars.male
                : defaultAvatars.female
            }
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-purple-500 mb-2"
          />
          <h2 className="font-semibold text-lg">{user?.username || "User"}</h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center gap-3 text-white hover:bg-purple-600 p-2 rounded-md">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link href="/dashboard" className="flex items-center gap-3 text-white hover:bg-purple-600 p-2 rounded-md">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>
          <Link href="/manage-links" className="flex items-center gap-3 text-white hover:bg-purple-600 p-2 rounded-md">
            <FaLink />
            <span>Manage Links</span>
          </Link>
          <Link href="/payments" className="flex items-center gap-3 text-white hover:bg-purple-600 p-2 rounded-md">
            <FaDollarSign />
            <span>Payments</span>
          </Link>
          <Link href="/tools" className="flex items-center gap-3 text-white hover:bg-purple-600 p-2 rounded-md">
            <FaToolbox />
            <span>Tools</span>
          </Link>
          <Link href="/referrals" className="flex items-center gap-3 text-white hover:bg-purple-600 p-2 rounded-md">
            <FaUserFriends />
            <span>Referrals</span>
          </Link>
          <Link href="/settings" className="flex items-center gap-3 text-white hover:bg-purple-600 p-2 rounded-md">
            <FaCog />
            <span>Settings</span>
          </Link>
          <Link href="/support" className="flex items-center gap-3 text-white hover:bg-purple-600 p-2 rounded-md">
            <FaHeadset />
            <span>Support</span>
          </Link>
          <Link href="/global" className="flex items-center gap-3 text-white hover:bg-purple-600 p-2 rounded-md">
            <FaGlobe />
            <span>Global</span>
          </Link>
        </nav>
      </aside>

      {/* Overlay for when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
