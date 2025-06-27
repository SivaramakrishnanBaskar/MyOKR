import React, { useState } from "react";
import {
  FaPlus,
  FaUser,
  FaTrash,
  FaBullseye,
} from "react-icons/fa";

const OKRCreate = () => {
  const [users] = useState(["Siva B", "Ananya R", "Rahul D", "Priya K"]);
  const [objective, setObjective] = useState("");
  const [level, setLevel] = useState("Company");
  const [owner, setOwner] = useState("Siva B");
  const [period, setPeriod] = useState("2025");
  const [quarter, setQuarter] = useState("Q1");
  const [keyResults, setKeyResults] = useState([
    { team: "", kr: "", unit: "None", owner: "Siva B" },
  ]);

  const handleKRChange = (index, field, value) => {
    const updated = [...keyResults];
    updated[index][field] = value;
    setKeyResults(updated);
  };

  const addKeyResult = () => {
    setKeyResults([
      ...keyResults,
      { team: "", kr: "", unit: "None", owner: users[0] || "Unassigned" },
    ]);
  };

  const removeKeyResult = (index) => {
    setKeyResults(keyResults.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      objective,
      level,
      owner,
      period,
      quarter,
      keyResults,
    };
    console.log("OKR Submitted:", data);
    alert("✅ OKR created successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center gap-2">
        <FaBullseye /> Create Company OKR
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg p-6 rounded-lg">
        {/* Objective */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Objective</label>
          <input
            type="text"
            placeholder="Type your objective here"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Objective Meta Fields */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full border px-3 py-2 rounded-md border-gray-300"
            >
              <option>Company</option>
              <option>Department</option>
              <option>Team</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Owner</label>
            <select
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              className="w-full border px-3 py-2 rounded-md border-gray-300"
            >
              {users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Period</label>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full border px-3 py-2 rounded-md border-gray-300"
            >
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Quarter</label>
            <select
              value={quarter}
              onChange={(e) => setQuarter(e.target.value)}
              className="w-full border px-3 py-2 rounded-md border-gray-300"
            >
              <option value="Q1">Q1 (Apr-Jun)</option>
              <option value="Q2">Q2 (Jul-Sep)</option>
              <option value="Q3">Q3 (Oct-Dec)</option>
              <option value="Q4">Q4 (Jan-Mar)</option>
            </select>
          </div>
        </div>

        {/* Key Results */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">Key Results</label>

          <div className="space-y-4">
            {keyResults.map((kr, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center bg-gray-50 p-3 rounded-md border"
              >
                <input
                  type="text"
                  placeholder="Team"
                  value={kr.team}
                  onChange={(e) => handleKRChange(index, "team", e.target.value)}
                  className="px-3 py-2 border rounded-md border-gray-300"
                />
                <input
                  type="text"
                  placeholder="Type your key result here"
                  value={kr.kr}
                  onChange={(e) => handleKRChange(index, "kr", e.target.value)}
                  required
                  className="px-3 py-2 border rounded-md border-gray-300"
                />
                <select
                  value={kr.unit}
                  onChange={(e) => handleKRChange(index, "unit", e.target.value)}
                  className="px-3 py-2 border rounded-md border-gray-300"
                >
                  <option>None</option>
                  <option>%</option>
                  <option>₹</option>
                  <option># Count</option>
                </select>
                <select
                  value={kr.owner}
                  onChange={(e) => handleKRChange(index, "owner", e.target.value)}
                  className="px-3 py-2 border rounded-md border-gray-300"
                >
                  {users.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addKeyResult}
            className="mt-4 flex items-center text-purple-600 hover:text-purple-800 font-medium"
          >
            <FaPlus className="mr-2" /> Add Key Result
          </button>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-md"
          >
            Save Company OKR
          </button>
        </div>
      </form>
    </div>
  );
};

export default OKRCreate;
