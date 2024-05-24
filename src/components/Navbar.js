import React, { useContext, useState, useEffect } from 'react';
import { IoIosMoon } from 'react-icons/io';
import Cart from './Cart';
import { CartContext } from '../store/CartContext';
import { Link, useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useContext(CartContext);

  const navigate = useNavigate();

  const name = localStorage.getItem('user-name');

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert('Successfully logout');
        localStorage.removeItem('user-name');
        navigate('/');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="w-full h-16 top-0 p-4 lg:px-10 bg-black text-white flex justify-between items-center fixed z-20">
        <div>
          <h4 className="text-white font-mania text-2xl">
            {auth.currentUser?.email
              ? name?.toUpperCase() || auth.currentUser?.email.split('@')[0]
              : auth.currentUser?.email.split('@')[0] || 'User'}
          </h4>
        </div>
        <div>
          <ul className="flex justify-between gap-4">
            <li className="cursor-pointer duration-500 hover:bg-cyan-400 p-2 rounded-lg text-[18px] font-semibold">
              <Link to="/">HOME</Link>
            </li>
            <li className="cursor-pointer duration-500 hover:bg-cyan-400 p-2 rounded-lg text-[18px] font-semibold">
              <Link to="/store">STORE</Link>
            </li>
            <li className="cursor-pointer duration-500 hover:bg-cyan-400 p-2 rounded-lg text-[18px] font-semibold">
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          {auth.currentUser?.email ? (
            <div>
              <button
                className="border-2 border-cyan-500 px-4 p-1 font-semibold rounded-lg hover:bg-cyan-300"
                onClick={() => setIsCartOpen(true)}
              >
                cart
              </button>
              <sup className="text-2xl text-cyan-500 rounded-lg px-1">
                {state.items.length}
              </sup>
            </div>
          ) : (
            <Link to="/signup">
              <button className="border-2 border-cyan-500 px-4 p-1 font-semibold rounded-lg hover:bg-cyan-300">
                Signup
              </button>
            </Link>
          )}

          {auth.currentUser?.email ? (
            <button
              className="border-2 border-cyan-500 px-4 p-1 font-semibold rounded-lg hover:bg-cyan-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="border-2 border-cyan-500 px-4 p-1 font-semibold rounded-lg hover:bg-cyan-300">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      {isCartOpen && (
        <Cart onClose={() => setIsCartOpen(false)} cartItems={state} />
      )}
      <div className="bg-[#777777]">
        <h1 className="text-8xl w-full mt-16 text-white font-serif font-bold p-5 text-wrap text-center">
          The Generics
        </h1>
      </div>
    </>
  );
};

export default Navbar;
