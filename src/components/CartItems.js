import React, { useCallback, useContext } from 'react';
import { CartContext } from '../store/CartContext';

const CartItems = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="m-3 flex items-center justify-between gap-2 p-2">
      <div className="h-24 flex gap-5 items-center border-b border-b-black">
        <img src={item.imageUrl} alt="" className="w-16 h-20 rounded-lg" />
        <p className="w-16">{item.title}</p>
      </div>
      <div className="h-24 pt-9 border-b border-b-black py-2">
        <p>{item.price}</p>
      </div>
      <div className="h-24 flex gap-2 border-b border-b-black py-2">
        <button className="h-8 mt-5 px-2 border border-cyan-500">1</button>
        <button
          className="h-8 mt-5 px-2 bg-red-500 rounded-md hover:bg-red-600 text-white font-semibold"
          onClick={() => removeFromCart(item.imageUrl)}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default CartItems;
