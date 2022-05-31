import React from "react";
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav>
            <div className='item'>
                <a>Profile</a>
            </div>
            <div className='item'>
                <a>Messages</a>
            </div>
        </nav>
    )
}