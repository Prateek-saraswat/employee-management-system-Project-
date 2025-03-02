import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { markAllComplete, markAllFailed } from '../store/HandelEmploye';

export default function EmployeTable({query}) {
    const employes = useSelector((state)=>state.employesData)
    const dispatch = useDispatch()

    const handelAllComplete=(name)=>{
        dispatch(markAllComplete(name))
    }
    const handelAllFailed=(name)=>{
        dispatch(markAllFailed(name))
    }
  return (
    <div className="overflow-x-auto  ">
    <div className=" m-8 bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="px-6 py-3 text-left">Employee Name</th>
            <th className="px-6 py-3 text-left">Active Tasks</th>
            <th className="px-6 py-3 text-left">New Tasks</th>
            <th className="px-6 py-3 text-left">Completed Tasks</th>
            <th className="px-6 py-3 text-left">Failed Tasks</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>

            {
                employes.filter((employe)=>employe.name.toLowerCase().includes(query.toLowerCase())).map(({name  , taskCounts})=>{
                    return  <tr key={name} className="border-b hover:bg-gray-100">
                    <td className="px-6 py-4">{name}</td>
                    <td className="px-6 py-4">{taskCounts.active}</td>
                    <td className="px-6 py-4">{taskCounts.newTask}</td>
                    <td className="px-6 py-4">{taskCounts.completed}</td>
                    <td className="px-6 py-4">{taskCounts.failed}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-3">
                        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 text-sm rounded-lg text-white" onClick={()=>handelAllComplete(name)}>
                          Mark all as Completed
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 text-sm rounded-lg text-white"onClick={()=>handelAllFailed(name)}>
                          Mark all as Failed
                        </button>
                      </div>
                    </td>
                  </tr>
                })
            }
         
          
        </tbody>
      </table>
    </div>
  </div>
  )
}
