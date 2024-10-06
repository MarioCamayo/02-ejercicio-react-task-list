import { useState } from "react"
import {TasksContext} from '../context/TasksContext'
import {useContext} from 'react'

export const TasksForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {createTask} = useContext(TasksContext)

const handleSubmit = (e)=>{
    e.preventDefault()
    createTask({
        title, description
    })
    setTitle('')
    setDescription('')

}    

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text.2xl text-white font-bold">Crea tu tarea</h1>
        <input
        className="bg-slate-300 p-3 w-full mb-2"
         type="text"
         value={title}
         placeholder="Ingrese una tarea"
         autoFocus
         onChange={(e)=>setTitle(e.target.value)}
         />
         <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          cols="30"
          rows="5"
          value={description}
          onChange= {(e)=>setDescription(e.target.value)}
          placeholder="Ingrese una descripcion">
          </textarea>
        <button className="bg-indigo-600 text-white px-3 py-1">Guardar</button>
       
    </form>
    </div>
  )
}
