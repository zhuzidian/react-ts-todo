import React from "react";
import { Todo } from "../model";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <li>
      {todo.title}
      <button>Done</button>
      <button>Delete</button>
    </li>
  );
};

export default TodoItem;
