import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Tasks = (props) => {
    return (
        <>
            {props.tasks.map((task) => (//key is needed
                <div className={`task ${task.reminder ? 'reminder': ''}`} key={task.id} onDoubleClick={() => props.onToggleReminder(task.id)}> 
                    <h3 >{task.text} <FaTimes style={iconStyle} onClick={() => props.onDelete(task.id)}></FaTimes></h3>
                    <p>{task.day}</p>
                </div>
            ))}
        </>
    )
}


const iconStyle = {
    cursor: 'pointer',
    color: 'red',
}

export default Tasks
