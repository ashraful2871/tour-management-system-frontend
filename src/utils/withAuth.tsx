import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/type";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function () {
    const { data, isLoading } = useUserInfoQuery(undefined);
    if (!isLoading && !data?.data?.data?.email) {
      return <Navigate to={"/login"}></Navigate>;
    }

    if (requiredRole && !isLoading && requiredRole !== data?.data?.data?.role) {
      return <Navigate to={"/unauthorized"}></Navigate>;
    }
    return <Component></Component>;
  };
};
