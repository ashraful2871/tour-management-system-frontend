import type { ISidebarItems } from "@/type";

export const generateRoutes = (sidebarItems: ISidebarItems[]) => {
  return sidebarItems.flatMap((section) =>
    section.items.map((route) => ({
      path: route.url,
      Component: route.component,
    }))
  );
};
