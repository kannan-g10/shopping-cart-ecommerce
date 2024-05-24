import React, { useContext } from 'react';
import { data } from '../constants.js/data';
import { CartContext } from '../store/CartContext';
import Footer from './Footer';
import Navbar from './Navbar';
import { auth } from '../firebase';

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mx-auto mt-10">
        <h2 className="font-mania font-bold text-3xl text-center">MUSIC</h2>
        <div className="w-2/3 flex flex-wrap mx-auto p-10">
          {data.map((product, index) => (
            <div
              key={index}
              className="w-1/3 flex flex-col items-center mx-20 my-10"
            >
              <div className="m-2">
                <h2 className="text-center font-bold text-xl">
                  {product.title}
                </h2>
              </div>
              <div className="w-2/3 m-1 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt="Product-image"
                  className="hover:scale-150 transition-all duration-500"
                />
              </div>
              <div className="my-3 flex gap-4">
                <p className="font-medium">${product.price}</p>
                <button
                  className="w-40 font-light py-1 font-serif rounded bg-cyan-500 hover:bg-cyan-400 text-xl text-white"
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-cyan-400 hover:bg-cyan-600 text-white font-semibold text-2xl p-3 mt-10 rounded-md">
          See the cart
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Products;
