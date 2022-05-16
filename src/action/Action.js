import {ActionTypes} from "./ActionTypes.js"

export const setproducts = (products) => {

    console.log(products  ,"this is coming data")

    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
