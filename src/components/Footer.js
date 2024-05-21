import React from 'react';
import { IoLogoYoutube } from 'react-icons/io5';
import { FaSpotify } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full h-24 mt-10 bg-cyan-400 text-white flex justify-between items-center px-20">
      <h1 className="text-5xl font-semibold">The Generics</h1>
      <ul className="flex justify-center items-center gap-10">
        <li>
          <IoLogoYoutube size={40} />
        </li>
        <li>
          <FaSpotify size={40} />
        </li>
        <li>
          <FaFacebookF size={40} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
