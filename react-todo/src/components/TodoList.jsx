
const TodoList = ({ todos, updateTodoStatus, deleteTodo }) => {
    return (
      <ul className="mt-4 space-y-4">
        {todos.map((todo, index) => (
          <li
            key={index}
          >
            <strong>{todo.title}</strong>
            <p>{todo.task}</p>
            <p className={`text-${getStatus(todo.status)}`}>Status: {todo.status}</p>
            <div className="flex space-x-2">
              <button
                onClick={() => updateTodoStatus(index, 'Ongoing')}
              >
                Start
              </button>
              <button
                onClick={() => updateTodoStatus(index, 'Complete')}
              >
                Complete
              </button>
              <button
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  
  const getStatus = (status) => {
    switch (status) {
      case 'Not Started':
        return;
      case 'Ongoing':
        return;
      case 'Complete':
        return;
      default:
        return;
    }
  };
  
  export default TodoList;