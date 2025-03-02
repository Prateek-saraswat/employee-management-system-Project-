import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/HandelEmploye";

export default function TaskAsign() {
  const emloyes = useSelector((state)=>state.employesData)
    const dispatch = useDispatch()
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    dueDate: "",
  name:'',
    category: "",
    status: "In progress",
    description:''
    
    
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(taskDetails))
    console.log(taskDetails);

    setTaskDetails({
        title: "",
        dueDate: "",
        name: "",
        category: "",
        status: "In progress",
        description:''
        
        
      })
  };

  const handelChange =(e)=>{
    setTaskDetails((prevState)=>({...prevState , [e.target.name]:e.target.value}))
  }


  return (
    <div className="p-6 m-10 bg-gray-900 rounded-lg shadow-lg text-gray-300">
      <h2 className="text-xl font-semibold mb-4 text-white">Assign New task</h2>

      <form className="grid md:grid-cols-2 gap-6" onSubmit={handelSubmit}>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Task Title</label>
            <input
            name="title"
            value={taskDetails.title}
            onChange={handelChange}
              type="text"
              placeholder="Make a UI design"
              className="w-full mt-1 p-2 text-gray-200 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Date</label>
            <input
            value={taskDetails.dueDate}
            name="dueDate"
            onChange={handelChange}
              type="date"
              className="w-full mt-1 p-2 text-gray-200 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
           
            <div>
            <label className="text-sm font-medium">Assign to</label>
            <select name="name" value={taskDetails.name} onChange={handelChange} className="w-full mt-1 p-2 text-gray-200 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option value="">Assign to</option>

              {
                  emloyes.map((singleEmploye)=>{
                    return <option key={singleEmploye.name} value={singleEmploye.name}>{singleEmploye.name}</option>
              
                  })
              }
             
            </select>
          </div>
          </div>

          <div>
            <label className="text-sm font-medium">Category</label>
            <select name="category" value={taskDetails.category} onChange={handelChange} className="w-full mt-1 p-2 text-gray-200 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Select Category</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="testing">Testing</option>
            </select>
          </div>
        </div>

        
        <div className="flex flex-col">
          <label className="text-sm font-medium">Description</label>
          <textarea
          name="description"
          value={taskDetails.description}
          onChange={handelChange}
            placeholder="Enter task details..."
            className="w-full h-40 mt-1 p-3 text-gray-200 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          ></textarea>

          <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded text-sm mt-4 w-full font-medium transition">
           Assign Task
          </button>
        </div>
      </form>
    </div>
  );
}
