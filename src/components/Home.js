import { IoMdPlay } from 'react-icons/io';
import Tour from './Tour';
import Navbar from './Navbar';
import Footer from './Footer';
import { auth } from '../firebase';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="bg-[#777777] flex flex-col justify-center items-center">
          <h2 className="px-5 py-3 border-2 border-cyan-500 text-white text-xl font-bold">
            Get our latest album
          </h2>
          <div className="w-20 h-20 text-cyan-500 border-2 border-cyan-400 rounded-full m-5">
            <IoMdPlay size={60} className="mx-3 my-2" />
          </div>
        </div>
        <Tour />
      </div>
      <Footer />
    </>
  );
};

export default Home;
