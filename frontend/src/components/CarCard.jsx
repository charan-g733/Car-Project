import React from 'react';
import Toll from '../images/toll-road.png';

const CarCard = ({car}) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1  mx-auto bg-black">
      {car.map((item) => (
        <div key={item._id} className=" mx-1 my-2 m-4 relative ">
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-2 border-2 border-gray-200 hover:shadow-xl mx-auto ">
            <img
              className="w-full h-72 object-cover"
              src={item.CarImage}
              alt={car.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white ">
                {item.CarName} {item.MfgYear}
              </div>
              <p className="text-gray-400 text-base">
                {item.Transmission} • {item.FuelType} • {item.Seats} Seats
              </p>
            </div>

            <div className="px-6 pt-2 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Price: ₹{item.Price}/Day
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Ratings: {item.Ratings}
              </span>
              <p className="text-gray-300  ">Lastly Booked 4 Days ago</p>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={Toll} className='h-6 inline-block' /> FastTag
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarCard


