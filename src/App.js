import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import CartContextProvider from './store/CartContext';
import About from './components/About';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Error from './components/Error';
import PrivateRouter from './components/PrivateRouter';

const App = () => {
  const user = localStorage.getItem('user-name') || null;
  return (
    <Router>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={
              <PrivateRouter user={user} Component={Products} Err={Login} />
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRouter user={user} Component={About} Err={Login} />
            }
          />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </CartContextProvider>
    </Router>
  );
};

export default App;
