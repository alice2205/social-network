import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/State";

type ProfilePropsType = {
    postsData?: Array<PostType>,
    addPost: (postMessage: string | undefined) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} addPost={props.addPost}/>
        </div>
    )
}