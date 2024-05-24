import React, { useState } from 'react';
import { IoEye } from 'react-icons/io5';
import { IoEyeOff } from 'react-icons/io5';

import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const signupHandler = e => {
    e.preventDefault();
    console.log(userName, email, password, confirmPassword);
    if (password !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }

    if (password.length < 6) {
      alert('Password length should be at least 6');
      return;
    }

    if (email === '' || password === '' || userName === '') {
      alert('Fill all the fields');
      return;
    }

    localStorage.setItem('user-name', userName);

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        alert('Successfully account created!');
        navigate('/');
        console.log(user);
      })
      .catch(error => {
        console.error(error.code, error.message);
      });
    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <h2 className="text-center text-4xl text-amber-700 font-bold top-40 relative">
        Sign Up
      </h2>
      <form className="flex flex-col justify-center items-center lg:w-1/4 w-full mx-auto my-44 border-2 border-cyan-600 py-10 bg-gray-200 relative">
        <input
          type="text"
          placeholder="Full name.."
          required
          className="p-2 m-2 w-1/2 outline-none border border-slate-800"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email.."
          required
          className="p-2 m-2 w-1/2 outline-none border border-slate-800"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div className="relative w-[54%] flex items-center">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="password.."
            required
            className="p-2 m-2 w-full outline-none border border-slate-800"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span
            onMouseDown={() => setShowPassword(prev => !prev)}
            onMouseUp={() => setShowPassword(prev => !prev)}
            className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {showPassword ? <IoEyeOff size={25} /> : <IoEye size={25} />}
          </span>
        </div>
        <div className="relative w-[54%] flex items-center">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="confirm password.."
            required
            className="p-2 m-2 w-full outline-none border border-slate-800"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <span
            onMouseDown={() => setShowConfirmPassword(prev => !prev)}
            onMouseUp={() => setShowConfirmPassword(prev => !prev)}
            className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {showConfirmPassword ? <IoEyeOff size={25} /> : <IoEye size={25} />}
          </span>
        </div>
        <button
          className="px-4 py-2 m-2 w-1/2 bg-cyan-400 rounded text-white font-semibold hover:bg-cyan-500"
          onClick={signupHandler}
        >
          Sign up
        </button>
        <p className="underline text-blue-600 p-2">
          Have an account?
          <span className="text-purple-600 mx-1 font-semibold cursor-pointer">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
    </>
  );
};

export default Signup;
