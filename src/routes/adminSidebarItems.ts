import AddDivision from "@/pages/admin/AddDivision";
import AddTour from "@/pages/admin/AddTour";
import AddTourType from "@/pages/admin/AddTourType";
// import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItems } from "@/type";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/admin/Analytics"));

export const adminSidebarItems: ISidebarItems[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Add Tor Type",
        url: "/admin/add-tour-type",
        component: AddTourType,
      },
      {
        title: "Analytic",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Tour MAnagement",
    items: [
      {
        title: "Add Division",
        url: "/admin/add-division",
        component: AddDivision,
      },
      {
        title: "Add Tour",
        url: "/admin/add-tour",
        component: AddTour,
      },
    ],
  },
];
