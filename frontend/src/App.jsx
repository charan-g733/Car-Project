import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateCar from './pages/CreateCar'
import ShowCar from './pages/ShowCar'
import EditCar from './pages/EditCar'
import DeleteCar from './pages/DeleteCar'
import Cars from './pages/Cars'
import Register from './pages/Register'
import Login from './pages/Login'
import Booking from './pages/Booking'

const App = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Home />} />
      <Route path="/cars/create" element={< CreateCar/>} />
      <Route path="/cars/details/:id" element={< ShowCar/>} />
      <Route path="/cars/edit/:id" element={<EditCar/>} />
      <Route path="/cars/delete/:id" element={<DeleteCar />} />
      <Route path="/cars/home" element={<Cars />} />
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  )
}

export default App