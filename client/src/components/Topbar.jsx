import { useState } from "react";
import { FaSun, FaMoon, FaBell, FaSignOutAlt } from "react-icons/fa";

const Topbar = ({ onToggleTheme, darkMode }) => {
  const [notifications] = useState([
    { id: 1, message: "Your Q2 OKRs are due next week!" },
    { id: 2, message: "New alignment suggestions available." },
  ]);

  return (
    <header className="w-full bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6 py-3 flex justify-between items-center shadow-md z-10 sticky top-0">
      {/* Left Branding */}
      <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        MyOKR
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-5 text-purple-700">
        {/* Theme Toggle */}
        <button
          onClick={onToggleTheme}
          className="hover:text-purple-900 transition"
          title="Toggle Dark Mode"
        >
          {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
        </button>

        {/* Notifications */}
        <div className="relative group">
          <FaBell className="cursor-pointer text-lg hover:text-purple-900 transition" title="Notifications" />
          <div className="absolute top-8 right-0 w-64 bg-white rounded-lg shadow-md p-3 text-sm hidden group-hover:block z-50">
            {notifications.map((note) => (
              <div key={note.id} className="py-1 border-b last:border-none text-gray-700">
                {note.message}
              </div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={() => alert("🚪 Logout logic goes here")}
          className="hover:text-red-600 transition"
          title="Logout"
        >
          <FaSignOutAlt className="text-lg" />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
