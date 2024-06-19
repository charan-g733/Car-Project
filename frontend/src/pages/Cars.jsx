import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';

import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import CarCard  from '../components/CarCard';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/cars')
            .then(res => {
                setCars(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);
  return (
      <div className='p-4'>
          <div className='flex justify-between items-center '>
              <h1 className='text-5xl my-8 text-black'>Cars Available</h1>
                <Link to='/books/create' >
                    <MdOutlineAddBox  className='text-sky-800 text-4xl '/>
              </Link>
          </div>
          {loading ? (
              <Spinner />
          ) : (
                 <CarCard car={cars} />
          )}
    </div>
  )
}



export default Cars