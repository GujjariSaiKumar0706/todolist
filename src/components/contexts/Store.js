import {useState} from 'react'
import { CounterContext } from './CounterContext'

function Store({children}) {


    let [counter,setCounter]=useState([])
  return (
    <CounterContext.Provider value={[counter,setCounter]}>
            {children}
    </CounterContext.Provider>
  )
}

export default Store