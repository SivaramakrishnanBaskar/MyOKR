import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md h-16 flex items-center justify-between px-6 sticky top-0 z-30 ml-64">
      <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>
      <div className="flex items-center gap-4">
        <FaBell className="text-gray-500 text-xl cursor-pointer" />
        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">SB</div>
      </div>
    </header>
  );
};

export default Navbar;
