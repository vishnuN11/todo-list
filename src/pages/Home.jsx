import React, { useEffect, useState } from 'react'
import  axios from "axios"
 

export default function Home() {

    const [state, setstate] = useState([])

  const getTodos=async()=>{
    const {data}= await axios.get("http://localhost:5000/api/todos")
    console.warn(data);
    setstate(data.result)
  }

  useEffect(()=>{
    getTodos()
  },[])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-12">
                {
                state.map((item)=>{
                    return(
                        <div className='border m-3 p-3'>
                           <h1>{item.task}</h1>
                           <p>{item.desc}</p>
                            </div>
                    )
                })
            }
                </div>
            </div>
           
        </div>
    )
}
