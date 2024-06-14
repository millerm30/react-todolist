export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export interface InputTodoProps {
  addTodoProps: (title: string) => void;
}

export interface TodoListProps {
  todos: Todo[];
  handleChangeProps: (id: string) => void;
  deleteTodoProps: (id: string) => void;
  setUpdate: (updatedTitle: string, id: string) => void;
}

export interface InputTodoField {
  title: string;
}