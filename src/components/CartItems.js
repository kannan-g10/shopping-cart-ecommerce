import React from 'react';

const CartItems = () => {
  return (
    <div className="m-3 flex items-center justify-between gap-2 p-2">
      <div className="h-24 flex items-center border-b border-b-black">
        <img src="" alt="" className="w-16 h-20 rounded-lg" />
        <p>Album 1</p>
      </div>
      <div className="h-24 pt-9 border-b border-b-black py-2">
        <p>12.99</p>
      </div>
      <div className="h-24 flex gap-2 border-b border-b-black py-2">
        <button className="h-8 mt-5 px-2 border border-cyan-500">1</button>
        <button className="h-8 mt-5 px-2 bg-red-500 rounded-md hover:bg-red-600 text-white font-semibold">
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default CartItems;
