import React, { useState } from 'react';

function App() {
  // useState to keep track of all todos (array of strings)
  const [todos, setTodos] = useState([]);

  // useState to track input field value
  const [input, setInput] = useState('');

  // Function to add new todo
  const handleAddTodo = () => {
    if (input.trim() !== '') {
      // Add new todo to array
      setTodos([...todos, input]);
      setInput(''); // Clear input after adding
    }
  };

  // Function to delete a todo by its index
  const handleDeleteTodo = index => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>My Todo List</h1>

      {/* Input box to type new todo */}
      <input
        type='text'
        placeholder='Enter a task'
        value={input}
        onChange={e => setInput(e.target.value)} // update input state
      />

      {/* Button to add todo */}
      <button onClick={handleAddTodo} style={{ marginLeft: '10px' }}>
        Add
      </button>

      {/* Display todo list */}
      <ul style={{ marginTop: '90px' }}>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            {/* Delete button for each todo */}
            <button
              onClick={() => handleDeleteTodo(index)}
              style={{ marginLeft: '50px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
