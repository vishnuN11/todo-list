import React, { useState } from 'react'
import axios from 'axios'

export default function AddTodo() {
    const [task, setTask] = useState('')
    const [desc, setDesc] = useState('')
    const [msg,setMsg]=useState(false)

    const addTodoData=async(e)=>{
        e.preventDefault()
        e.target.reset()
        const {data}=await axios.post("http://localhost:5000/api/todos",{task,desc})
        showMessage()
        
    }
    const showMessage=()=>{
     setMsg(true)

     setTimeout(() => {
         setMsg(false)
     }, 5000);
    }
    return (
        <div className='container m-4'>
            {
                msg ? <div className="alert alert-success">Data Inserted</div>:null
            }
            
           <form onSubmit={addTodoData}>
           <input type="text" className='form-control' onChange={e=> setTask(e.target.value)} />
            <br/>
            <input type="text" className='form-control' onChange={e=> setDesc(e.target.value)}/>
            <br />

            <button className='btn btn-sm btn-secondary' >Add todo</button>
           </form>
           
        </div>
    )
}
