import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  const handleEditing = () => {
    setEditing(true)
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter" ) {
      setEditing(false)
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title } = props.todo
  
  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  };

  return (
    <li className="text-xl list-none px-4 py-0 border-b-2 border-dotted border-[#ccc]">
      <div onDoubleClick={handleEditing} style={viewMode} className="my-2">
        <input 
          type="checkbox" 
          className="mr-4 ml-2"
          checked={completed}  
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={handleEditing} className="bg-white border-none cursor-pointer float-right outline-none">
          <FaEdit className="text-red-700 text-2xl ml-4"/>
        </button>
        <button onClick={() => props.deleteTodoProps(id)} className="bg-white border-none cursor-pointer float-right mt-1 outline-none">
          <FaTrashAlt className="text-orange-500 text-lg" />
        </button>
        <span style={completed ? completedStyle : null} >{title}</span>
      </div>
      <input 
        type="text" 
        style={editMode} 
        className="w-full p-2" 
        value={title} 
        onChange={(e)=> {props.setUpdate(e.target.value, id)}}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}

export default TodoItem
