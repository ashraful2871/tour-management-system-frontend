export type { ISensOTP, IVerifyOTP } from "./auth.type";

export interface IResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}
