import { baseApi } from "@/redux/baseApi";
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
    getTourType: builder.query({
      query: () => ({
        url: "/tour/tour-type",
        method: "GET",
      }),
      providesTags: ["TOUR"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetTourTypeQuery, useAddTourTypeMutation } = tourApi;
