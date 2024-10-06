import {createContext, useState, useEffect} from 'react' 
import {tasks as data} from '../task' 

export const TasksContext =  createContext()

export const TasksContextProvider = (props) => {
    const [tasks, setTasks] = useState([])



    const createTask = (task)=>{
        setTasks([...tasks, {
          title:task.title,
          id: tasks.length + 1,
          description:task.description
        }])
      }
    
      const deleteTask = (taskId)=>{
        setTasks(tasks.filter(task=>task.id !== taskId ))
     }
    
     useEffect(() => {
        setTasks(data)
      
        // return () => {
        //   second
        // }
      }, [])
      
    
    const valor = 20
  return (
    <TasksContext.Provider value={{
        tasks, deleteTask, createTask
    }}>
       {props.children}
    </TasksContext.Provider>
  )
}
