import Link from "next/link";
import { useState } from "react";
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

const Sidebar = ({ user, isOpen, toggleSidebar, onLogout }) => {
  // Navigation items
  const navItems = [
    { icon: <FaHome />, label: "Home", href: "/" },
    { icon: <FaTachometerAlt />, label: "Dashboard", href: "/dashboard" },
    { icon: <FaLink />, label: "Manage Links", href: "/dashboard/manage-links" },
    { icon: <FaDollarSign />, label: "Payments", href: "/dashboard/payment" },
    { icon: <FaToolbox />, label: "Tools", href: "/dashboard/tools" },
    { icon: <FaUserFriends />, label: "Referrals", href: "/dashboard/referrals" },
    { icon: <FaCog />, label: "Settings", href: "/dashboard/settings" },
    { icon: <FaHeadset />, label: "Support", href: "/dashboard/support" },
    { icon: <FaGlobe />, label: "Global", href: "/dashboard/global" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-purple-700 text-white transition-all duration-300 ease-in-out z-20 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Header with Toggle Button */}
      <div className="relative flex items-center justify-between p-4 h-16">
        {isOpen && <h1 className="text-xl font-bold">ChutkiLinks</h1>}
        <button
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
          className="text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2 px-2 mt-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 text-white hover:bg-purple-600 p-2 rounded-md ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {isOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
