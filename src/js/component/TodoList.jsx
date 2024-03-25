import React, { useState } from "react";

const initialList = ["Going to the doctor", "Getting pet food"];

const TodoList = () => {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");

  const addTodo = () => {
    if (name !== "")
      setList((currentList) => [
        ...currentList,
        name[0].toUpperCase() + name.slice(1),
      ]);
    setName("");
  };

  const deleteTodo = (index) => {
    const newList = [...list]
    newList.splice(index,1)
    setList(newList);
  };

  const remainingTasks = () => {
    if (list.length == 0) {
      return <p>Add a task to the List</p>;
    } else {
      return <p>{list.length} Tasks remain on the list</p>;
    }
  };

  return (
    <div className="card" id="list">
      <div className="card-header text-center">
        <h1 className="d-flex justify-content-center m-3">My Todo list</h1>
      </div>
      <form className="todo-form d-flex justify-content-center">
        <input
          type="text"
          className="form-control todo-input"
          placeholder="Add todo"
          aria-label="StartingValue"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-success todo-button"
          onClick={() => addTodo()}
        >
          Add Task
        </button>
      </form>
      <ul id="myUl">
        {list.map((item, index) => (
          <li className="todo-row" key={index} style={{ marginTop: "20px" }}>
            {item}
            <span className="rounded" onClick={() => deleteTodo(index)}>
              <i className="fas fa-trash"></i>
            </span>
          </li>
        ))}
      </ul>
      <div
        className="card-footer"
        style={{ marginTop: "10px", color: "white" }}
      >
        {remainingTasks()}
      </div>
    </div>
  );
};

export default TodoList;
