import { createSlice } from "@reduxjs/toolkit";
import { employees } from "./employesData";


export const employeSlice  = createSlice({
    name:'employes',
    initialState: employees,
    reducers:{
        addTask:(state , action)=>{
            const findEmploye = state.find((singleEmploye)=>singleEmploye.name===action.payload.name)
            if(findEmploye){
                const { name, ...newTask } = action.payload;
                findEmploye.tasks.push(newTask)
            }
            findEmploye.taskCounts.active++
            findEmploye.taskCounts.newTask++

        },
        markCompleted:(state, action)=>{
            const findEmploye = state.find((singleEmploye)=>singleEmploye.name===action.payload.name)
            findEmploye.tasks.map((task)=>{
               if( task.title ===action.payload.title){
                task.status = 'Completed'
               }
            }
        )
        findEmploye.taskCounts.active--
        findEmploye.taskCounts.completed++


        },
        markUndo:(state , action)=>{
            const findEmploye = state.find((singleEmploye)=>singleEmploye.name===action.payload.name)
            findEmploye.tasks.map((task)=>{
               if( task.title ===action.payload.title){
                task.status = 'In progress'
               }
            }
        )
        findEmploye.taskCounts.active++
        findEmploye.taskCounts.completed--
        }
        ,
        markFailed:(state , action)=>{
            const findEmploye = state.find((singleEmploye)=>singleEmploye.name===action.payload.name)
            findEmploye.tasks.map((task)=>{
               if( task.title ===action.payload.title){
                task.status = 'Failed'
               }
            }
        )
        findEmploye.taskCounts.active--
        findEmploye.taskCounts.failed++
        },
        markAllComplete:(state,action)=>{
            const findEmploye = state.find((singleEmploye)=>singleEmploye.name===action.payload)
            findEmploye.tasks.map((singletask)=>{
                singletask.status = 'Complete'
                
            })
            findEmploye.taskCounts.active = 0
            findEmploye.taskCounts.failed = 0
            findEmploye.taskCounts.completed = findEmploye.tasks.length
            


        },
        markAllFailed:(state , action)=>{
            const findEmploye = state.find((singleEmploye)=>singleEmploye.name===action.payload)
            findEmploye.tasks.map((singletask)=>{
                singletask.status = 'Failed'
                
            })
            findEmploye.taskCounts.active = 0
            findEmploye.taskCounts.failed = findEmploye.tasks.length
            findEmploye.taskCounts.completed = 0
        }
    }
})

export const {addTask ,markCompleted ,markAllFailed, markUndo ,markFailed ,markAllComplete} = employeSlice.actions
export default employeSlice.reducer