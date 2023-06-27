import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import AdminLoginPage from './AdminLoginPage'
import LibraryPage from './LibraryPage'
import PrivateRoute from '../Components/PrivateRoute'
import SingleBookPage from './SingleBookPage'
import UsersBooks from './UsersBooks'
import AdminPage from './AdminPage'
import Logs from './Logs'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/:id' element={<SingleBookPage/>}/>
        <Route path='/library' element={<PrivateRoute><LibraryPage/></PrivateRoute>}/>
        <Route path='/adminlogin' element={<AdminLoginPage/>}/>
        <Route path='/userbooks' element={<UsersBooks/>}/>
        <Route path='/adminpage' element={<AdminPage/>}/>
        <Route path='/logs' element={<Logs/>}/>
    </Routes>
  )
}

export default AllRoutes