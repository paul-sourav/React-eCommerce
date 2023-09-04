import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const Stote = configureStore({
    reducer:{
        cart:CartSlice,
    }
})

export default Stote;