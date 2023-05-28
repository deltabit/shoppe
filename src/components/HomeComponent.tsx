import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsRequest } from '../actions/productAction';
import RootState from '../interfaces/rootState';
import { Link } from 'react-router-dom';
import './HomeComponent.css'
import LoadingErrorWrapper from './LoadingErrorWrapperComponent';
import ProductTileComponent from './ProductTileComponent';

const HomeComponent: React.FC = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state: RootState) => state.products);
  
    useEffect(() => {
      dispatch(fetchProductsRequest());
    }, [dispatch]);
  
    return (
      <LoadingErrorWrapper loading={loading} error={error}>
      <div className='px-14 flex flex-col justify-center'>

        <div className='flex justify-between items-center pb-10 mx-11'>
          <p className='text-4xl'>Shop The Latest</p>
          <p className='light-brown-font'><Link to={`somewhere...`}>View All</Link></p>
        </div>

        <div className='flex flex-wrap'>
        {data.map((product) => (
          <div key={product.id} className='pb-20 element flex justify-center'>
            <Link to={`/product/${product.id}`}>
              <ProductTileComponent product={product}></ProductTileComponent>
            </Link>
          </div>
        ))}
        </div>

      </div>
      </LoadingErrorWrapper>
    );
};
  
  
export default HomeComponent;