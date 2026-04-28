import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const destinationApi = createApi({
  reducerPath: 'apidestination',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    // QUERY -> GET
    // MUTATION -> POST, PUT, DELETE

    getAllDestinations: builder.query({
      query: () => 'destination',
    }),
    addDestination: builder.mutation({
      query: (destinationObj) => ({
        url: 'destination',
        method: 'POST',
        body: destinationObj,
      }),
    }),
    updateDestination: builder.mutation({
      query: (destinationObj) => ({
        url: `destination/${destinationObj.id}`,
        method: 'PUT',
        body: destinationObj,
      }),
    }),
    deleteDestination: builder.mutation({
      query: ({ id }) => ({
        url: `destination/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllDestinationsQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationApi;
