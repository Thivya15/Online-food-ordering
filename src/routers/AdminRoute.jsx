import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin } from '../adminComponent/Admin/Admin'
import { CreateRestaurantForm } from '../adminComponent/createRestaurantForm/CreateRestaurantForm'
import { useSelector } from 'react-redux'

export const AdminRoute = () => {
  const { restaurant } = useSelector((store) => store);
  return (
    <div>
        <Routes>
            <Route path='/*' element = {
              
              !restaurant.usersRestaurant?<CreateRestaurantForm/>:<Admin/>
              }
            ></Route>
        </Routes>
    </div>
  )
}
