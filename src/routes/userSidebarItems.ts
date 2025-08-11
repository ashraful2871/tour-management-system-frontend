import Booking from "@/pages/user/Booking";
import type { ISidebarItems } from "@/type";

export const userSidebarItems: ISidebarItems[] = [
  {
    title: "History",
    items: [
      {
        title: "Booking",
        url: "/user/booking",
        component: Booking,
      },
    ],
  },
];
