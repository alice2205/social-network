import React from "react";

type MessagePropTypes = {
    message:string | undefined
}

export const Message = (props: MessagePropTypes) => {
    return (
        <div className={'message'}>{props.message}</div>
    )
}
