import React from 'react';
import { data } from '../constants.js/data';

const Products = () => {
  return (
    <div className="m-2 flex flex-col justify-center items-center text-center">
      <h2 className="font-mania text-3xl font-bold">MUSIC</h2>
      <div className="flex flex-wrap sm:justify-center lg:justify-start">
        {data.map((product, index) => (
          <div
            key={index}
            className="w-64 md:w-1/4 sm:w-full m-10 flex flex-col justify-center gap-4 items-center"
          >
            <h2>{product.title}</h2>
            <div className="w-64 overflow-hidden">
              <img
                src={product.imageUrl}
                alt="Product-image"
                className="w-44 mx-auto md:w-auto h-auto object-fill transform hover:scale-150 transition-all overflow-hidden duration-700"
              />
            </div>
            <div className="flex justify-between gap-20">
              <p>${product.price}</p>
              <button className="bg-cyan-400 text-white p-2">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-cyan-400 hover:bg-cyan-600 text-white font-semibold text-2xl p-3 rounded-md">
        See the cart
      </button>
    </div>
  );
};

export default Products;
