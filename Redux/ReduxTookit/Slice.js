import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const CardSlice = createSlice({
  name: 'Card',
  initialState,
  reducers: {
    addCartItem(state, action) {
      state.push(action.payload)
    },
    removeCartItem(state, action) {

     return state.filter((item,index)=>{

     return  index!==action.payload;})

    }
  }
})

export const { addCartItem, removeCartItem } = CardSlice.actions
export default CardSlice.reducer