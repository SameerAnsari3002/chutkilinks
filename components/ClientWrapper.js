"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const ClientWrapper = ({ children }) => {
  const pathname = usePathname();

  // Hide Navbar on specific paths
  const hideNavbarPaths = ["/dashboard"];
  const showNavbar = !hideNavbarPaths.includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
};

export default ClientWrapper;
