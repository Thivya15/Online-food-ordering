import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import { restaurantReducer } from "./restaurant/Reducer";
import { menuItemReducer } from "./menu/Reducer";
import { orderReducer } from "./order/Reducer";
import { ingredientReducer } from "./ingredients/Reducer";
import  { restaurantsOrderReducer } from "./restaurant order/Reducer";
import { cartReducer } from "./cart/Reducer";

export const routeReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart:cartReducer,
    order: orderReducer,
    restaurantOrder: restaurantsOrderReducer,
    ingredients: ingredientReducer,
});

export const store = legacy_createStore(routeReducer, applyMiddleware(thunk));
export default store;
