import React, { useState } from 'react';

const DepartmentCreate = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Department "${name}" created successfully!`);
    setName("");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">Create Department</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-lg shadow-md">
        <div>
          <label className="block text-gray-700">Department Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            placeholder="e.g. Marketing"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Create Department
        </button>
      </form>
    </div>
  );
};

export default DepartmentCreate;
