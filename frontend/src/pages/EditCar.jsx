import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';


const EditCar = () => {
  const [loading, setLoading] = useState(false);
  const [CarName, setCarName] = useState('');
  const [CarImage, setCarImage] = useState('');
  const [MfgYear, setMfgYear] = useState('');
  const [Price, setPrice] = useState('');
  const [FuelType, setFuelType] = useState('');
  const [Transmission, setTransmission] = useState('');
  const [Mileage, setMileage] = useState('');
  const [Seats, setSeats] = useState('');
  const [BodyType, setBodyType] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
   axios.get(`http://localhost:5555/cars/${id}`)
      .then((res) => {
        setCarName(res.data.CarName);
        setCarImage(res.data.CarImage);
        setMfgYear(res.data.MfgYear);
        setPrice(res.data.Price);
        setFuelType(res.data.FuelType);
        setTransmission(res.data.Transmission);
        setMileage(res.data.Mileage);
        setSeats(res.data.Seats);
        setBodyType(res.data.BodyType);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert('Failed to fetch Car details');
      })
  }, [])
  const editCar = () => {
    setLoading(true);
    axios.put(`http://localhost:5555/cars/${id}`, {
      CarName,
      CarImage,
      MfgYear,
      Price,
      FuelType,
      Transmission,
      Mileage,
      Seats,
      BodyType
    })
      .then((res) => {
        setLoading(false);
        navigate('/admin');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
  }
  return (
    <div className='p-4'>
      <BackButton destination='/admin' />
      <h1 className='text-3xl my-4'>Edit Car</h1>
      {loading ? (<Spinner />) : ''}
      <div className='flex flex-col border-5 border-sky-400 rounded-xl  p-4 justify-center text-center'>
        <div className='my-4'> 
          <label className='text-xl mr-4 text-gray-500'>
          CarName
          </label>
          <input
            type='text'
            value={CarName}
            onChange={(e) => setCarName(e.target.value)}
            className=' border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
          />
        </div>
        <div className='my-4'> 
          <label className='text-xl mr-4 text-gray-500'>
          CarImage
          </label>
          <input
            type='text'
            value={CarImage}
            onChange={(e) => setCarImage(e.target.value)}
            className=' border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
          />
        </div>
        <div className='my-4'> 
          <label className='text-xl mr-4 text-gray-500'>
          MfgYear
          </label>
          <input
            type='text'
            value={MfgYear}
            onChange={(e) => setMfgYear(e.target.value)}
            className=' border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
          />
        </div>
        <div className='my-4'> 
          <label className='text-xl mr-4  text-gray-500'>
          Price
          </label>
          <input
            type='text'
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
            className=' border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
          />
        </div>
        <div className='my-4'> 
          <label className='text-xl mr-4 text-gray-500'>
          FuelType
          </label>
          <input
            type='text'
            value={FuelType}
            onChange={(e) => setFuelType(e.target.value)}
            className=' border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
          />
        </div>
        <div className='my-4'> 
          <label className='text-xl mr-4 text-gray-500'>
          Transmission
          </label>
          <input
            type='text'
            value={Transmission}
            onChange={(e) => setTransmission(e.target.value)}
            className=' border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
          />
        </div>
        <div className='my-4'> 
          <label className='text-xl mr-4 text-gray-500'>
          Mileage
          </label>
          <input
            type='text'
            value={Mileage}
            onChange={(e) => setMileage(e.target.value)}
            className=' border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
          />
        </div>
        <div className='my-4'> 
          <label className='text-xl mr-4 text-gray-500'>
          Seats
          </label>
          <input
            type='text'
            value={Seats}
            onChange={(e) => setSeats(e.target.value)}
            className=' border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
          />
        </div>
        <div className='my-4'> 
          <label className='text-xl mr-4 text-gray-500'>
          BodyType
          </label>
          <input
            type='text'
            value={BodyType}
            onChange={(e) => setBodyType(e.target.value)}
            className=' border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
          />
        </div>
        <button className='px-4 py-2 bg-blue-300  w-full' onClick={editCar}>Save</button>
      </div>
    </div>
  )
}

export default EditCar