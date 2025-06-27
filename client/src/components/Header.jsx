import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-16 bg-white/70 backdrop-blur-md shadow-md flex items-center justify-between px-6">
      <div className="flex items-center gap-3 w-1/2">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search OKRs, People, Teams..."
          className="bg-transparent w-full outline-none text-sm text-gray-700 placeholder-gray-500"
        />
      </div>
      <div className="flex items-center gap-6 text-gray-600 text-lg">
        <FaBell />
        <FaUserCircle />
      </div>
    </header>
  );
};

export default Header;
