import React, { useState } from 'react'
import { Search } from "lucide-react"

export default function SearchBar({query  ,setQuery}) {
  return (
    <div className=" max-w-lg  mx-10 p-2 relative">
    <input
      type="text"
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
      
      placeholder="Search Employee..."
      className="w-full p-3 pl-12 text-lg bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
    />
    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
  </div>
  )
}
