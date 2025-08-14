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
      query: () => ({
        url: "/tour/tour-type",
        method: "GET",
      }),
      providesTags: ["TOUR"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetTourTypeQuery,
  useAddTourTypeMutation,
  useRemoveTourTypeMutation,
  useAddTourMutation,
} = tourApi;
