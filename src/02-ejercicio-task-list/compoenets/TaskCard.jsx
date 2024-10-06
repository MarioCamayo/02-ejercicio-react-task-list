import {TasksContext} from '../context/TasksContext'
import {useContext} from 'react'

export const TaskCard = ({task}) => {
  const {deleteTask} = useContext(TasksContext)


  return (
     <div className='bg-gray-800 text-white p-4 rounded-md' >
        <p className='text-xl font-bold capitalize'> {task.title} </p>
        <p className='text-gray-500 text-sm'>{task.id}.  {task.description} </p>
        <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400'
         onClick={()=>deleteTask(task.id)}
         >Eliminar tarea</button>
     </div>  )
}
