import './App.css'
import { TaskList } from './02-ejercicio-task-list/compoenets/TaskList'
import { TasksForm } from './02-ejercicio-task-list/compoenets/TasksForm'
import { TasksContextProvider } from './02-ejercicio-task-list/context/TasksContext'

function App() {


  return (
    <main className='bg-zinc-900 h-screen'>
      <TasksContextProvider >
        <div className="container mx-auto p-10">
          <TasksForm  />
          <TaskList  />
        </div>
      </TasksContextProvider>

    </main>
  )
}

export default App
