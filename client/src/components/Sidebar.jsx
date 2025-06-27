import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBullseye,
  FaUsers,
  FaBuilding,
  FaCogs,
  FaChevronDown,
  FaChevronRight,
  FaChartBar,
  FaMapMarkedAlt,
  FaBars,
  FaNetworkWired,
  FaLayerGroup,
  FaSitemap,
  FaUserFriends,
  FaPlus,
} from "react-icons/fa";

const Sidebar = ({ collapsed, toggleSidebar }) => {
  const location = useLocation();

  const [okrOpen, setOkrOpen] = useState(true);
  const [orgOpen, setOrgOpen] = useState(true);
  const [adminOpen, setAdminOpen] = useState(true);
  const [showMyOKRSteps, setShowMyOKRSteps] = useState(false);

  const renderNavItem = (item, isSub = false) => (
    <Link
      key={item.path}
      to={item.path}
      className={`flex items-center gap-3 ${
        isSub ? "pl-10" : "px-4"
      } py-2 rounded-lg hover:bg-purple-200/40 transition ${
        location.pathname === item.path
          ? "bg-purple-100 font-semibold text-purple-700"
          : "text-gray-700"
      }`}
    >
      <span className="text-purple-600 text-sm">{item.icon}</span>
      {!collapsed && <span className="text-sm">{item.name}</span>}
    </Link>
  );

  return (
    <aside
      className={`${
        collapsed ? "w-16" : "w-64"
      } bg-gradient-to-br from-blue-100 via-white to-purple-100 min-h-screen shadow-xl fixed top-0 left-0 z-40 overflow-y-auto transition-all duration-300 flex flex-col`}
    >
      {/* Top Section */}
      <div className="border-b border-purple-200">
        <div className="flex justify-start px-3 py-4">
          <button
            onClick={toggleSidebar}
            className="flex items-center gap-2 text-purple-700 font-bold hover:text-purple-900 transition"
            title="Toggle Menu"
          >
            <FaBars />
            {!collapsed && <span className="text-sm">Menu</span>}
          </button>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className={`flex-1 mt-4 px-2 ${collapsed ? "space-y-6" : "space-y-4"}`}>
        {/* Core OKR Tools */}
        <div>
          <button
            onClick={() => setOkrOpen(!okrOpen)}
            className="flex justify-between items-center w-full text-gray-700 font-semibold text-sm uppercase tracking-wide mb-1 px-2"
          >
            {!collapsed && <span>Core OKR Tools</span>}
            {okrOpen ? <FaChevronDown /> : <FaChevronRight />}
          </button>

          {okrOpen && (
            <div className="space-y-1">
              {/* Add MyOKR Toggle */}
              <div
                onClick={() => setShowMyOKRSteps(!showMyOKRSteps)}
                className={`cursor-pointer flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-200/40 transition ${
                  showMyOKRSteps ? "bg-purple-100 font-semibold text-purple-700" : "text-gray-700"
                }`}
              >
                <FaPlus className="text-purple-600" />
                {!collapsed && <span>Add MyOKR</span>}
              </div>

              {/* Add MyOKR Sub-items */}
              {showMyOKRSteps && (
                <>
                  {renderNavItem({ name: "OKR", path: "/myokr/okr", icon: <FaNetworkWired /> }, true)}
                  {renderNavItem({ name: "Department", path: "/myokr/department", icon: <FaLayerGroup /> }, true)}
                  {renderNavItem({ name: "Team", path: "/myokr/team", icon: <FaSitemap /> }, true)}
                  {renderNavItem({ name: "People", path: "/myokr/people", icon: <FaUserFriends /> }, true)}
                </>
              )}

              {/* Other OKR Items */}
              {renderNavItem({ name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> })}
              {renderNavItem({ name: "Team OKRs", path: "/team-okrs", icon: <FaBullseye /> })}
              {renderNavItem({ name: "Company OKRs", path: "/company-okrs", icon: <FaBullseye /> })}
              {renderNavItem({ name: "Alignment Map", path: "/alignment-map", icon: <FaMapMarkedAlt /> })}
              {renderNavItem({ name: "Reports & Insights", path: "/insights", icon: <FaChartBar /> })}
            </div>
          )}
        </div>

        {/* Organization */}
        <div>
          <button
            onClick={() => setOrgOpen(!orgOpen)}
            className="flex justify-between items-center w-full text-gray-700 font-semibold text-sm uppercase tracking-wide mb-1 px-2"
          >
            {!collapsed && <span>Organization</span>}
            {orgOpen ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {orgOpen && (
            <div className="space-y-1">
              {renderNavItem({ name: "Teams", path: "/teams", icon: <FaUsers /> })}
              {renderNavItem({ name: "Departments", path: "/departments", icon: <FaBuilding /> })}
              {renderNavItem({ name: "People", path: "/people", icon: <FaUsers /> })}
            </div>
          )}
        </div>

        {/* Admin */}
        <div>
          <button
            onClick={() => setAdminOpen(!adminOpen)}
            className="flex justify-between items-center w-full text-gray-700 font-semibold text-sm uppercase tracking-wide mb-1 px-2"
          >
            {!collapsed && <span>Admin</span>}
            {adminOpen ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {adminOpen && (
            <div className="space-y-1">
              {renderNavItem({ name: "Admin Settings", path: "/admin", icon: <FaCogs /> })}
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
