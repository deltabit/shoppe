import { call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux';
import {
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductSuccess,
  fetchProductFailure,
} from '../actions/productAction';
import { fetchProducts, fetchProduct } from '../api/productApi';
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCT_REQUEST } from '../actions/types';
import Product from '../interfaces/product';

function* fetchProductsWorker() {
  try {
    const products: Product[] = yield call(fetchProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error: any) {
    yield put(fetchProductsFailure(error));
  }
}

function* fetchProductWorker(action: Action & { payload: number }) {
  try {
    const product: Product = yield call(fetchProduct, action.payload);
    yield put(fetchProductSuccess(product));
  } catch (error: any) {
    yield put(fetchProductFailure(error));
  }
}

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsWorker);
}

export function* watchFetchProduct() {
  yield takeLatest(FETCH_PRODUCT_REQUEST, fetchProductWorker);
}
