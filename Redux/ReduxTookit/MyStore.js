import {configureStore} from "@reduxjs/toolkit"
import CardReducer from "./Slice"

const myStore=configureStore({
    reducer:{
      Cart:  CardReducer
    }
})
export default myStore