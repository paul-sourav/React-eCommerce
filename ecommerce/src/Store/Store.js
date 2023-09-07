import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import WishSlice from "./WishSlice";

const Stote = configureStore({
    reducer:{
        cart:CartSlice,
        wish:WishSlice,
    }
})

export default Stote;