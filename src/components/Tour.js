import React from 'react';

const Tour = () => {
  const tours = [
    {
      id: 1,
      date: 'JUL16',
      place: 'DETROIT, MI',
      description: 'DTE ENERGY MUSIC THEATRE',
    },
    {
      id: 2,
      date: 'JUL19',
      place: 'TORONTO',
      description: 'ONBUDWEISER STAGE',
    },
    {
      id: 3,
      date: 'JUL 29',
      place: 'PHOENIX',
      description: 'AZAK-CHIN PAVILION',
    },
    {
      id: 4,
      date: 'AUG 2',
      place: 'LAS VEGAS',
      description: 'T-MOBILE ARENA',
    },
    {
      id: 5,
      date: 'AUG 7',
      place: 'CONCORD, CA',
      description: 'CONCORD PAVILION',
    },
    {
      id: 6,
      date: 'JUL19',
      place: 'TORONTO, CA',
      description: 'ONBUDWEISER STAGE',
    },
  ];
  return (
    <>
      <p className="text-center font-bold text-3xl my-5 font-mania">TOURS</p>
      {tours.map((tour, index) => (
        <div
          className="w-1/2 flex justify-center gap-10 mx-auto border-b-2 py-2 border-cyan-500 mb-5"
          key={index}
        >
          <p className="w-20">{tour.date}</p>
          <p className="w-20">{tour.place}</p>
          <p className="w-40 h-10">{tour.description}</p>
          <button className="bg-cyan-500 h-10 px-2 py-1 rounded-lg text-white hover:bg-cyan-600">
            BUY TICKETS
          </button>
        </div>
      ))}
    </>
  );
};

export default Tour;
