import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Footer from './Footer';
import About from './About';

import './AppTaskTracker.css';

import { useState, useEffect } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
//import logo from './logo.svg';
// const name = 'Karl'
// const num = 1
// const isBool = true


function AppTaskTracker() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasksFromServer = async() => {
      const tasksFromServer = await fetchTasksFromServer();
      setTasks(tasksFromServer);
    }

    getTasksFromServer();
  },[]);

  const fetchTasksFromServer = async() => {
    const result = await fetch('http://localhost:5000/tasks');
    const data = await result.json();

    return data;
  }

  const fetchTaskFromServer = async(id) => {
    const result = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await result.json();

    return data;
  }

  const addTask = async(task) => {
    /*
    const id = tasks.length + 1;
    const newTask = {id, ...task};
    console.log(newTask);*/
    const result = await fetch('http://localhost:5000/tasks/', 
    {
      method: 'POST'
      , headers:{
        'Content-type': 'application/json'
      }
      , body: JSON.stringify(task)
    });
    const data = await result.json();

    setTasks([...tasks, data]);    
  }

  const toggleAddTask = (state) => {
    setShowAddTask(state);
  }

  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async(id) => {
    const task = await fetchTaskFromServer(id);
    const updatedTask = {...task, reminder: !task.reminder};
    const result = await fetch(`http://localhost:5000/tasks/${id}`, 
    {
      method: 'PUT'
      , headers:{
        'Content-type': 'application/json'
      }
      , body: JSON.stringify(updatedTask)
    });
    const data = await result.json();

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header title='Task Tracker' showAddTask={showAddTask} toggleAddTask={toggleAddTask} />
        
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask addTask={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} /> : 'No Tasks!'}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <h2>Hi {name}</h2>
        <h2>Number {num}</h2>      
        <h2>Condition {isBool ? 'Yes' : 'False' }</h2> */}
      </div>
      {/* //Only 1 Parent, all elements must be inside the parent */}
    </BrowserRouter>
  );
}

export default AppTaskTracker;
