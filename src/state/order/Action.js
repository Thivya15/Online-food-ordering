import { api } from "../../component/config/api";
import {
   CREATE_ORDER_REQUEST,
   CREATE_ORDER_SUCCESS,
   CREATE_ORDER_FAILURE,
   GET_USERS_ORDERS_REQUEST,
   GET_USERS_ORDERS_SUCCESS,
   GET_USERS_ORDERS_FAILURE,
   GET_USERS_NOTIFICATION_REQUEST,
   GET_USERS_NOTIFICATION_SUCCESS,
   GET_USERS_NOTIFICATION_FAILURE
} from "./ActionType"


export const createOrder = (reqData) => {
    return async (dispatch) => {
        dispatch({type:CREATE_ORDER_REQUEST})
        try{
            const {data}=await api.post("/api/order", reqData.order, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                },
            });
            console.log("data.payment_url: ",data.payment_url);
            if(data.payment_url){
                window.location.href=data.payment_url;
            }
            console.log("created order data ", data);
            dispatch({type:CREATE_ORDER_SUCCESS,data});
        } catch (error) {
            console.log("catch error",error);
            dispatch({type:CREATE_ORDER_FAILURE,payload:error})
        }
    };
}

export const getUserOrders = (jwt) => {
    return async (dispatch) => {
        dispatch({type:GET_USERS_ORDERS_REQUEST})
        try{
            const {data}=await api.get("/api/order/user", {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("users order ", data);
            dispatch({type:GET_USERS_ORDERS_SUCCESS,payload:data});
        } catch (error) {
            console.log("catch error",error);
            dispatch({type:GET_USERS_ORDERS_FAILURE,payload:error})
        }
    };
}

