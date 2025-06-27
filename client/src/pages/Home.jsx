// import { Link } from "react-router-dom";
// import { FaUsers, FaBullseye, FaChartLine } from "react-icons/fa";
// import { motion } from "framer-motion";
// import logo from "../assets/logo.png"; // Make sure your logo.png is in src/assets/

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800">
      
//       {/* Navbar with logo */}
//       <header className="backdrop-blur-md bg-white/80 sticky top-0 z-50 px-6 py-4 shadow flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="MyOKR Logo"
//             className="w-10 h-10 rounded-full border-2 border-blue-500 shadow-sm hover:scale-105 transition"
//           />
//           <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//             MyOKR
//           </span>
//         </div>
//         <div className="space-x-3">
//           <Link
//             to="/login"
//             className="inline-block px-4 py-1.5 bg-white text-blue-600 border border-blue-500 rounded-full text-sm font-semibold hover:bg-blue-50 hover:shadow-md transition"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 shadow-md transition"
//           >
//             Register
//           </Link>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="text-center py-24 px-6">
//         <motion.h2
//           className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-6 leading-tight"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Empower Your Team<br /> with Clarity and Focus.
//         </motion.h2>

//         <motion.p
//           className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 1 }}
//         >
//           MyOKR helps your teams define, align and execute OKRs with a beautiful, intuitive platform built for growth.
//         </motion.p>

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Link
//             to="/register"
//             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-2xl transition"
//           >
//             Get Started — It's Free
//           </Link>
//         </motion.div>
//       </main>

//       {/* Features Section */}
//       <section className="py-16 bg-white rounded-t-3xl shadow-inner">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">
//           <motion.div
//             className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition"
//             whileHover={{ scale: 1.03 }}
//           >
//             <FaUsers className="text-blue-600 text-4xl mx-auto mb-4" />
//             <h3 className="font-semibold text-xl mb-2">Collaborative Teams</h3>
//             <p className="text-sm text-gray-600">Manage team hierarchies, departments, and assignments with ease.</p>
//           </motion.div>

//           <motion.div
//             className="bg-green-50 p-8 rounded-xl shadow-md hover:shadow-xl transition"
//             whileHover={{ scale: 1.03 }}
//           >
//             <FaBullseye className="text-green-600 text-4xl mx-auto mb-4" />
//             <h3 className="font-semibold text-xl mb-2">Crystal-Clear Objectives</h3>
//             <p className="text-sm text-gray-600">Create measurable OKRs that keep everyone aligned and focused.</p>
//           </motion.div>

//           <motion.div
//             className="bg-purple-50 p-8 rounded-xl shadow-md hover:shadow-xl transition"
//             whileHover={{ scale: 1.03 }}
//           >
//             <FaChartLine className="text-purple-600 text-4xl mx-auto mb-4" />
//             <h3 className="font-semibold text-xl mb-2">Real-Time Progress</h3>
//             <p className="text-sm text-gray-600">Visualize key results and progress with beautiful analytics.</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 text-sm bg-gradient-to-r from-white via-gray-50 to-white text-gray-600 mt-10 shadow-inner">
//         <p className="font-semibold text-gray-500">
//           Made with 💙 by <span className="text-blue-600 font-bold">Sivaramakrishnan B</span> • © {new Date().getFullYear()}{" "}
//           <span className="text-purple-600 font-bold">MyOKR</span>
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
import { Link } from "react-router-dom";
import { FaUsers, FaBullseye, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800">
      
      {/* Navbar */}
      <header className="backdrop-blur-md bg-white/80 sticky top-0 z-50 px-6 py-4 shadow flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="MyOKR Logo"
            className="w-12 h-12 object-contain hover:scale-105 transition duration-300"
          />
          <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            MyOKR
          </span>
        </div>
        <div className="space-x-3">
          <Link
            to="/login"
            className="inline-block px-4 py-1.5 bg-white text-blue-600 border border-blue-500 rounded-full text-sm font-semibold hover:bg-blue-50 hover:shadow-md transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 shadow-md transition"
          >
            Register
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="text-center py-24 px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-6 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empower Your Team<br /> with Clarity and Focus.
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          MyOKR helps your teams define, align and execute OKRs with a beautiful, intuitive platform built for growth.
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/register"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-2xl transition"
          >
            Get Started — It's Free
          </Link>
        </motion.div>
      </main>

      {/* Features Section - removed white block and added transparency */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            className="bg-blue-50/70 p-8 rounded-xl shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
          >
            <FaUsers className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Collaborative Teams</h3>
            <p className="text-sm text-gray-600">Manage team hierarchies, departments, and assignments with ease.</p>
          </motion.div>

          <motion.div
            className="bg-green-50/70 p-8 rounded-xl shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
          >
            <FaBullseye className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Crystal-Clear Objectives</h3>
            <p className="text-sm text-gray-600">Create measurable OKRs that keep everyone aligned and focused.</p>
          </motion.div>

          <motion.div
            className="bg-purple-50/70 p-8 rounded-xl shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
          >
            <FaChartLine className="text-purple-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Real-Time Progress</h3>
            <p className="text-sm text-gray-600">Visualize key results and progress with beautiful analytics.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer with matching background */}
      <footer className="text-center py-6 text-sm bg-transparent text-gray-700 mt-10">
        <p className="font-semibold">
          Made with 💙 by <span className="text-blue-600 font-bold">Sivaramakrishnan B</span> • © {new Date().getFullYear()}{" "}
          <span className="text-purple-600 font-bold">MyOKR</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
