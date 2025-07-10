import { api } from "../../component/config/api";
import {
    CREATE_MENU_ITEM_REQUEST,
    CREATE_MENU_ITEM_SUCCESS,
    CREATE_MENU_ITEM_FAILURE,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
    DELETE_MENU_ITEM_REQUEST,
    DELETE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_FAILURE,
    SEARCH_MENU_ITEM_REQUEST,
    SEARCH_MENU_ITEM_SUCCESS,
    SEARCH_MENU_ITEM_FAILURE,
    UPDATE_MENU_ITEM_AVAILABILITY_REQUEST,
    UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS,
    UPDATE_MENU_ITEM_AVAILABILITY_FAILURE
} from "./ActionType"

export const createMenuItem = ({menu,jwt}) => {
    return async (dispatch) => {
        dispatch({type:CREATE_MENU_ITEM_REQUEST});
        try{
            const {data} = await api.post("/api/admin/food", menu, 
                {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("created menu ", data);
            dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data});
        } catch (error) {
            console.log("menu data: ", menu);
            console.log("jwt", jwt);
            console.log("catch error",error);
            dispatch({type:CREATE_MENU_ITEM_FAILURE,payload:error});
        }
    };
}

export const getMenuItemsByRestaurantId = (reqData) => {
    return async (dispatch) => {
        dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST});
        try{
            const {data} = await api.get(
                `/api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian ?? ''}&nonveg=${reqData.nonveg ?? ''}&seasonal=${reqData.seasonal ?? ''}&food_category=${reqData.foodCategory ?? ''}`,
                {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });

            console.log("menu item by restaurants ", data);
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,payload:data});
        } catch (error) {
            console.log("catch error",error);
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,payload:error});
        }
    };
}

export const searchMenuItem = ({keyword,jwt}) => {
    return async (dispatch) => {
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});
        try{
            const {data} = await api.get(`/api/food/search?name=${keyword}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("data -----------", data);
            dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});
        } catch (error) {
            console.log("catch error",error);
            dispatch({type:SEARCH_MENU_ITEM_FAILURE,payload:error});
        }
    };
}

// export const getAllIngredientsOfMenuItem = ({reqData}) => {
//     return async (dispatch) => {
//         dispatch({type:SEARCH_MENU_ITEM_REQUEST});
//         try{
//             const {data} = await api.get(
//                 `/api/food/restaurant/${reqData.restaurantId}`, {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`,
//                 },
//             });
//             console.log("data -----------", data);
//             dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});
//         } catch (error) {
//             console.log("catch error",error);
//             dispatch({type:SEARCH_MENU_ITEM_FAILURE,payload:error});
//         }
//     };
// }

export const updateMenuItemAvailability = ({foodId,jwt}) => {
    return async (dispatch) => {
        dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_REQUEST});
        try{
            const {data} = await api.put(
                `/api/admin/food/${foodId}`,
                {},
                {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("update menu Items Availability ", data);
            dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS ,payload:data});
        } catch (error) {
            console.log("catch error",error);
            dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_FAILURE,payload:error});
        }
    };
}

export const deleteFoodAction = ({foodId,jwt}) => {
    return async (dispatch) => {
        dispatch({type:DELETE_MENU_ITEM_REQUEST});
        try{
            const {data} = await api.delete(
                `/api/admin/food/${foodId}`,
                {},
                {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            
            console.log("update menu Items Availability ", data);
            dispatch({type:DELETE_MENU_ITEM_SUCCESS ,payload:data});
        } catch (error) {
            console.log("jwt token in deleteFoodAction: ", jwt);
            console.log("catch error",error);
            dispatch({type:DELETE_MENU_ITEM_FAILURE,payload:error});
        }
    };
}
