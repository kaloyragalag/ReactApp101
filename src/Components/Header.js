import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'


const Header = (props) => {
    const location = useLocation();

    const onClick = () => {
        props.toggleAddTask(!props.showAddTask);
    }
    
    return (
        <header className='header'>
            <h1 style={headingStyle}>{props.title}</h1>
            {location.pathname === '/' && <Button color={props.showAddTask ? 'red' : 'green'} name={props.showAddTask ? 'Close' : 'Add Task'} onClick={onClick}></Button>}
            {/* <Button color='blue' name='Edit'></Button>
            <Button color='red' name='Delete'></Button> */}
        </header>
    )
}

/* Other way to use parameters and style
const Header = ({title}) => {
    return (
        <div>
            <h1 style={{backgroundColor: red}}>Task Tracker {title}</h1>
        </div>
    )
}
*/

//style sheets as a constant
const headingStyle = {
    color: 'black',
    // backgroundColor: 'gray'
}

//If no parameters were passed, these are the default values
Header.defaultProps = {
    title: 'Task Tracker'
}

//Set the datatype of the parameter
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
