import {createSlice} from "@reduxjs/toolkit";

const  wishSlice  =  createSlice({
    name:"wish-slice",
    initialState:{
        data:[]
    },
    reducers:{
        addWishlist(state,action){
        //   state.data = [...state.data,action.payload];
        state.data.push(action.payload);
        },
        removeWishlist(state,action){
          state.data = state.data.filter((data) => data.id !== action.payload);
        }
    }
})

export const {addWishlist,removeWishlist} = wishSlice.actions;
export default wishSlice.reducer;
