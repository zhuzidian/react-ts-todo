import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}

const TodoInput: React.FC<Props> = ({ todo, setTodo, addTodo }) => {
  return (
    <form>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="button" onClick={addTodo}>
        GO
      </button>
    </form>
  );
};

export default TodoInput;
