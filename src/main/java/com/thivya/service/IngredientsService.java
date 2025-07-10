package com.thivya.service;

import com.thivya.model.IngredientCategory;
import com.thivya.model.IngredientsItem;

import java.util.List;

public interface IncredientsService {

    public IngredientCategory createIngredientCategory(String name, Long restaurantId);

    public IngredientCategory findIngredientCategoryById(Long id) throws Exception;

    public IngredientCategory findIngredientCategoryByRestaurantId(Long id) throws Exception;

    public IngredientsItem createIngredientItem(Long restaurantId, String ingredientName, Long category) throws Exception;

    public List<IngredientsItem> findRestaurantsIngredients(Long restaurantId);

    public IngredientsItem updateStoke(Long id) throws Exception;
}
