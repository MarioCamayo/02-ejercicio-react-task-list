import { TaskCard } from "./TaskCard"
import {TasksContext} from '../context/TasksContext'
import {useContext} from 'react'


export const TaskList = () => {
  const {tasks} = useContext(TasksContext)

    if(tasks.length === 0){
        return <h1>no hay tareas</h1>
    }
    return (
      <div className="grid grid-cols-4 gap-2">
        {tasks.map(task=>(
            <TaskCard key={task.id} task={task} />
        ))}
      </div>
    )
  }
  