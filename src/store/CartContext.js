import { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      const existItem = state.items.find(
        item => item.imageUrl == action.payload.imageUrl
      );

      if (existItem == undefined) {
        return {
          items: [...state.items, action.payload],
          totalAmount: state.totalAmount + action.payload.price,
        };
      }
      alert('Already Added to the Cart..');
      return state;
    case 'REMOVE_FROM_CART':
      const removeItem = state.items.find(
        item => item.imageUrl == action.payload
      );
      console.log(action.payload, removeItem);
      return {
        items: state.items.filter(item => item.imageUrl != action.payload),
        totalAmount: state.totalAmount - removeItem.price,
      };
    case 'CLEAR_CART':
      alert('Thanks for purchasing!');
      return {
        items: [],
        totalAmount: 0,
      };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = item => {
    dispatch({ type: 'ADD_CART_ITEM', payload: item });
  };

  const removeFromCart = id => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{ state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
