import React, { useState } from 'react'
import Header from './Header'
import TaskAsign from './TaskAsign'
import EmployeTable from './EmployeTable'
import SearchBar from './SearchBar'

export default function Admin({name}) {
  const [query , setQuery] = useState('')

  return (
    <>
    <div className='w-full min-h-screen bg-gray-800'>
    <Header name={name}/>
    <TaskAsign />
    <SearchBar setQuery={setQuery} query={query}/>
    <EmployeTable query={query} />
    </div>
    
    </>
    

  )
}
