import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import AdminLoginPage from './AdminLoginPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/adminlogin' element={<AdminLoginPage/>}/>
    </Routes>
  )
}

export default AllRoutes