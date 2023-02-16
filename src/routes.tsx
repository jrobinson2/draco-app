import React from "react";

import async from "./components/Async";

// All pages that rely on 3rd party components (other than MUI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import DashboardLayout from "./layouts/Dashboard";
import PresentationLayout from "./layouts/Presentation";

// Landing
import Landing from "./pages/presentation/Landing";

// Dashboard components
const Default = async(() => import("./pages/dashboards/Default"));

const routes = [
  {
    path: "/",
    element: <PresentationLayout />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "default",
        element: <Default />,
      },
    ],
  },
];

export default routes;
