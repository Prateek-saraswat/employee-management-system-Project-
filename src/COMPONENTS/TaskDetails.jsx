import React from 'react'
import { useSelector } from 'react-redux'

export default function TaskDetails({name}) {
  const employeDetails = useSelector((state)=>state.employesData.find((singleEmploye)=>singleEmploye.name===name))
  const {active , completed , failed , newTask} = employeDetails.taskCounts
  
  return (
    <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
    {/* Active Tasks */}
    <div className="p-6 rounded-2xl shadow-md text-white bg-blue-500 w-full max-w-xs">
      <h3 className="text-lg font-semibold">Active Tasks</h3>
      <p className="text-4xl font-bold mt-2">{active}</p>
    </div>

    {/* Completed Tasks */}
    <div className="p-6 rounded-2xl shadow-md text-white bg-green-500 w-full max-w-xs">
      <h3 className="text-lg font-semibold">Completed Tasks</h3>
      <p className="text-4xl font-bold mt-2">{completed}</p>
    </div>

    {/* New Tasks */}
    <div className="p-6 rounded-2xl shadow-md text-white bg-yellow-500 w-full max-w-xs">
      <h3 className="text-lg font-semibold">New Tasks</h3>
      <p className="text-4xl font-bold mt-2">{newTask}</p>
    </div>

    {/* Failed Tasks */}
    <div className="p-6 rounded-2xl shadow-md text-white bg-red-500 w-full max-w-xs">
      <h3 className="text-lg font-semibold">Failed Tasks</h3>
      <p className="text-4xl font-bold mt-2">{failed}</p>
    </div>
  </div>
  )
}
