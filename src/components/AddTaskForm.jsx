import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText(''); 
  };

  const setTextChange = (e) => {
    setTaskText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={setTextChange}
        placeholder="Escribe una nueva tarea"
      />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

export default AddTaskForm;
