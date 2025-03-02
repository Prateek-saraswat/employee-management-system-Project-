import React from 'react'
import { useDispatch } from 'react-redux'
import { markCompleted, markFailed, markUndo } from '../store/HandelEmploye'

export default function TaskCard({title , category ,status , dueDate ,description ,name}) {
const dispatch = useDispatch()
  const handelCompleted=()=>{
dispatch(markCompleted({title , name}))
  }

  const handelUndo =()=>{
    dispatch(markUndo({title , name}))
  }
  const handelFailed =()=>{
    dispatch(markFailed({title , name}))
  }
  return (
 
  <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-full max-w-sm h-auto flex flex-col justify-between">
  {/* Task Category & Due Date */}
  <div className="flex justify-between items-center">
    <span className="bg-blue-500 text-xs font-bold px-3 py-1 rounded-lg uppercase">
      {category}
    </span>
    <span className="text-sm text-gray-300">{dueDate}</span>
  </div>

  {/* Task Title */}
  {status === 'Failed' ? (
    <h3 className="text-lg font-semibold mt-3 text-red-700">Task Failed</h3>
  ) : (
    ''
  )}
  <h3
    style={{ textDecorationColor: status === 'Failed' ? 'red' : 'white' }}
    className={`text-lg font-semibold mt-3 ${
      status === 'Completed' || status === 'Failed' ? 'line-through' : 'none'
    }`}
  >
    {title}
  </h3>

  {/* Task Description */}
  <p className="text-gray-400 text-sm mt-2 overflow-hidden text-ellipsis">
    {description}
  </p>

  {/* Action Buttons */}
  {status === 'Completed' ? (
    <div className="flex justify-between items-center mt-5">
      <button className="bg-green-500 hover:bg-green-600 px-4 py-2 text-sm rounded-lg transition text-gray-500">
        Task Completed
      </button>
      <button
        onClick={handelUndo}
        className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 text-sm rounded-lg transition text-gray-500"
      >
        Undo
      </button>
    </div>
  ) : status === 'In progress' ? (
    <div className="flex justify-between mt-5">
      <button
        onClick={handelCompleted}
        className="bg-green-500 hover:bg-green-600 px-4 py-2 text-sm rounded-lg transition"
      >
        Mark as Completed
      </button>
      <button
        onClick={handelFailed}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 text-sm rounded-lg transition"
      >
        Mark as Failed
      </button>
    </div>
  ) : (
    <div className="flex justify-between items-center mt-5">
      <button className="bg-red-500 hover:bg-red-600 px-4 py-2 text-sm rounded-lg transition line-through text-gray-500">
        Task Failed
      </button>
    </div>
  )}
</div>
  )
}
