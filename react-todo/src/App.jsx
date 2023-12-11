import { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', task: '', status: 'Not Started' });

  const addTodo = () => {
    if (newTodo.title && newTodo.task) {
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
      setNewTodo({ title: '', task: '', status: 'Not Started' });
    }
  };

  const updateTodoStatus = (index, newStatus) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index].status = newStatus;
      return updatedTodos;
    });
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 >Todo App</h1>
      <div >
        <label>Title:</label>
        <input
          type="text"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
      </div>
      <div>
        <label>Task:</label>
        <textarea
          value={newTodo.task}
          onChange={(e) => setNewTodo({ ...newTodo, task: e.target.value })}
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          value={newTodo.status}
          onChange={(e) => setNewTodo({ ...newTodo, status: e.target.value })}
        >
          <option value="Not Started">Not Started</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Complete">Complete</option>
        </select>
      </div>
      <button
        onClick={addTodo}
      >
        Add Todo
      </button>
      <TodoList todos={todos} updateTodoStatus={updateTodoStatus} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;