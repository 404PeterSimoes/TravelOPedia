import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const randomDestinationApi = createApi({
  reducerPath: 'apiRandomDestination',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/' }),
  tagTypes: ['Destinations'],
  endpoints: (builder) => ({
    // QUERY -> GET
    // MUTATION -> POST, PUT, DELETE

    getRandomDestination: builder.query({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      transformResponse: (res) => {
        // Extract only city and country from the random user data

        const user = res.results[0];
        return {
          city: user.location.city,
          country: user.location.country,
        };
      },
    }),
  }),
});

export const { useGetRandomDestinationQuery } = randomDestinationApi;
