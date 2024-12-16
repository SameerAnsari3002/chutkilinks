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

const Sidebar = ({ user, isOpen, toggleSidebar }) => {
  // Default avatars for male and female users
  const defaultAvatars = {
    male: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    female: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  };

  // Navigation items with icon and label
  const navItems = [
    { icon: <FaHome />, label: "Home", href: "/" },
    { icon: <FaTachometerAlt />, label: "Dashboard", href: "/dashboard" },
    { icon: <FaLink />, label: "Manage Links", href: "/manage-links" },
    { icon: <FaDollarSign />, label: "Payments", href: "/payments" },
    { icon: <FaToolbox />, label: "Tools", href: "/tools" },
    { icon: <FaUserFriends />, label: "Referrals", href: "/referrals" },
    { icon: <FaCog />, label: "Settings", href: "/settings" },
    { icon: <FaHeadset />, label: "Support", href: "/support" },
    { icon: <FaGlobe />, label: "Global", href: "/global" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-purple-700 text-white 
        transition-all duration-300 ease-in-out z-20
        ${isOpen ? "w-64" : "w-16"}`}
    >
      {/* Header with Toggle Button */}
      <div className="relative p-4 h-16">
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Profile Section */}
      {isOpen && (
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
      )}

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2 px-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 text-white hover:bg-purple-600 p-2 rounded-md 
              ${isOpen ? "justify-start" : "justify-center"}`}
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
