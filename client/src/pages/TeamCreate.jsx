import React, { useState } from 'react';

const TeamCreate = () => {
  const [team, setTeam] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Team "${team}" under "${department}" created.`);
    setTeam("");
    setDepartment("");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">Create Team</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-lg shadow-md">
        <div>
          <label className="block text-gray-700">Team Name</label>
          <input
            type="text"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Assign to Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Create Team
        </button>
      </form>
    </div>
  );
};

export default TeamCreate;
