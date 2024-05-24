import React, { useState } from 'react';
import { IoEye } from 'react-icons/io5';
import { IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [firebaseError, setFirebaseError] = useState(false);

  const navigate = useNavigate();

  const emailHandler = e => {
    setEmail(e.target.value);
    setFirebaseError(false);
  };

  const passwordHandler = e => {
    setFirebaseError(false);
    setPassword(e.target.value);
  };

  const loginHandler = e => {
    e.preventDefault();

    if (email === '' || password === '' || password.length < 6) {
      alert('Incorrect details! login failed..');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        alert('Login successful!');
        navigate('/store');
      })
      .catch(err => {
        setFirebaseError(true);
        alert('Please signup! To access..');
        navigate('/signup');
        console.error(err.message);
      });

    setEmail('');
    setPassword('');
  };

  return (
    <div className="md:w-1/4 w-full mx-auto my-44 border-2 border-cyan-600 py-5 bg-gray-200 relative">
      <h2 className="text-4xl font-bold text-amber-500 text-center mb-4">
        Login
      </h2>
      <form className="flex flex-col justify-center items-center">
        <input
          type="email"
          placeholder="Email.."
          required
          className="p-2 m-2 w-1/2 outline-none border border-slate-800"
          value={email}
          onChange={emailHandler}
        />
        <div className="relative w-[55%] flex items-center">
          <input
            type={!showPassword ? 'password' : 'text'}
            placeholder="Password.."
            required
            className="p-2 m-2 w-full outline-none border border-slate-800"
            value={password}
            onChange={passwordHandler}
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onMouseDown={() =>
              password !== '' ? setShowPassword(prev => !prev) : null
            }
            onMouseUp={() =>
              password !== '' ? setShowPassword(prev => !prev) : null
            }
          >
            {!showPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
          </span>
        </div>
        {firebaseError && (
          <p className="text-red-700 px-3">Incorrect login details</p>
        )}
        <button
          className="px-4 py-2 m-2 w-1/2 bg-cyan-400 rounded text-white font-semibold hover:bg-cyan-500"
          onClick={loginHandler}
        >
          Login
        </button>
        <p className="underline text-blue-600 p-2">
          Don't Have an account?
          <span className="text-purple-600 mx-1 font-semibold cursor-pointer">
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
