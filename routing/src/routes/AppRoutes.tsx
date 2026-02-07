import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Error from "../pages/Error";
import ProtectedRoutes from "./ProtectedRoutes";

//Protected Routes

import Dashboard from "../pages/dashboard/Dashboard";
import Reports from "../pages/dashboard/Reports";
import Users from "../pages/dashboard/Users";
import UserDetails from "../pages/dashboard/UserDetails";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />

      {/* protected routes */}

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path="reports" element={<Reports />} />
          <Route path="users/:userId" element={<UserDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
