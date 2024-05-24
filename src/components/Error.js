import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <p className="h-screen text-center my-52 text-5xl font-bold text-red-500">
      Something went wrong!
      <span className="mx-4 text-3xl">
        GO back
        <Link to="/" className="text-emerald-600 underline block m-5 text-4xl">
          Home
        </Link>
      </span>
    </p>
  );
};

export default Error;
