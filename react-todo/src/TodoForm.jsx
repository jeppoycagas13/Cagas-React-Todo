import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [title, setTitle,] = useState('');
  const [maintitle, setmaintitle] = useState('');
  const [status, setStatus] = useState('Not Started');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title, status);
      setTitle('');
      setStatus('Not Started');
    }
  };

  return (
    <form className='' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={maintitle}
        onChange={(e) => setmaintitle(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
