import { configureStore } from "@reduxjs/toolkit";
import  authReducer from "./Auth"
import employesReducer from "./HandelEmploye";




export const store = configureStore({
reducer:{
        loginInfo:authReducer,
        employesData : employesReducer
       
}
})
