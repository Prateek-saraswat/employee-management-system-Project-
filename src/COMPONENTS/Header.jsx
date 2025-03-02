import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../store/Auth'

export default function Header({name}) {
    const dispatch = useDispatch()
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white py-4 px-6 shadow-md">
    {/* Left Side - App Name */}
    <h1 className="text-2xl font-semibold">Employee Management System</h1>

    {/* Right Side - User Name & Logout Button */}
    <div className="flex items-center gap-4">
      <span className="text-lg">Welcome, <b>{name} </b>👋</span>
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={()=>dispatch(logoutUser())}>
        Logout
      </button>
    </div>
  </header>
  )
}
