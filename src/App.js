import React from 'react';

import Navbar from './components/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';
import CartContextProvider from './store/CartContext';

const App = () => {
  return (
    <CartContextProvider>
      <Navbar />
      <Products />
      <Footer />
    </CartContextProvider>
  );
};

export default App;
