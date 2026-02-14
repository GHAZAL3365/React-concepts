import { Routes, Route } from "react-router-dom";


import Settings from "../pages/Settings";


import Home from "../pages/Home";

import {lazy, Suspense} from "react"
import Loading from "../pages/Loading";

const Dashboard = lazy(() => import("../pages/Dashbaord"));
const Reports = lazy(() => import("../pages/Reports"));
const Expenses = lazy(() => import("../pages/Expenses"))
export const AppRoutes = () => {
    for (let i = 0; i < 200000000; i++) {}
  return (
   <Suspense fallback={<Loading />}>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/expenses" element={<Expenses />} />
    </Routes>
   </Suspense>
  );
};
