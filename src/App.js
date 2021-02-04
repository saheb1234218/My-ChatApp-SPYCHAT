
import React from 'react';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx'
import {ChatEngine} from 'react-chat-engine';

import './App.css';





 const App=()=>{
if(!localStorage.getItem('username')) return <LoginForm/>
return (
<ChatEngine
    height="100vh"
    projectID="ff077999-d84a-4cbd-ac70-192916f029d5"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
/>

);



 }



 export default App;