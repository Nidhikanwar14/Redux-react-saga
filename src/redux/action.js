import {ADD_TO_Cart, Empty_Cart, REMOVE_FROM_Cart} from "./constant";
export const addToCart = (data) =>{
    console.warn("action called...",data)
    return {
        type: ADD_TO_Cart,
        data

    }}

export const removeFromCart = (data) =>{
    console.warn("action removed from cart...",data)
    return {
        type: REMOVE_FROM_Cart,
        data

    }}


export const emptyCart = (data) =>{
    console.warn("action empty cart...")
    return {
        type: Empty_Cart,


    }}




