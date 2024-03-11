import React, { useState } from "react";

const initialList = ["going to the doctor", "getting pet food"];

const TodoList=()=>{

const [list, setList ]=useState(initialList);
const [name, setName] = useState('');

const addTodo=()=>{
    setList(currentList=>[...currentList, name])
    setName("")
}

const deleteTodo=(taskDone)=>{
    const newlist= list.filter((task)=> task !== taskDone);
    setList(newlist);
}

return (
        <div className="card" style={{width:"600px"}} id="list">
            <h1 className="d-flex justify-content-center m-3">My To-do list</h1>
            <form className="d-flex justify-content-center m-3">
                <div className="mb-3">    
                <input  type="text" className="form-control"  placeholder="Add todo" aria-label="StartingValue" value={name} onChange={(e)=>setName(e.target.value)}/>
                <button type="button" style={{marginTop:"10px"}} className="btn btn-success" onClick={()=>addTodo()}>add ToDo</button>
                </div>
            </form>
            <ul>
                 {list.map((item, index) => (<li className="myLi" key={index} style={{marginTop:"20px"}}>{item}
                 <span className="rounded" onClick={()=>deleteTodo(item)}><i className="fas fa-trash"></i></span></li>))}
            </ul>
        </div>    
        );
}


export default TodoList