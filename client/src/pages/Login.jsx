import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login form submitted");
  };

  const Label = ({ text }) => (
    <label className="block text-sm font-medium text-gray-800 mb-1">
      {text} <span className="text-red-500 font-bold">*</span>
    </label>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center px-4">
      <motion.div
        className="bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Welcome Back to MyOKR
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <Label text="Email" />
            <input
              type="email"
              placeholder="you@example.com"
              required
              aria-label="Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <Label text="Password" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              aria-label="Password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Remember me & forgot password */}
          <div className="flex justify-between items-center mb-6 text-sm text-gray-700">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-[1.01] hover:shadow-lg transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-700">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-purple-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;