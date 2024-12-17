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
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ user, isOpen, toggleSidebar, onLogout }) => {
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);

  // Utility function for getting user avatar
  const getAvatar = () => {
    const defaultAvatars = {
      male: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      female: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
    };

    return user?.profileImage
      ? user.profileImage
      : user?.gender === "male"
      ? defaultAvatars.male
      : defaultAvatars.female;
  };

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

      {/* Profile Section */}
      {isOpen && (
        <div
          className="flex flex-col items-center relative"
          onMouseEnter={() => setIsHoveringProfile(true)}
          onMouseLeave={() => setIsHoveringProfile(false)}
        >
          <img
            src={getAvatar()}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-purple-500 mb-2 cursor-pointer"
          />
          <h2 className="font-semibold text-lg">{user?.user_metadata?.email || "User"}</h2>

          {/* Hover Modal for Logout */}
          {/* {isHoveringProfile && (
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 shadow-lg rounded-md p-1 w-24 z-50">
              <button
                onClick={onLogout}
                className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md w-full text-left text-sm"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )} */}
        </div>
      )}

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
