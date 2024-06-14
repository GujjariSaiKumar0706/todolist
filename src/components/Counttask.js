import React from 'react'
import {useContext} from 'react'
import { CounterContext } from './contexts/CounterContext';

function Counttask() {
  let [counter]= useContext(CounterContext)
  return (
    <div><p className='lead fs-1 text-center bg-dark text-info'>Count of tasks</p>
    <h1 className='fs-10 mt-10'>{counter.length}</h1></div>
  )
}

export default Counttask