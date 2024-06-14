import {useContext} from 'react'
import { CounterContext } from './contexts/CounterContext';
import { useForm} from 'react-hook-form';
function Addtask() {
  let [counter,setCounter]= useContext(CounterContext)
  let {register,handleSubmit}= useForm()

  function handleFormSubmit(taskObj){
    setCounter([...counter,taskObj])

  }
  return (
    <div>
      <p className='lead fs-1 text-center bg-dark text-info mb-5'>Add a task</p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input type='text' { ... register('newTask') } id='' className="form-control mb-5"  placeholder="Enter a task" />
       <button type='submit' className='bg-primary text-white'>Add</button>
        
      </form>
      
      
      </div>
  )
}

export default Addtask;