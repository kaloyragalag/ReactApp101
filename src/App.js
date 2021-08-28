import Header from './Components/Header';
import './App.css';
import Tasks from './Components/Tasks';
import { useState } from 'react';
//import logo from './logo.svg';
// const name = 'Karl'
// const num = 1
// const isBool = true


function App() {
  const [tasks, setTasks] = useState([
      {
        id:1,
        text: 'This is the 1st task',
        day: 'Today',
        reminder: true
      },{
        id:2,
        text: 'This is the 2nd task',
        day: 'Tomorrow',
        reminder: true
      },{
        id:3,
        text: 'This is the last task',
        day: 'Sunday',
        reminder: true
      },
    ]
  );

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id))
  }

  return (
    <div className="container">
      <Header title='Task Tracker'></Header>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}></Tasks> : 'No Tasks!'}
      {/* <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello World</h1>
      <h2>Hi {name}</h2>
      <h2>Number {num}</h2>      
      <h2>Condition {isBool ? 'Yes' : 'False' }</h2> */}
    </div>//Only 1 Parent, all elements must be inside the parent
  );
}

export default App;
