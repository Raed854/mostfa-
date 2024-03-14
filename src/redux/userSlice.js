import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk ("getAllUsers",async ()=>{
    try {
        const data = await axios.get("http://localhost:8000/miroir/api/user/");
        return data.data;
    } catch (error) {
        return error;
    }
})


const userSlice = createSlice ({
    name:"userSlice" ,
    initialState:null,
    reducers : {
        getAllUsers : getAllUsers,
    }
});








export default userSlice.reducer;