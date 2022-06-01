import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../redux/State";

export const DialogsItem = (props: DialogsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={'dialog'}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}