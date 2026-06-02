"use client";

import { useState } from "react";
import Sidebar from "./component/Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div
        className={`relative transition-all duration-300 pt-16 lg:pt-20 ${
          sidebarOpen ? "lg:pl-[300px]" : "lg:pl-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
