import axios from 'axios';
// Repeta version:
// axios defaults.baseUrl = 'https://pixabay.com/api/';
// export const getMaterialsApi= assync values => {
//     const response = await axios.post('/materials', values);
//     return response.data;
// }

const galleryApi = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '30103480-eddec892c7cbcca44528b414d',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getGalleryApi = async (query, page) => {
  const { data } = await galleryApi.get('', {
    params: { q: query, page },
  });
  return data;
};
