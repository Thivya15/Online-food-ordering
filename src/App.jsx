import React, { useEffect } from 'react'
import Navbar from './component/navbar/Navbar'
import { ThemeProvider } from '@emotion/react'
import { DarkTheme } from './theme/DarkTheme'
import { CssBaseline } from '@mui/material'
import Home from './component/home/Home'  
import RestaurantDetails from './restaurant/RestaurantDetails'
import Cart from './component/cart/Cart'
import Profile from './component/profile/Profile'
import { CustomerRoute } from './routers/CustomerRoute'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './state/Authentication/Action'
import { findCart } from './state/cart/Action'
import { Routers } from './routers/Routers'
import { getRestaurantByUserId } from './state/restaurant/Action'

const App = () => {
  const dispatch=useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt))
    dispatch(findCart(jwt));
  },[auth.jwt]);

  useEffect(()=>{
    dispatch(getRestaurantByUserId(auth.jwt || jwt));

  },[auth.user])

  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      {/* <Cart />*/}
      {/* <Profile/>*/}
      {/* <CustomerRoute /> */}
      <Routers />
    </ThemeProvider>
  )
}

export default App
