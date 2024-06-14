import { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

type TodoItemProps = {
  todo: {
    completed: boolean;
    id: string;
    title: string;
  },
  handleChangeProps: (id: string) => void;
  deleteTodoProps: (id: string) => void;
  setUpdate: (updatedTitle: string, id: string) => void;
};

const TodoItem = (props: TodoItemProps) => {
  const [editing, setEditing] = useState<boolean>(false)

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  const handleEditing = () => {
    setEditing(true)
  };

  const handleUpdatedDone = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
  
  let viewMode: { display?: string } = {};
  let editMode: { display?: string } = {};

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
        <button
          onClick={handleEditing}
          className="bg-white border-none cursor-pointer float-right outline-none"
        >
          <FaEdit className="text-red-700 text-2xl ml-4" />
        </button>
        <button
          onClick={() => props.deleteTodoProps(id)}
          className="bg-white border-none cursor-pointer float-right mt-1 outline-none"
        >
          <FaTrashAlt className="text-orange-500 text-lg" />
        </button>
        <span style={completed ? completedStyle : {}}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className="w-full p-2"
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

export default TodoItem
