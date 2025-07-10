package com.thivya.service;

import com.thivya.dto.RestaurantDto;
import com.thivya.model.Restaurant;
import com.thivya.model.User;
import com.thivya.request.CreateRestaurantRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RestaurantService {

    public Restaurant createRestaurant(CreateRestaurantRequest createRequest, User user);

    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updateRequest) throws Exception;

    public void deleteRestaurant(Long restaurantId) throws Exception;

    public List<Restaurant> getAllRestaurant();

    public List<Restaurant> searchRestaurant(String keyword);

    public Restaurant findRestaurantById(Long id) throws Exception;

    public Restaurant getRestaurantByUserId(Long userId)throws Exception;

    public RestaurantDto addToFavourites(Long restaurantId, User user) throws Exception;

    public Restaurant updateRestaurantStatus(Long id) throws Exception;

}