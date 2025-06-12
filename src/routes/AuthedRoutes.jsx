import { Routes, Route, Navigate } from "react-router"
import { Dashboard } from "../pages/Dashboard/Dashboard.page";

const AuthedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export { AuthedRoutes };