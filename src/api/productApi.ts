import axios from 'axios';
import Product from '../interfaces/product';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const fetchProduct = async (id: number): Promise<Product> => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};
