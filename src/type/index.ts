import type { ComponentType } from "react";

export type { ISensOTP, IVerifyOTP } from "./auth.type";

export interface IResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export interface ISidebarItems {
  title: string;
  items: {
    url: string;
    title: string;
    component: ComponentType;
  }[];
}
