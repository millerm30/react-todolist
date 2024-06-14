import {useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./TodoHeader";
import Footer from "./TodoFooter";
import InputTodo from "./InputTodo";
import TodosList from "./TodoList";
import { Todo } from "../../types";

const TodoContainer = () => {
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  function getInitialTodos() {
    const temp = localStorage.getItem("todos")
    if (temp === null) {
      return []
    }
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  };

  const handleChange = (id: string) => {
    setTodos((prevState: Todo[]) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed
        }
      }
      return todo
    }))
  };

  const delTodo = (id: string) => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  };

  const addTodoItem = (title: string) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo])
  };

  const setUpdate = (updatedTitle: string, id: string) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  };

  return (
    <>
      <div className="bg-[#fff] border-2 border-solid border-[#ccc] rounded-lg w-3/4 mx-auto my-4 shadow-md shadow-gray-400">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
        <Footer />
      </div>
    </>
  );
}

export default TodoContainer