import React from "react";
import { Navigate } from "react-router-dom";

// Layouts
import DashboardLayout from "./layouts/Dashboard";

// Dashboard components
import Analytics from "./pages/dashboards/Analytics";

const routes = [
  {
    path: "/",
    element: <Navigate to="/dashboard/analytics" />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "analytics",
        element: <Analytics />,
      },
    ],
  },
];

export default routes;
