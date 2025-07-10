package com.thivya.service;

import com.thivya.model.IngredientCategory;
import com.thivya.model.IngredientsItem;
import com.thivya.model.Restaurant;
import com.thivya.repository.IncredientCategoryRepository;
import com.thivya.repository.IngredientItemRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class IncredientsServiceImp implements IncredientsService{

    @Autowired
    private IngredientItemRepository ingredientItemRepository;

    @Autowired
    private IncredientCategoryRepository incredientCategoryRepository;

    @Autowired
    private RestaurantService restaurantService;

    @Override
    public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception{

        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);

        IngredientCategory category = new IngredientCategory();
        category.setRestaurant(restaurant);
        category.setN
        return null;
    }

    @Override
    public IngredientCategory findIngredientCategoryById(Long id) throws Exception {
        return null;
    }

    @Override
    public IngredientCategory findIngredientCategoryByRestaurantId(Long id) throws Exception {
        return null;
    }

    @Override
    public IngredientsItem createIngredientItem(Long restaurantId, String ingredientName, Long category) throws Exception {
        return null;
    }

    @Override
    public List<IngredientsItem> findRestaurantsIngredients(Long restaurantId) {
        return List.of();
    }

    @Override
    public IngredientsItem updateStoke(Long id) throws Exception {
        return null;
    }
}
