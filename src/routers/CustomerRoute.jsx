import React from 'react'
import Navbar from '../component/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/home/Home'
import Cart from "../component/cart/Cart";
import RestaurantDetails from '../restaurant/RestaurantDetails'
import Profile from '../component/profile/Profile'
import { Auth } from "../component/auth/Auth";
import { PaymentSuccess } from '../component/paymentSuccess/PaymentSuccess';



export const CustomerRoute = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
            <Route path='/payment/success/:id' element={<PaymentSuccess/>}/>
        </Routes>
        <Auth />
    </div>
  )
}
