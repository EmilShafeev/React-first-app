import React from 'react'
import classes from './MyInput.module.css'

const MyInput = ({ children, ...props }) => {
    return (
        <input className={classes.myInput} {...props}>
            {children}
        </input>
    )
}

export default MyInput
