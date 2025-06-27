import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import OKRCreate from "../pages/OKRCreate";
import DepartmentCreate from "../pages/DepartmentCreate";
import TeamCreate from "../pages/TeamCreate";
import UserCreate from "../pages/UserCreate";
import DashboardLayout from "../layouts/DashboardLayout";

// TODO: Replace this with real context or auth logic
const isAuthenticated = true; // Set to true just for development/testing

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes inside DashboardLayout */}
      {isAuthenticated ? (
        <>
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="/myokr/okr"
            element={
              <DashboardLayout>
                <OKRCreate />
              </DashboardLayout>
            }
          />
          <Route
            path="/myokr/department"
            element={
              <DashboardLayout>
                <DepartmentCreate />
              </DashboardLayout>
            }
          />
          <Route
            path="/myokr/team"
            element={
              <DashboardLayout>
                <TeamCreate />
              </DashboardLayout>
            }
          />
          <Route
            path="/myokr/people"
            element={
              <DashboardLayout>
                <UserCreate />
              </DashboardLayout>
            }
          />
        </>
      ) : (
        // Redirect to login if not authenticated
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
};

export default AppRoutes;
