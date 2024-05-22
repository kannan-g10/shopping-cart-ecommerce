import React from 'react';
import CartItems from './CartItems';

const Cart = ({ onClose }) => {
  return (
    <div className="bg-white z-10 h-[92vh] w-[70vw] md:w-1/3 lg:w-1/4 fixed right-0">
      <button
        className="text-black border-2 rounded-lg px-2 pb-1 absolute right-3 top-3 font-bold text-2xl hover:bg-slate-700 hover:text-white"
        onClick={onClose}
      >
        x
      </button>
      <h2 className="font-mania text-3xl font-bold text-center mt-10 b-5">
        CART
      </h2>
      <div className="flex gap-7 m-4">
        <div>
          <p className="mb-3 font-bold text-xl">ITEM</p>
          <div className="w-28 border border-black"></div>
        </div>
        <div>
          <p className="mb-3 font-bold text-xl">PRICE</p>
          <div className="w-15 border border-black"></div>
        </div>
        <div>
          <p className="mb-3 font-bold text-xl">QUANTITY</p>
          <div className="w-24 border border-black"></div>
        </div>
      </div>
      <CartItems />
      <CartItems />
      <CartItems />
      <div className="flex gap-4 right-6 absolute">
        <p className="font-semibold text-2xl font-serif">Total</p>
        <p className="text-xl">$12.99</p>
      </div>
      <button className="mx-32 my-3 mt-10 p-3 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold text-xl rounded-md">
        PURCHASE
      </button>
    </div>
  );
};

export default Cart;
