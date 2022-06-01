import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/State";

type MyPostsPropsType = {
    postsData?: Array<PostType>,
    addPost: (postMessage: string | undefined) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElement = props.postsData?.map(el => <Post message={el.post} likesCount={el.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        debugger
        let text = newPostElement.current?.value;
        props.addPost(text)
    }

    return (
        <div>
            My Pоsts
            <div className={s.addPost}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}