import React, { useState } from "react";
import { FaUserPlus, FaSearch, FaBullseye, FaTrash } from "react-icons/fa";

const UserCreate = () => {
  const [users, setUsers] = useState([
    {
      name: "Siva B",
      email: "bsivaramakrishnan7@gmail.com",
      team: "Team A",
      department: "Dept A",
      objectives: [
        {
          title: "Launch new product feature",
          keyResults: ["Increase signups by 20%", "Reduce churn by 10%"],
        },
      ],
      progress: 60,
      score: 4.5,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    team: "",
    department: "",
  });

  const [selectedUser, setSelectedUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      objectives: [],
      progress: 0,
      score: 0.0,
    };
    setUsers([...users, newUser]);
    setFormData({ name: "", email: "", team: "", department: "" });
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    if (selectedUser === users[index]) setSelectedUser(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
        <FaUserPlus /> Add Person
      </h2>

      {/* Add Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow mb-8"
      >
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border border-gray-300 px-3 py-2 rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border border-gray-300 px-3 py-2 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Team"
          value={formData.team}
          onChange={(e) => setFormData({ ...formData, team: e.target.value })}
          className="border border-gray-300 px-3 py-2 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={formData.department}
          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
          className="border border-gray-300 px-3 py-2 rounded-md"
          required
        />
        <button
          type="submit"
          className="md:col-span-4 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
        >
          Add Person
        </button>
      </form>

      {/* Filters */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Q1 2025 (Apr - Jun)</h3>
        <div className="flex items-center gap-2">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Find Users"
            className="px-3 py-1 border rounded-md border-gray-300"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-purple-100 text-purple-800">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Teams</th>
              <th className="px-4 py-2">Depts</th>
              <th className="px-4 py-2">OBs</th>
              <th className="px-4 py-2">KRs</th>
              <th className="px-4 py-2">Progress</th>
              <th className="px-4 py-2">Score</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="border-t hover:bg-purple-50">
                <td className="px-4 py-2 font-medium">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.team}</td>
                <td className="px-4 py-2">{user.department}</td>
                <td className="px-4 py-2 text-center">{user.objectives.length}</td>
                <td className="px-4 py-2 text-center">
                  {user.objectives.reduce((acc, obj) => acc + obj.keyResults.length, 0)}
                </td>
                <td className="px-4 py-2 text-center">{user.progress} %</td>
                <td className="px-4 py-2 text-center">{user.score.toFixed(1)}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="text-purple-600 text-sm hover:underline"
                  >
                    View OKRs
                  </button>
                  <button
                    onClick={() => handleDeleteUser(idx)}
                    className="text-red-600 text-sm hover:underline flex items-center gap-1"
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View OKRs Section */}
      {selectedUser && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">
            OKRs for {selectedUser.name}
          </h3>
          {selectedUser.objectives.length === 0 ? (
            <p className="text-gray-600">No objectives found for this user.</p>
          ) : (
            <ul className="space-y-4">
              {selectedUser.objectives.map((obj, index) => (
                <li key={index} className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-700">{obj.title}</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    {obj.keyResults.map((kr, i) => (
                      <li key={i}>{kr}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default UserCreate;
