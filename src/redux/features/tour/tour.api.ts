import { baseApi } from "@/redux/baseApi";
import type { IResponse, ITourPackage } from "@/type";
export const tourApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTourType: builder.mutation({
      query: (addTourTypeName) => ({
        url: "/tour/create-tour-type",
        method: "POST",
        data: addTourTypeName,
      }),
      invalidatesTags: ["TOUR"],
    }),
    addTour: builder.mutation({
      query: (addTourName) => ({
        url: "/tour/create",
        method: "POST",
        data: addTourName,
      }),
      invalidatesTags: ["TOUR"],
    }),
    removeTourType: builder.mutation({
      query: (tourType) => ({
        url: `/tour/tour-type/${tourType}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TOUR"],
    }),
    getTourType: builder.query({
      query: (params) => ({
        url: "/tour/tour-type",
        method: "GET",
        params,
      }),
      providesTags: ["TOUR"],
      transformResponse: (response) => response.data,
    }),
    getAllTour: builder.query<ITourPackage[], unknown>({
      query: (params) => ({
        url: "/tour",
        method: "GET",
        params: params,
      }),
      providesTags: ["TOUR"],
      transformResponse: (response: IResponse<ITourPackage[]>) => response.data,
    }),
  }),
});

export const {
  useGetTourTypeQuery,
  useAddTourTypeMutation,
  useRemoveTourTypeMutation,
  useAddTourMutation,
  useGetAllTourQuery,
} = tourApi;
