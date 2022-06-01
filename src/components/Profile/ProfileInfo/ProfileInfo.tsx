import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img className={s.bg} src={'https://images.wallpaperscraft.ru/image/single/les_derevya_tuman_110131_1920x1080.jpg'}/>
            </div>
            <div> ava + description</div>
        </>

    )
}