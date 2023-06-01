import axios from 'axios';

export const AUTH_HEADER_URL = 'Authorization';

export const axiosBaseQuery =
  ({ baseUrl, prepareHeaders } = { baseUrl: '' }
  ) => {
    const headers = new Headers();
  
    return async ({ url = '', method, data, params }, api) => {
      prepareHeaders(headers, api);
      axios.defaults.headers.common[AUTH_HEADER_URL] =
        headers.get(AUTH_HEADER_URL) || '';

      try {
        const result = await axios({ url: baseUrl + url, method, data, params });
      
        return { data: result.data };
      } catch (axiosError) {
        let err = axiosError;
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        };
      }
    };
  };