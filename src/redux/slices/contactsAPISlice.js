import { createApi } from '@reduxjs/toolkit/query/react';

import { AUTH_HEADER_URL, axiosBaseQuery } from '../operations';

export const CONTACTS_DATA_TAG = 'Contacts';

export const phonebookAPI = createApi({
  reducerPath: 'phonebookAPI',

  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/contacts',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set([AUTH_HEADER_URL], `Bearer ${token}`);
      }
      return headers;
    }
  }),

  tagTypes: [CONTACTS_DATA_TAG],
  
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ` `,
      providesTags: result => 
        result 
        ? [
            ...result.map(({ id }) => ({
              type: CONTACTS_DATA_TAG,
              id
            })),
            CONTACTS_DATA_TAG,
          ]
          : [CONTACTS_DATA_TAG],
    }),

    addContact: builder.mutation({
      query: contactObj => ({
        method: 'post',
        data: contactObj,
      }),
      invalidatesTags: [CONTACTS_DATA_TAG],
    }),

    deleteContact: builder.mutation({
      query: contactID => ({
        url: `/${contactID}`,
        method: 'delete',
      }),
      invalidatesTags: (result, error, id) => [
        { type: CONTACTS_DATA_TAG, id }
      ],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookAPI;