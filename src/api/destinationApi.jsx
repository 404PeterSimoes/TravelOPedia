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
  }),
});

export const { useGetAllDestinationsQuery } = destinationApi;
