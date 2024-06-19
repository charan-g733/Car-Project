import React,{useState} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteCar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const deletecar = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/cars/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert('Failed to delete book');
      });
  };
  return (
    <div className='p-1'>
      <BackButton destination='/admin' />
      <h1 className='text-3xl my-4'>Delete Car</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-5 border-sky-400 rounded-xl  p-4 justify-center text-center'>
        <h3 className='my-4'>Are you sure you want to delete this book?</h3>
        <button
          onClick={deletecar}
          className='bg-red-500 text-white px-4 py-2 rounded-lg'>
          Delete
        </button>
        </div>
    </div>
  )
}

export default DeleteCar