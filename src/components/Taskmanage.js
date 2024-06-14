import React from 'react'
import Addtask from './Addtask';
import Counttask from './Counttask';
import Listtasks from './Listtasks';


function Taskmanage() {
  return (
    <div>
        <h1 className='text-danger bg-success p-5 mb-5'>TO-DO-LIST       22071A0523</h1>
        <div className='row '>
        <div className='col-sm-4 border' > <Addtask /></div>
        <div className='col-sm-4 border'><Counttask /></div>
        <div className='col-sm-4 border'> <Listtasks /></div>
        </div>
        
       
        </div>
  )
}

export default Taskmanage