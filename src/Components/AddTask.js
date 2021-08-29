import React from 'react'
import { useState } from 'react';

const AddTask = (props) => {
    //item used must be the same on the name on the array
    const [text, settext] = useState('');
    const [day, setday] = useState('');
    const [reminder, setreminder] = useState(false);

    const submitTask = (e) => {
        e.preventDefault();

        if(!text){
            alert('Please add Task');
            return;
        }

        props.addTask({text, day, reminder});

        settext('');
        setday('');
        setreminder(false);
    }

    return (
        <form className='add-form' onSubmit={submitTask}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e)=>settext(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input type='text' placeholder='Add Day' value={day} onChange={(e)=>setday(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} onChange={(e)=>setreminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask
