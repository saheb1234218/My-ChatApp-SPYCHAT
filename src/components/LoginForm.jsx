import { useState } from "react";

import axios from 'axios';
function LoginForm() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error,seterror]=useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authobject = { 'Project-ID': "ff077999-d84a-4cbd-ac70-192916f029d5", 'User-Name': username, 'User-Secret': password };
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authobject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();


        } catch (error) {
           seterror('oops,incorrect credentials');
        }

    };




    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>

                    <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} className="input" placeholder="enter your username..." required />
                    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="input" placeholder="enter your password..." required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
<h2 >{error}</h2>
                </form>
            </div>
        </div>



    );



}
export default LoginForm;