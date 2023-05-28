import Product from '../interfaces/product';
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
  } from './types';
  
export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: Product[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error: Error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProductRequest = (id: number) => ({
  type: FETCH_PRODUCT_REQUEST,
  payload: id,
});

export const fetchProductSuccess = (product: Product) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchProductFailure = (error: Error) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: error,
});