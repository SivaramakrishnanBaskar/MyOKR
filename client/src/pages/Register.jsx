import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Register = () => {
  const [isHuman, setIsHuman] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isHuman) {
      alert("⚠️ Please verify you're not a robot");
      return;
    }
    console.log("Form submitted");
  };

  const Label = ({ text }) => (
    <label className="block text-sm font-medium text-gray-800 mb-1">
      {text} <span className="text-red-500 font-bold">*</span>
    </label>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center px-4">
      <motion.div
        className="bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-lg w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mb-6">
          Join MyOKR – Start Managing Goals Effectively
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <Label text="Full Name" />
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              aria-label="Full Name"
            />
          </div>

          <div>
            <Label text="Email" />
            <input
              type="email"
              placeholder="john@yourcompany.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              aria-label="Email"
            />
          </div>

          <div>
            <Label text="Organization Name" />
            <input
              type="text"
              placeholder="ABC Pvt Ltd"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              aria-label="Organization Name"
            />
          </div>

          <div>
            <Label text="Department" />
            <input
              type="text"
              placeholder="Engineering / Sales / HR"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              aria-label="Department"
            />
          </div>

          <div>
            <Label text="Your Role" />
            <input
              type="text"
              placeholder="e.g., Manager, Developer, Analyst"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              aria-label="Your Role"
            />
          </div>

          <div>
            <Label text="Password" />
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              aria-label="Password"
            />
          </div>

          <div>
            <Label text="Confirm Password" />
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              aria-label="Confirm Password"
            />
          </div>

          <div className="flex items-center gap-2 text-sm mt-2">
            <input
              type="checkbox"
              id="humanCheck"
              className="accent-purple-600"
              onChange={(e) => setIsHuman(e.target.checked)}
              required
              aria-label="I'm not a robot"
            />
            <label htmlFor="humanCheck" className="text-gray-700">I’m not a robot</label>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-[1.01] hover:shadow-lg transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-700 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
