import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/Auth'

export default function Login() {

    const [login, setLogin] = useState({email:'' , password:''})

    const dispatch = useDispatch()
    const handelChange=(e)=>{
        setLogin((prevState)=>({...prevState , [e.target.name]:e.target.value}))

    }

    const handelSubmit=(e)=>{
        e.preventDefault()
        setLogin({email:'', password:''})
        dispatch(loginUser(login))
    }


  return (
    <>
  
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
  
 
  <h1 className="text-3xl sm:text-4xl  font-mono text-gray-200 mb-12 
  
                   tracking-wide uppercase transition-all duration-300 
                   ease-in-out transform hover:scale-105 hover:text-blue-400">
        Employee Management System
    </h1>
      
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-white text-center">Login</h2>

        <form onSubmit={handelSubmit}className="mt-6 space-y-4">
          <div>
            <label className="text-gray-400 block">Email</label>
            <input
            name='email'
            value={login.email}
            onChange={handelChange}
              type="email"
              className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-gray-400 block">Password</label>
            <input
            name='password'
             onChange={handelChange}
             value={login.password}
              type="password"
              className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    
    </div>
    </>
  )
}
