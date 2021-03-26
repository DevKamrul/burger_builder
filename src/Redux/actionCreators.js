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