import React from "react";

import { Todo } from "../model";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  handleDone: (id: number, todo: Todo) => void
  handleDelete: (id: number) => void
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo}></TodoItem>;
      })}
    </ul>
  );
};

export default TodoList;
