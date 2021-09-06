import Header from './Components/Header';
import './App.css';
import Tasks from './Components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './Components/AddTask';
//import logo from './logo.svg';
// const name = 'Karl'
// const num = 1
// const isBool = true


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasksFromServer = async() => {
      const tasksFromServer = await fetchTaskFromServer();
      setTasks(tasksFromServer);
    }

    getTasksFromServer();
  },[]);

  const fetchTaskFromServer = async() => {
    const result = await fetch('http://localhost:5000/tasks');
    const data = await result.json();

    return data;
  }

  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = {id, ...task};
    console.log(newTask);
    setTasks([...tasks, newTask]);
  }

  const toggleAddTask = (state) => {
    setShowAddTask(state);
  }

  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title='Task Tracker' showAddTask={showAddTask} toggleAddTask={toggleAddTask} ></Header>
      {showAddTask && <AddTask addTask={addTask}></AddTask>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder}></Tasks> : 'No Tasks!'}
      {/* <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello World</h1>
      <h2>Hi {name}</h2>
      <h2>Number {num}</h2>      
      <h2>Condition {isBool ? 'Yes' : 'False' }</h2> */}
    </div>//Only 1 Parent, all elements must be inside the parent
  );
}

export default App;
