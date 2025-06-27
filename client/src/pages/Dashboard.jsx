import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlusCircle } from "react-icons/fa";

const Dashboard = () => {
  const [quarter, setQuarter] = useState("Q1 2025");

  const statusStats = [
    { label: "On Track", color: "bg-green-500" },
    { label: "Behind", color: "bg-yellow-400" },
    { label: "At Risk", color: "bg-red-400" },
    { label: "Back Burner", color: "bg-gray-400" },
    { label: "Not Started", color: "bg-purple-400" },
  ];

  return (
    <div className="text-gray-800">
      {/* Greeting */}
      <motion.h1
        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome back, Sivaramakrishnan 👋
      </motion.h1>

      {/* Quarter Selector */}
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-600 mr-2">Viewing:</label>
        <select
          value={quarter}
          onChange={(e) => setQuarter(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
        >
          <option>Q1 2025</option>
          <option>Q2 2025</option>
          <option>Q3 2025</option>
          <option>Q4 2025</option>
        </select>
      </div>

      {/* OKR Overview */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-white/70 rounded-xl shadow-md">
          <p className="text-sm font-medium text-gray-600 mb-1">Overall Progress</p>
          <h2 className="text-2xl font-bold text-blue-600">0%</h2>
        </div>
        <div className="p-6 bg-white/70 rounded-xl shadow-md">
          <p className="text-sm font-medium text-gray-600 mb-1">Score</p>
          <h2 className="text-2xl font-bold text-purple-600">0.0</h2>
        </div>
        <div className="p-6 bg-white/70 rounded-xl shadow-md">
          <p className="text-sm font-medium text-gray-600 mb-1">Total OKRs</p>
          <h2 className="text-2xl font-bold text-pink-500">0</h2>
        </div>
      </div>

      {/* Status Breakdown */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
        {statusStats.map((status, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md ${status.color}/80 text-white font-semibold text-sm text-center`}
          >
            {status.label}
          </div>
        ))}
      </div>

      {/* Empty State & CTA */}
      <div className="bg-white/70 p-10 rounded-2xl text-center shadow-md">
        <p className="text-lg font-medium mb-4">You have no OKRs for this quarter yet.</p>
        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-[1.02] shadow-lg transition">
          <FaPlusCircle />
          Create New OKR
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
