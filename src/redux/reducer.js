
import {ADD_TO_Cart, Empty_Cart, REMOVE_FROM_Cart} from "./constant";

export const cartData =(data = [], action) =>{
    switch (action.type){
        case ADD_TO_Cart:
            console.warn("Add to Cart condition",action);
            return [action.data ,...data];
        case REMOVE_FROM_Cart:
            console.warn("Remove from cart condition",action);
            // data.length = data.length ? data.length-1:[];
            const remainingItem = data.filter((item) => item.id!== action.data);
            // console.warn(remainingItem);
            return [...remainingItem];
        case Empty_Cart:
            console.warn("Empty cart condition",action);
            data = [];
            return [...data];
        default:
            return data;
    }
}

