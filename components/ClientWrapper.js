"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const ClientWrapper = ({ children }) => {
  const pathname = usePathname();

  // Hide Navbar for /dashboard and all nested routes under it
  const hideNavbar = pathname.startsWith("/dashboard");

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

export default ClientWrapper;
