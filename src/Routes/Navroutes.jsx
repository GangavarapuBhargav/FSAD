import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Register from '../register'
import Login from '../Login'
import Home from '../Home'




const Navroutes = () => {
  return (
   <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element = {<Home />} />

   
   </Routes>
  )
}

export default Navroutes