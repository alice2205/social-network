import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" className={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={s.active}>Messages</NavLink>
            </div>
        </nav>
    )
}