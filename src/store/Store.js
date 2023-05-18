import {configureStore} from "@reduxjs/toolkit"
import nameReducer from '../slice/NameSlice'

export const Store = configureStore({
    reducer:{
        nameReducer
    }
})