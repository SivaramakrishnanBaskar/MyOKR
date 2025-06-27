import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} toggleSidebar={() => setCollapsed(!collapsed)} />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          collapsed ? "ml-16" : "ml-64"
        }`}
      >
        <Topbar />
        <main className="pt-16 p-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 min-h-screen transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
