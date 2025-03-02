import React, { useEffect } from 'react'
import Header from './Header'
import TaskCard from './TaskCard'
import TaskDetails from './taskDetails'
import { useSelector } from 'react-redux'

export default function Employee({name}) {
const employe = useSelector((state)=>state.employesData)
const employeDetails = employe.find((singleEmploye)=>singleEmploye.name === name)

const employeTaskDetail = {active:0 , completed:0 , failed:0 }
 
employeDetails.tasks.forEach((singleTask)=>{
  if(singleTask.status==='Completed')employeTaskDetail.completed++
  if(singleTask.status==='In progress')employeTaskDetail.active++
  if(singleTask.status==='Failed')employeTaskDetail.failed++

})



  return (
    <>
    <div className='w-full min-h-screen bg-gray-700'>
    <Header name={name} />
    <TaskDetails name={name} />
    <div className='flex gap-10 m-5 mt-16 bg'>
    {
      employeDetails.tasks.map(({title , category ,status , dueDate ,description})=>{
        return <TaskCard name={name} key={title} title={title} category={category} description={description} dueDate={dueDate} status={status} />
      })
    }
    </div>
    </div>
   
    
    
    </>
  )
    
    
}
