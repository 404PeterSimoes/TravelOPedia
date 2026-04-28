import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const destinationApi = createApi({
  reducerPath: 'apidestination',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['Destinations'],
  endpoints: (builder) => ({
    // QUERY -> GET
    // MUTATION -> POST, PUT, DELETE

    getAllDestinations: builder.query({
      query: () => 'destination',
      providesTags: ['Destinations'],
    }),
    // getAllDestinationsById: builder.query({
    //   query: (id) => `destination/${id}`,
    //   providesTags: (result, error, id) => [{ type: 'Destination', id }],
    // }),
    addDestination: builder.mutation({
      query: (destinationObj) => ({
        url: 'destination',
        method: 'POST',
        body: destinationObj,
      }),
      invalidatesTags: ['Destinations'],
    }),
    updateDestination: builder.mutation({
      query: (destinationObj) => ({
        url: `destination/${destinationObj.id}`,
        method: 'PUT',
        body: destinationObj,
      }),
      invalidatesTags: ['Destinations'],
    }),
    deleteDestination: builder.mutation({
      query: ({ id }) => ({
        url: `destination/${id}`,
        method: 'DELETE',
      }),
      // invalidatesTags: (result, error, id) => [{ type: 'Destination', id }],
      invalidatesTags: ['Destinations'],
    }),
  }),
});

export const {
  useGetAllDestinationsQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationApi;
