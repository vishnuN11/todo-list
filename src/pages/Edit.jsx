import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function Edit() {
    const [state, setstate] = useState([])
    const [mtask,setMtask]=useState('')
    const [mdesc,setMdesc]=useState('')
    const [updateId,setupdateId]=useState('')

    const [isLoading,setIsLoading]=useState(false)

    const getTodos=async()=>{
      setIsLoading(true)
      const {data}= await axios.get("http://localhost:5000/api/todos")
      console.warn(data);
      setstate(data.result)
      setIsLoading(false)
    }
    useEffect(()=>{
        getTodos()
      },[])

      let deleteId;
     const deleteTodo =async()=>{
       const result= await axios.delete(`http://localhost:5000/api/todos/${deleteId}`)
       getTodos()
     }

     const updateTodo=async()=>{
      const result= await axios.put(`http://localhost:5000/api/todos/${updateId}`,
      {task:mtask,desc:mdesc})
      getTodos()
     }
     const deleteAllTodo=async()=>{
      const result= await axios.delete(`http://localhost:5000/api/todos/deleteAll`)
      getTodos()
     }
  return <div className='container'>
      <div className="row">
          <div className="col-md-6 offset-lg-2">
            {
              isLoading ? <div className='spinner spinner-border'>  </div> :
              <section>

{
               state.length>0 
               ? <table className='table table-dark table-bordered'>
               <thead>
                   <tr>
                       <th>Sr No</th>
                       <th>Task</th>
                       <th>Desc</th>
                       <th>Action
                         <button className='btn btn-sm btn-danger'
                         onClick={deleteAllTodo}>Delete All</button>
                       </th>
                   </tr>
               </thead>
               <tbody>
                   {
                       state.map((item,i)=>(
                           <tr key={item._id}>
                               <td>{i+1}</td>
                               <td>{item.task}</td>
                               <td>{item.desc}</td>
                               <td>
                                   <button className='btn btn-secondary btn-sm ml-5'
                                   data-bs-target="#ediModel" data-bs-toggle="modal"
                                   onClick={e=>{
                                     setMtask(item.task)
                                     setMdesc(item.desc)
                                     setupdateId(item._id)
                                   }}
                                   >Edit</button>
                                   <button onClick={e=>{deleteId=item._id}}
                                    className='btn btn-secondary btn-sm'
                                   data-bs-target="#delModel" data-bs-toggle="modal">Delete</button>
                               </td>
                           </tr>
                       ))
                   }
               </tbody>

           </table>
               :<h1>wel done no todo available</h1>
             }

              </section>
            }
          </div>
      </div>
      <div className="modal fade " id="delModel">
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <h1>Are You Sure</h1>
              <button data-bs-dismiss="modal" className='btn btn-lg btn-danger me-4'
              onClick={deleteTodo}>Yes</button>
              <button data-bs-dismiss="modal" className='btn btn-lg btn-success me-4'>No</button>
            </div>
             
          </div>
        </div>
      </div>



      {/* for update */}



      <div className="modal fade " id="ediModel">
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
               <input type="text" value={mtask} onChange={e=>setMtask(e.target.value)} className='form-control'/> <br />
               <input type="text" value={mdesc} onChange={e=>setMdesc(e.target.value)} className='form-control'/>


               <button data-bs-dismiss="modal" className='btn btn-lg btn-danger me-4 mt-2'
              onClick={updateTodo}>Update</button>
              <button data-bs-dismiss="modal" className='btn btn-lg btn-success me-4 mt-2'>Cancel</button>
                
            </div>
             
          </div>
        </div>
      </div>
      
     
  </div>
}
