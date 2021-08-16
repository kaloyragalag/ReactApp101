import React from 'react'
import PropTypes from 'prop-types'


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

/* Other way to use parameters
const Header = ({title}) => {
    return (
        <div>
            <h1>Task Tracker {title}</h1>
        </div>
    )
}
*/

//If no parameters were passed, these are the default values
Header.defaultProps = {
    title: 'Task Tracker'
}

//Set the datatype of the parameter
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
