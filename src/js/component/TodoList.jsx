import React, { useState } from "react";

const initialList = ["Going to the doctor", "Getting pet food"];

const TodoList=()=>{

const [list, setList ]=useState(initialList);
const [name, setName] = useState('');

const addTodo=()=>{
    if(name!=="")setList(currentList=>[...currentList, name[0].toUpperCase()+name.slice(1)])
    setName("")
}

const deleteTodo=(taskDone)=>{
    const newlist= list.filter((task)=> task !== taskDone);
    setList(newlist);
}

const remainingTasks=()=>{
    if(list.length==0){return <p>Add a task to the List</p>}
    else {return <p>{list.length} Tasks remain on the list</p>}
    
}

return (
        <div className="card"  id="list">
            <div class="card-header text-center">
                <h1 className="d-flex justify-content-center m-3">My Todo list</h1>
            </div>
            <form className="todo-form d-flex justify-content-center">
                    
                <input  type="text" className="form-control todo-input"  placeholder="Add todo" aria-label="StartingValue" value={name} onChange={(e)=>setName(e.target.value)}/>
                <button type="button" className="btn btn-success todo-button" onClick={()=>addTodo()}>Add Task</button>
                
            </form>
            <ul id="myUl">
                 {list.map((item, index) => (<li className="todo-row" key={index} style={{marginTop:"20px"}}>{item}
                 <span className="rounded" onClick={()=>deleteTodo(item)}><i className="fas fa-trash"></i></span></li>))}
            </ul>
            <div class="card-footer" style={{marginTop:"10px", color:"white"}} >
                 <p>{remainingTasks()}</p>
            </div>
        </div>    
        );
}


export default TodoList