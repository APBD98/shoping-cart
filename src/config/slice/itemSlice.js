import { createSlice } from "@reduxjs/toolkit";
import data from '../../data'

const initialState = {
    items: data.productData,
    totalAmount: 0,
    totalCount: 0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        getCartTotal: (state, action) => {
            let { totalAmount, totalCount } = state.items.reduce(
              (cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;
      
                cartTotal.totalAmount += itemTotal;
                cartTotal.totalCount += amount;
                return cartTotal;
              },
              {
                totalAmount: 0,
                totalCount: 0,
              }
            );
            state.totalAmount = parseInt(totalAmount.toFixed(2));
            state.totalCount = totalCount;
        },
        remove: (state, action) => {
          state.items = state.items.filter((item) => item.id !== action.payload);
        },
        increase: (state, action) => {
          state.items = state.items.map((item) => {
            if (item.id === action.payload) {
              return { ...item, amount: item.amount + 1 };
            }
            return item;
          });
        },
        decrease: (state, action) => {
          state.items = state.items.map((item) => {
            if (item.id === action.payload) {
              if(item.amount > 0){
                return { ...item, amount: item.amount - 1 };
              }
            }
            return item;
          });
        }
    }
})


export const {getCartTotal, increase, decrease, remove} = cartSlice.actions
export default cartSlice.reducer