import { createSlice } from "@reduxjs/toolkit";

const users = [
    {name:'Prateek' ,email:'admin@gmail.com' , password:"admin@123" , role:"admin"},
    
    { name: "John Doe",email: "john.doe@example.com", password:"admin@123",role:"employe"},
    {name: "Alice Johnson",email: "alice.johnson@example.com",password:"admin@123",role:"employe"},
    { name: "Michael Smith",email: "michael.smith@example.com",password:"admin@123",role:"employe"},
    {name: "Sarah Brown",email: "sarah.brown@example.com",password:"admin@123",role:"employe"},
    { name: "David Wilson",email: "david.wilson@example.com",password:"admin@123",role:"employe"}


   
]

const mySlice = createSlice({
name:'auth',
initialState:{
    name :'',
    userRole : null,
    isAuthenticated:false,
    
},
reducers:{
    loginUser:(state, action)=>{
        const loginUser = users.find((user)=>action.payload.email===user.email && action.payload.password===user.password)
        if(loginUser){
            state.name =loginUser.name 
            state.userRole =loginUser.role 
            state.isAuthenticated =true
            localStorage.setItem('userRole' , loginUser.role)
            localStorage.setItem('userName' , loginUser.name)
        }else{
           return state
        }
    },
    logoutUser:(state)=>{
        state.name ='' 
        state.userRole =''
        state.isAuthenticated =false
        
        localStorage.setItem('userRole' , "")
        localStorage.setItem('userName' , "")
    }
}
})

export const {loginUser , logoutUser} = mySlice.actions
export default  mySlice.reducer