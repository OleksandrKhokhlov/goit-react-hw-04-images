import axios from 'axios';

const API_KEY = '38177743-3b0ef348d0ddbcece13b89b90';
const BAZE_URL = 'https://pixabay.com/api/';

export const pixabayAPI = async (query, page, perPage) => {
  return await axios.get(BAZE_URL, {
    params: {
      q: query,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
    },
  });
};
