import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let admin = sessionStorage.getItem("userEmail")
  return (
    admin==="admin@gmail.com" ? <Outlet/> : <Navigate to="/pages/login"/>
  )
}

export default PrivateRoutes
