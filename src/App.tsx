import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (e: React.FormEvent) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: todo,
        isDone: false,
      }
    ])
  }

  const handleDone = (id: number, todo: Todo) => {
    setTodos(
      todos.map(todo => {
        return todo.id === id ? { ...todo, isDone: true } : todo;
      })
    )
  }

  return (
    <div className="App">
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}></TodoInput>
      <TodoList todos={todos} handleDone={handleDone}></TodoList>
    </div>
  );
}

export default App;
