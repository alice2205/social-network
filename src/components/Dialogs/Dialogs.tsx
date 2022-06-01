import React from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../redux/State";

type StateType = {
    state: MessagesPageType
}

export const Dialogs: React.FC<StateType> = (props) => {
    let dialogsElements = props.state.dialogsData?.map(el => <DialogsItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElements = props.state.messagesData?.map(el => <Message key={el.id} message={el.message} />)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={'dialogs-items'}>
                {dialogsElements}
            </div>
            <div className={'messages'}>
                {messagesElements}
            </div>
            <div className={s.addPost}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
        </div>
    )
}