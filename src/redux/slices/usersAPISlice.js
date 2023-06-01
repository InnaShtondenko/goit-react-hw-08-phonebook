import { createApi } from '@reduxjs/toolkit/query/react';

import { AUTH_HEADER_URL, axiosBaseQuery } from '../operations';

export const usersAPI = createApi({
  reducerPath: 'usersAPI',

  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set([AUTH_HEADER_URL], `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['AuthData'],

  endpoints: builder => ({
    signupUser: builder.mutation({
      query: userCredentials => ({
        url: `signup`,
        method: 'post',
        data: userCredentials,
      }),
      invalidatesTags: ['AuthData'],
    }),

    loginUser: builder.mutation({
      query: userCredentials => ({
        url: `login`,
        method: 'post',
        data: userCredentials,
      }),
      invalidatesTags: ['AuthData'],
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: `logout`,
        method: 'post',
      }),
      invalidatesTags: ['AuthData'],
    }),

    refreshUser: builder.query({
      query: () => ({ url: `current` }),
      invalidatesTags: ['AuthData'],
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useLazyRefreshUserQuery,
} = usersAPI;