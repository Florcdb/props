import React, {useState} from 'react'
import AddTaskForm from './components/AddTaskForm'
import './App.css'

/*
const filtertasks = (tasks) => {
  return tasks.filter((task) => task.id === id)
}
*/

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);


  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
    <h1>Lista de Tareas:</h1>
    <AddTaskForm addTask={addTask} />
    </>
  );
};



export default App;
