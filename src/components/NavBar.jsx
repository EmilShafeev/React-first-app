import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/about">О странице</Link>
                <Link to="/posts">ПОСТЫ</Link>
            </div>
        </div>
    )
}

export default NavBar
