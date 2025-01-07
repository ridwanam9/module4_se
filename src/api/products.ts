import axios from 'axios';

const API_URL = 'https://fakeapi.platzi.com/';

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};
