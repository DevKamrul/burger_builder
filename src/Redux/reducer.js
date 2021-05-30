import * as actiontype from './actionTypes';

const INGREDIENT_PRICES = {
    Salad: 20,
    Cheese: 80,
    Meat: 90,
}

const INITIAL_STATE = {
    ingredient: [
        { type: 'Salad', amount: 0 },
        { type: 'Cheese', amount: 0 },
        { type: 'Meat', amount: 0 }
    ],
    order: [],
    orderLoading: true,
    orderErr: false,
    totalPrice: 80,
    purchesable: false,
    token: null,
    userId: null,
    authLoading: false,
    authFaildMsg: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
    const ingredient = [...state.ingredient];
    switch (action.type) {
        case actiontype.ADD_INGREDIENT:
            for (let item of ingredient) {
                if (item.type === action.payload) {
                    item.amount++
                }
            }
            return {
                ...state,
                ingredient: ingredient,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload],
            }
        case actiontype.REMOVE_INGREDIENT:
            for (let item of ingredient) {
                if (item.type === action.payload) {
                    if (item.amount <= 0) return state
                    item.amount--;
                }
            }
            return {
                ...state,
                ingredient: ingredient,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload],
            }
        case actiontype.UPDATE_PURCHASABLE:
            const sum = state.ingredient.reduce((sum, element) => {
                return sum + element.amount;
            }, 0)
            return {
                ...state,
                purchesable: sum > 0,
            }
        case actiontype.RESET_INGREDIENT:
            return {
                ...state,
                ingredient: [
                    { type: 'Salad', amount: 0 },
                    { type: 'Cheese', amount: 0 },
                    { type: 'Meat', amount: 0 }
                ],
                totalPrice: 80,
                purchesable: false,

            }
        case actiontype.LOAD_ORDER:
            let orders = [];
            for (let key in action.payload) {
                orders.push({
                    ...action.payload[key],
                    id: key,
                })
            }
            console.log(orders)
            return {
                ...state,
                order: orders,
                orderLoading: false,

            }
        case actiontype.ORDER_LOAD_FAILD:
            return {
                ...state,
                orderErr: true,
                orderLoading: false,
            }
        //Auth cases
        case actiontype.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
            }
        case actiontype.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
            }
        case actiontype.AUTH_LOADING:
            return {
                ...state,
                authLoading: action.payload,
            }
        default:
            return state;
    }
}