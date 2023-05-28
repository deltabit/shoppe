import React from 'react';
import './QuantityCounterComponent.css'

const QuantityCounterComponent: React.FC = () => {

    //quantity functionality here...

  return (
    <div>
      <label className='sr-only'> Quantity </label>

      <div className='quantity text-base w-28 h-14 flex items-center rounded'>
        <button type="button" className="w-10 h-10 leading-10 transition hover:opacity-75">
          <p className='ml-4'>&minus;</p>
        </button>

        <input type="number" id="Quantity" value="1" 
            className="quantity h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"/>

        <button type="button" className="w-10 h-10 leading-10 transition hover:opacity-75">
          <p className='mr-4'>&#43;</p>
        </button>
      </div>
    </div>
  );
};

export default QuantityCounterComponent;
