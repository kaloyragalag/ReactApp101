import React from 'react'
import PropTypes from 'prop-types'


const Button = (props) => {
    return (
        <button style={{backgroundColor:props.color}} className='btn' onClick={props.onClick}>{props.name}</button>
    )
}

//Set the datatype of the parameter
Button.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
