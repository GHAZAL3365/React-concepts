import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const ProtectedRoutes: React.FC = () => {
const {isAuth} = useAuth();
 
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
