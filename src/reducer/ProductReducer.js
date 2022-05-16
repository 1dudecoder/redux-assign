import { ActionTypes } from "../action/ActionTypes";

const initialstate = {
    products : [
    ],
}

export const productReducer = (state = initialstate, {type , payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            let newpayload = state.products.concat([payload])
            console.log(newpayload,"redux data")
            return {...state, products : newpayload}

        default:
            return state;
    }

}