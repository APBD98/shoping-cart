import { configureStore } from '@reduxjs/toolkit'
import cartReducers from '../slice/itemSlice'

const store = configureStore({
    reducer: {
        cart:cartReducers
    }
  })
  
  export default store