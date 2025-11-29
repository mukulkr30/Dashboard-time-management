import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import './Common.css'
export default function Todo(){
    let [inpval, setinp] = useState("")
    let [todos,settodo] = useState([])
    let addTask = ()=>{
        settodo((prev)=>{
            return(
                [...prev,{task: inpval,id:uuidv4()}]
        )
        })
        setinp("")
    }

    let update = (event)=>{
        setinp(event.target.value)
    }
    let deletetodo = (id)=>{
        settodo(todos.filter((todo)=>todo.id != id))
    }

    return(
        <div className="col-sm-6">
            <div className='todo'>
                <h3>ToDo</h3>
                <input type="text" placeholder='Enter Task' value={inpval} onChange={update}/>
                <button onClick={addTask}>Add Task</button>
                <ul>
                    {
                        todos.map((todo)=>{
                            return <li className='todolist' key={todo.id}><span>{todo.task}</span> <button onClick={()=>deletetodo(todo.id)}>Remove</button> </li>
                        })
                    }
                </ul>
                
            </div>
        </div>
    )
}