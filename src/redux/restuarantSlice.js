import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call - createAsyncThunk
export const fetchRestuarant = createAsyncThunk('restuarantList/fetchRestuarant',()=>{
    // api call 
    return axios.get('/restaurants.json').then(response=>response.data.restaurants)
})

const restuarantSlice = createSlice({
    name:'restuarantList',
    initialState:{
        loading:false,
        allRestuarant:[],
        error:''
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestuarant.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchRestuarant.fulfilled,(state,action)=>{
            state.loading=false
            state.allRestuarant = action.payload
            state.error=""
        })
        builder.addCase(fetchRestuarant.rejected,(state,action)=>{
            state.loading=false
            state.allRestuarant = []
            state.error=action.error.message
        })
    }
})

export default restuarantSlice.reducer