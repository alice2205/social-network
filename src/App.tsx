import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {PostType, RootState} from "./redux/State";

type RootStateType = {
    state: RootState
    addPost: (postMessage: string | undefined) => void
    postsData?: Array<PostType>
}

const App: React.FC<RootStateType> = (props) => {
  return (
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path={'/dialogs/*'} element={<Dialogs state={props.state.messagesPage}/>}/>
                      <Route path={'/profile/*'} element={<Profile postsData={props.state.profilePage.postsData} addPost={props.addPost}/>}/>
                  </Routes>
              </div>
          </div>
  );
}
export default App;
