import {createSlice} from "@reduxjs/toolkit";

const STATUS = Object.freeze({
    LOADING:"loading",
    IDLE:"idle",
    ERROR:"error"
})

const CartSlice = createSlice({
    name :"cartslice",
    initialState:{
        data:[],
        status:STATUS.IDLE,
    },
    reducers:{
        addToCart(state,action){
            state.data = [...state.data,action.payload];
        },
        removeCart(state,action){
           state.data.filter((product)=>product.id !== action.payload);
        }
    }
})

export const {addToCart,removeCart} = CartSlice.actions;
export default CartSlice.reducer;