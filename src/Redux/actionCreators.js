import axios from 'axios'
import * as actionTypes from './actionTypes';


export const addIngredient = (igtype) => { //igtype = ingredient ar type
    return {
        type: actionTypes.ADD_INGREDIENT, //type =  redux ar type
        payload: igtype,
    }
}

export const removeIngredient = (igtype) => { //igtype = ingredient ar type
    return {
        type: actionTypes.REMOVE_INGREDIENT, //type =  redux ar type
        payload: igtype,
    }
}

export const updatePurchesable = () => {
    return {
        type: actionTypes.UPDATE_PURCHASABLE
    }
}

export const resetIngredient = () => {
    return {
        type: actionTypes.RESET_INGREDIENT,
    }
}

export const loadOrders = orders => {
    return {
        type: actionTypes.LOAD_ORDER,
        payload: orders,
    }
}

export const orderLoadFaild = () => {
    return {
        type: actionTypes.ORDER_LOAD_FAILD
    }
}

export const fatchorders = (token, userId) => dispatch => {
    const queryParam = '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('https://burger-builder-app-cbe43-default-rtdb.firebaseio.com/orders.json?auth=' + token + queryParam)
        .then(response => {
            dispatch(loadOrders(response.data));
        })
        .catch(err => {
            dispatch(orderLoadFaild());
        })
}