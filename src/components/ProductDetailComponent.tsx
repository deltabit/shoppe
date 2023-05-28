import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductRequest, fetchProductsRequest } from '../actions/productAction';
import RootState from '../interfaces/rootState';
import { Link, useParams } from 'react-router-dom';
import LoadingErrorWrapper from './LoadingErrorWrapperComponent';
import ProductTileComponent from './ProductTileComponent';
import Product from '../interfaces/product';
import './ProductDetailComponent.css';
import StarsRatingComponent from './StarsRatingComponent';
import QuantityCounterComponent from './QuantityCounterComponent';

const ProductDetailComponent: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const { loading, data, product, error } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const galleryMock: Product[] = [];

  Array.from({ length: 4 }).forEach(() => {
    if(product != null) {
      galleryMock.push(product);
    }
  });

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchProductRequest(parseInt(id, 10)));
      dispatch(fetchProductsRequest());
    }
  }, [dispatch, id]);

  const dataCopy = [...data];

  // awesome algorithm for suggesting similar items
  for (let i = dataCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dataCopy[i], dataCopy[j]] = [dataCopy[j], dataCopy[i]];
  }

  const randomItems = dataCopy.slice(0, 3);

  return (
    <LoadingErrorWrapper loading={loading} error={error}>
    <div className='px-14 flex flex-col justify-between'>
      <div className='flex mx-11 pb-10 justify-between'>
        <div className='max-h-full max-w-full flex'>

          <div className='static-height-600 flex flex-col justify-between items-start content-between'>
            {galleryMock.map((product: Product) => (
              <div className='w-32 h-32 py-3 px-3 border-2 rounded-lg flex flex-col items-center justify-center'>
                <img src={product.image} alt={product.title} className='max-w-full max-h-full'/>
              </div>
            ))}
          </div>

          {product && 
            <div className='w-3/4 pl-9'>
              <div className='static-base-image px-3 py-3 border-2 rounded-lg flex items-center justify-center'>
                <img src={product.image} alt={product.title} className='max-w-full max-h-full'/>
              </div>
            </div>
          }

        </div>
        
        <div className='w-1/2 ml-16'>
          <h2 className='title text-3xl pb-6'>{product?.title}</h2>
          <p className='light-brown-font text-2xl pb-16'>$ {product?.price}</p>

          <div className='flex pb-5'>
            <div className='pr-6'>
              <StarsRatingComponent></StarsRatingComponent>
            </div>
            <p className='gray-text'>1 customer review</p>
          </div>

          <div className='gray-text pb-12'><p>{product?.description}</p></div>

          <form>
            <div className='flex pb-16'>
                <QuantityCounterComponent></QuantityCounterComponent>
                <button type="button" className="border-2 border-black rounded w-full h-14 ml-6">
                  <p className='font-bold'>ADD TO CART</p>
                </button>
            </div>
          </form>

          <div className='flex pb-10'>
            <div className='border-r-2 border-gray-300 pr-10'>
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.56899 2.01405C10.6777 0.77861 12.231 0.0520888 13.875 0C16.7817 0 19.138 2.39588 19.138 5.35135C19.138 8.85038 15.3125 12.6852 13.0182 14.9851C12.8117 15.1921 12.6175 15.3868 12.4397 15.5676L10.258 17.7859C10.1235 17.9228 9.94108 17.9998 9.7508 18H9.38718C9.19691 17.9998 9.01449 17.9228 8.88003 17.7859L6.6983 15.5676C6.52047 15.3868 6.32632 15.1921 6.11976 14.9851C3.82545 12.6852 0 8.85038 0 5.35135C0 2.39588 2.3563 0 5.26295 0C6.90699 0.0520888 8.4603 0.77861 9.56899 2.01405ZM9.56914 15.7329L11.6743 13.6215C13.6168 11.6756 17.2243 8.03663 17.2243 5.35122C17.2244 4.44297 16.8676 3.57233 16.2333 2.93284C15.599 2.29336 14.7397 1.93801 13.8465 1.9458C12.3588 2.08623 11.0159 2.91052 10.2007 4.18365C10.1094 4.30497 9.96818 4.37675 9.81793 4.37824H9.38733C9.16376 4.37763 8.95255 4.27383 8.81319 4.09608C8.01092 2.86988 6.70555 2.07922 5.26309 1.9458C3.4134 1.9458 1.91394 3.47046 1.91394 5.35122C1.91394 8.03663 5.52145 11.6756 7.46396 13.6215L9.56914 15.7329Z" fill="#707070"/>
              </svg>
            </div>

            <div className='flex ml-10'>

              <div className='mx-3'>
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.125 0.946533H2.125C0.951395 0.946533 0 1.8479 0 2.95979V15.0393C0 16.1512 0.951395 17.0526 2.125 17.0526H19.125C20.2986 17.0526 21.25 16.1512 21.25 15.0393V2.95979C21.25 1.8479 20.2986 0.946533 19.125 0.946533ZM19.125 2.96057V5.8798L11.3156 11.0639C10.9003 11.337 10.3497 11.337 9.93437 11.0639L2.125 5.8798V2.96057H19.125ZM2.125 7.99372V15.0401H19.125V7.99372L12.3781 12.4632C11.3252 13.1604 9.92476 13.1604 8.87187 12.4632L2.125 7.99372Z" fill="#707070"/>
                </svg>
              </div>
              
              <div className='mx-3'>
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 2.84224H6.5C5.94772 2.84224 5.5 3.26641 5.5 3.78965V6.63189H9.5C9.61374 6.6295 9.7216 6.67963 9.78923 6.7663C9.85685 6.85298 9.87578 6.96538 9.84 7.0677L9.1 9.152C9.03181 9.3433 8.84312 9.47262 8.63 9.47412H5.5V16.5797C5.5 16.8413 5.27614 17.0534 5 17.0534H2.5C2.22386 17.0534 2 16.8413 2 16.5797V9.47412H0.5C0.223858 9.47412 0 9.26204 0 9.00042V7.10559C0 6.84397 0.223858 6.63189 0.5 6.63189H2V3.78965C2 1.69668 3.79086 0 6 0H9.5C9.77614 0 10 0.212085 10 0.473706V2.36853C10 2.63015 9.77614 2.84224 9.5 2.84224Z" fill="#707070"/>
                </svg>
              </div>

              <div className='mx-3'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0.946533H5C2.23858 0.946533 0 3.06739 0 5.6836V13.2629C0 15.8791 2.23858 18 5 18H13C15.7614 18 18 15.8791 18 13.2629V5.6836C18 3.06739 15.7614 0.946533 13 0.946533ZM16.25 13.2637C16.2445 14.9621 14.7926 16.3376 13 16.3428H5C3.20735 16.3376 1.75549 14.9621 1.75 13.2637V5.6844C1.75549 3.98602 3.20735 2.6105 5 2.6053H13C14.7926 2.6105 16.2445 3.98602 16.25 5.6844V13.2637ZM13.75 5.92125C14.3023 5.92125 14.75 5.49707 14.75 4.97383C14.75 4.45059 14.3023 4.02641 13.75 4.02641C13.1977 4.02641 12.75 4.45059 12.75 4.97383C12.75 5.49707 13.1977 5.92125 13.75 5.92125ZM8.99999 5.21076C6.51472 5.21076 4.5 7.11952 4.5 9.4741C4.5 11.8287 6.51472 13.7374 8.99999 13.7374C11.4853 13.7374 13.5 11.8287 13.5 9.4741C13.5027 8.34262 13.0294 7.25675 12.1849 6.45668C11.3404 5.6566 10.1943 5.20824 8.99999 5.21076ZM6.25 9.47406C6.25 10.913 7.48122 12.0795 9 12.0795C10.5188 12.0795 11.75 10.913 11.75 9.47406C11.75 8.03514 10.5188 6.86866 9 6.86866C7.48122 6.86866 6.25 8.03514 6.25 9.47406Z" fill="#707070"/>
                </svg>
              </div>

              <div className='mx-3'>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9708 3.28076C19.4547 3.93291 18.8309 4.50179 18.1235 4.96542C18.1235 5.13578 18.1235 5.30614 18.1235 5.48597C18.1292 8.57967 16.8249 11.5461 14.5029 13.7203C12.181 15.8945 9.03567 17.0946 5.77211 17.0515C3.88538 17.0574 2.02281 16.6493 0.330301 15.859C0.239042 15.8212 0.18018 15.7357 0.180527 15.6413V15.5372C0.180527 15.4013 0.296758 15.2911 0.440136 15.2911C2.29475 15.2332 4.0832 14.624 5.55244 13.5496C3.87376 13.5176 2.36338 12.5755 1.66829 11.1268C1.63318 11.0476 1.64411 10.9569 1.69713 10.8873C1.75016 10.8177 1.83761 10.7793 1.9279 10.786C2.43809 10.8346 2.95337 10.7896 3.44561 10.6535C1.59249 10.2891 0.200074 8.83154 0.000797149 7.04759C-0.00628542 6.96201 0.0341943 6.87912 0.107613 6.82886C0.181031 6.7786 0.276775 6.76824 0.360256 6.80152C0.857554 7.00941 1.39439 7.11891 1.93788 7.12331C0.314106 6.11359 -0.387258 4.19306 0.230452 2.44789C0.294214 2.27831 0.447402 2.15304 0.633723 2.1181C0.820043 2.08317 1.01201 2.14373 1.13908 2.27753C3.33027 4.48698 6.34099 5.80358 9.53645 5.94972C9.4546 5.64029 9.41434 5.32229 9.41663 5.00328C9.44652 3.33057 10.5389 1.84048 12.1825 1.23063C13.826 0.620768 15.6953 1.01184 16.9153 2.22075C17.747 2.07065 18.551 1.80599 19.3018 1.4352C19.3568 1.40267 19.4265 1.40267 19.4815 1.4352C19.5158 1.48733 19.5158 1.55343 19.4815 1.60556C19.1178 2.39452 18.5035 3.05624 17.7241 3.49844C18.4066 3.42346 19.0771 3.27093 19.7211 3.04415C19.7754 3.00918 19.8466 3.00918 19.9009 3.04415C19.9463 3.06384 19.9802 3.10149 19.9937 3.14709C20.0072 3.19268 19.9988 3.24157 19.9708 3.28076Z" fill="#707070"/>
                </svg>
              </div>
              
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex mb-2'>
              <p className='mr-4'>SKU:</p>
              <p className='gray-text'>{product?.id}</p>
            </div>

            <div className='flex'>
              <p className='mr-4'>Categories:</p>
              <p className='gray-text'>{product?.category}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='pb-10 mx-11'>

          <div className='flex border-b-2 mb-10 mt-24 text-xl gray-text'>
            <div className='hoverable mr-24 pb-9'><p>Description</p></div>
            <div className='hoverable mr-24 pb-9'><p>Aditional Information</p></div>
            <div className='hoverable mr-24 pb-9'><p>Reviews(0)</p></div>
          </div>

          <div className='flex flex-col'>
            <div className='flex mb-2'>
              <p className='mr-4'>Weight:</p>
              <p className='gray-text'>0.3 kg</p>
            </div>

            <div className='flex mb-2'>
              <p className='mr-4'>Dimentions:</p>
              <p className='gray-text'>15 x 10 x 1 cm</p>
            </div>

            <div className='flex mb-2'>
              <p className='mr-4'>Colours:</p>
              <p className='gray-text'>Black, White</p>
            </div>

            <div className='flex mb-2'>
              <p className='mr-4'>Material:</p>
              <p className='gray-text'>Metal</p>
            </div>
          </div>
      </div>

      <div className='pb-10 mx-11'>
        <p className='text-3xl'>Similar Items</p>
      </div>

      <div className='flex flex-wrap mb-96'>
        {randomItems.map((product: Product) => (
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

export default ProductDetailComponent;
