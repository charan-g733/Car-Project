import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import CarCard from "../components/CarCard";
import { useNavigate } from "react-router-dom";
const Booking = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/cars")
      .then((res) => {
        setCars(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className=" mx-auto ">
      <Nav />
      
      <div className="flex justify-between items-center bg-black ">
        <h1 className="text-5xl my-8 mt-14 text-black">Cars Available</h1>
      </div>
      {loading ? <Spinner /> : <CarCard car={cars} />}
    </div>
  );
};

export default Booking;
