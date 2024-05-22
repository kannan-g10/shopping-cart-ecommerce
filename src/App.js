import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';
import CartContextProvider from './store/CartContext';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </Router>
  );
};

export default App;
