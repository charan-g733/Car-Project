import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
const ShowBook = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/cars/${id}`)
      .then((res) => {
        setCar(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
  }, [])
  return (
    <div className='p-4'>
      <BackButton destination='/' />
      <h1 className='text-3xl my-4'>Car Details</h1>
      {loading ? (<Spinner />) : (
        <div className='flex flex-col border-5 border-sky-400 rounded-xl w-fit p-4'>
        <div className='my-4'>
          <span className='text-2xl mr-4 text-black '>Id:</span>
          <span  className='ml-5 text-xl'>{car._id}</span>
          </div>
          <div className='my-4'>
          <span className='text-2xl mr-4 text-black'>Car Name </span>
          <span className='ml-5 text-xl'>{car.CarName}</span>
          </div>
          
          <div className='my-4'>
            <span className='text-2xl mr-4 text-black'>MfgYear</span>
            <span className='ml-5 text-xl'>{car.MfgYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 text-black'>Price</span>
            <span className='ml-5 text-xl'>{car.Price}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 text-black'>FuelType</span>
            <span className='ml-5 text-xl'>{car.FuelType}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 text-black'>Transmission</span>
            <span className='ml-5 text-xl'>{car.Transmission}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 text-black'>Mileage</span>
            <span className='ml-5 text-l'>{car.Mileage}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 text-black'>Seats</span>
            <span className='ml-5 text-xl'>{car.Seats}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 text-black'>BodyType</span>
            <span className='ml-5 text-xl'>{car.BodyType}</span>
          </div>
        </div>
      )
      }
    </div>
  )
}

export default ShowBook