import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:"pune"
}

export const NameSlice = createSlice({
    name:"cityName",
    initialState,
    reducers:{
        addName:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {addName} = NameSlice.actions

export default NameSlice.reducer