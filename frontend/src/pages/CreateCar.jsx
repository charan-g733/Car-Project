import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const CreateCar = () => {
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
  const createCar = () => {
    setLoading(true);
    axios.post('http://localhost:5555/cars', {
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
    <div className="p-4">
      <BackButton destination="/admin" />
      <h1 className="text-3xl my-4">Create Car</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-5 border-sky-400 rounded-xl  p-4 justify-center text-center">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">CarName</label>
          <input
            type="text"
            value={CarName}
            onChange={(e) => setCarName(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">CarImage URL</label>
          <input
            type="text"
            value={CarImage}
            onChange={(e) => setCarImage(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">MfgYear</label>
          <input
            type="text"
            value={MfgYear}
            onChange={(e) => setMfgYear(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4  text-gray-500">Price</label>
          <input
            type="text"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">FuelType</label>
          <input
            type="text"
            value={FuelType}
            onChange={(e) => setFuelType(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Transmission</label>
          <input
            type="text"
            value={Transmission}
            onChange={(e) => setTransmission(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Mileage</label>
          <input
            type="text"
            value={Mileage}
            onChange={(e) => setMileage(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Seats</label>
          <input
            type="text"
            value={Seats}
            onChange={(e) => setSeats(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">BodyType</label>
          <input
            type="text"
            value={BodyType}
            onChange={(e) => setBodyType(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full rounded-lg"
          />
        </div>
        <button className="px-4 py-2 bg-blue-300  w-full" onClick={createCar}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateCar