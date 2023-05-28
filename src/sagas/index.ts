import { all } from 'redux-saga/effects';
import { watchFetchProducts, watchFetchProduct } from './productSaga';

export default function* rootSaga() {
  yield all([
    watchFetchProducts(),
    watchFetchProduct(),
  ]);
}
