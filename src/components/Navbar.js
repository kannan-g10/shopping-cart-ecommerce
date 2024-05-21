import React from 'react';
import { IoIosMoon } from 'react-icons/io';

const Navbar = () => {
  return (
    <>
      <div className="w-full h-16 top-0 p-4 lg:px-10 bg-black text-white flex justify-between items-center fixed z-[1]">
        <div>
          <IoIosMoon
            size={20}
            className="w-10 h-10 rounded-xl p-1 border-4 border-white text-white cursor-pointer ring-red-700 hover:bg-slate-700"
          />
        </div>
        <div>
          <ul className="flex justify-between gap-4">
            <li className="cursor-pointer hover:bg-cyan-400 p-2 rounded-lg text-[18px] font-semibold">
              HOME
            </li>
            <li className="cursor-pointer  hover:bg-cyan-400 p-2 rounded-lg text-[18px] font-semibold">
              STORE
            </li>
            <li className="cursor-pointer  hover:bg-cyan-400 p-2 rounded-lg text-[18px] font-semibold">
              ABOUT
            </li>
          </ul>
        </div>
        <div>
          <button className="border-2 border-cyan-500 px-4 p-1 font-semibold rounded-lg hover:bg-cyan-300">
            cart
          </button>
          <sup className="text-2xl text-cyan-500 rounded-lg px-1">0</sup>
        </div>
      </div>
      <div className="bg-[#777777]">
        <h1 className="text-8xl w-full mt-16 text-white font-serif font-bold p-5 text-wrap text-center">
          The Generics
        </h1>
      </div>
    </>
  );
};

export default Navbar;
