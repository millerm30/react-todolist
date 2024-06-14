import TodoItem from "./TodoItem";
import { TodoListProps } from "../../types";

const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={props.handleChangeProps}
        deleteTodoProps={props.deleteTodoProps}
        setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  )
}

export default TodoList