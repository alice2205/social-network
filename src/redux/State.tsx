export type DialogsType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number,
    message: string | undefined
}

export type PostType = {
    id: number,
    post: string | undefined,
    likesCount: number
}

export type ProfilePageType = {
    postsData?: Array<PostType>
}

export type MessagesPageType = {
    messagesData?: Array<MessageType>,
    dialogsData?: Array<DialogsType>
}

export type RootState = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType
}

export let state: RootState = {
    profilePage: {
        postsData: [
            {id: 1, post: 'Hi! How are you?', likesCount: 12},
            {id: 2, post: 'I am fine?', likesCount: 1},
            {id: 3, post: 'JavaScript and React are my favorite language and library', likesCount: 126},
        ]
    },
    messagesPage: {
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Hiiitti'}
        ],
        dialogsData: [
            {id: 1, name: 'Leva'},
            {id: 2, name: 'Sergey'},
            {id: 3, name: 'Cat'}
        ]
    }
}

export let addPost = (postMessage?: string) => {
    debugger
    let newPost = {
        id: 5,
        post: postMessage,
        likesCount: 0
    }
    state.profilePage.postsData?.push(newPost)
}