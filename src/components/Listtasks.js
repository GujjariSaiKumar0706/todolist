import React from 'react'
import {useContext} from 'react'
import { CounterContext } from './contexts/CounterContext';

function Listtasks() {
  let [counter]= useContext(CounterContext)
  return (
    <div><p className="lead fs-1 text-center bg-dark text-info">TASKS</p>
    {counter.map((e, i) => (
      <p className="lead" key={i}>
        {e.newTask}
      </p>
    ))}</div>
  )
}

export default Listtasks