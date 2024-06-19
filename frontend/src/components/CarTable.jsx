import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
const CarTable = ({car}) => {
    return (
      <div className='bg-blue-200'>
     <table className='table-auto w-full'>
                        <thead>
                            <tr>
                        <th className='border px-4 py-2'>CarName</th>
                        <th className='border px-4 py-2'>MfgYear</th>
                        <th className='border px-4 py-2'>Price</th>
                        <th className='border px-4 py-2'>FuelType</th>
                        <th className='border px-4 py-2'>Transmission</th>
                        <th className='border px-4 py-2'>Mileage</th>
                        <th className='border px-4 py-2'>Seats</th>
                        <th className='border px-4 py-2'>BodyType</th>
                        <th className='border px-4 py-2'>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {car.map((car,index) => (
                                <tr key={car._id}>
                                    <td className='border px-4 py-2'>{car.CarName}</td>
                                    <td className='border px-4 py-2'>{car.MfgYear}</td>
                                    <td className='border px-4 py-2'>{car.Price}</td>
                                    <td className='border px-4 py-2'>{car.FuelType}</td>
                                    <td className='border px-4 py-2'>{car.Transmission}</td>
                                    <td className='border px-4 py-2'>{car.Mileage}</td>
                                    <td className='border px-4 py-2'>{car.Seats}</td>
                                    <td className='border px-4 py-2'>{car.BodyType}</td>
                                    
                                    <td className='border px-4 py-2'>
                                        <Link to={`/cars/details/${car._id}`}>
                                            <BsInfoCircle className='text-black text-2xl mx-2' />
                                        </Link>
                                        <Link to={`/cars/edit/${car._id}`}>
                                            <AiOutlineEdit className='text-yellow-200 text-2xl mx-2' />
                                        </Link>
                                        <Link to={`/cars/delete/${car._id}`}>
                                            <MdOutlineDelete className='text-red-400 text-2xl mx-2' />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                      </tbody>
            </table>
        </div>
  )
}

export default CarTable