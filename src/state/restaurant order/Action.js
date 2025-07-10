import { api } from "../../component/config/api.js";
import {
    GET_RESTAURANTS_ORDER_REQUEST,
    GET_RESTAURANTS_ORDER_SUCCESS,
    GET_RESTAURANTS_ORDER_FAILURE,
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS,
    UPDATE_ORDER_STATUS_FAILURE,
} from "./ActionType.js"

export const updateOrderStatus = ({orderId, orderStatus,jwt}) => {
    return async (dispatch) => {
        dispatch({type:UPDATE_ORDER_STATUS_REQUEST})
        try{
            const response =await api.put(`/api/admin/order/${orderId}/${orderStatus}`,{},{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            const updateOrder = response.data;
            console.log("updated order ", updateOrder);
            dispatch({type:UPDATE_ORDER_STATUS_SUCCESS,payload:updateOrder});
        } catch (error) {
            console.log("catch error",error);
            dispatch({type:UPDATE_ORDER_STATUS_FAILURE,error})
        }
    };
}

export const fetchRestaurantsOrder = ({restaurantId, orderStatus,jwt}) => {
    return async (dispatch) => {
        dispatch({type:GET_RESTAURANTS_ORDER_REQUEST})
        try{
            const {data}=await api.get(`/api/admin/order/restaurant/${restaurantId}`, {
                params: {order_status:orderStatus},
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            const orders = data;
            console.log("restaurants order ", data);
            dispatch({type:GET_RESTAURANTS_ORDER_SUCCESS,payload:orders});
        } catch (error) {
            console.log("catch error",error);
            dispatch({type:GET_RESTAURANTS_ORDER_FAILURE,payload:error})
        }
    };
}