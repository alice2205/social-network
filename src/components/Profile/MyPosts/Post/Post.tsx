import s from "./Post.module.css";
import React from "react";

type PostType = {
    message?:string
    likesCount?: number
}
export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <div className={s.userMessage}>
                <img src={'http://hypeava.ru/uploads/posts/2019-08/1565965517_3.jpg'}/>
                <p>{props.message}</p>
            </div>

            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>

        </div>
    )
}
