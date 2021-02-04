import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'


const ChatFeed=(props)=>{


 const renderReadreceipts=(message,ismymessage)=>{
     chat.people.map((person,index)=>person.last_read ===message.id && (
         <div key={index}
         className="read-receipt"
         style={{
             float: ismymessage?'right':'left',
             backgroundImage: `url(${person?.person?.avatar})`
         }}
             />
     ))
 }   
   
const { chats,activeChat,userName,messages  }=props;
const chat=chats && chats[activeChat];
const rendermessages=()=>{
    const keys=Object.keys(messages);
   return keys.map((key,index)=>{
       const message=messages[key];
       const lastmessagekey=index===0?null: keys[index-1];
       const ismymessage= userName === message.sender.username;



       return (
        <div key={`msg_${index}`} style={{width: '100%'}}>
<div className="message-block">
    {
        ismymessage?<MyMessage message={message}/>:<TheirMessage message={message} lastMessage={messages[lastmessagekey]}/>
    }

</div>
<div className="read-reciepts" style={{marginRight: ismymessage? '18px': '0px', marginLeft: ismymessage?'0px': '68px'}}>
    
    {renderReadreceipts(message,ismymessage)}

</div>

        </div>
       );
   })
}

rendermessages();

if(!chat) return 'Loading.....';
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person)=>`${person.person.username}`)}
                </div>

            </div>
           {rendermessages()}
           <div style={{height: '100px'}}/>
           <div className="message-form-container">
               <MessageForm {...props} chatId={activeChat}/>

           </div>
        </div>
    )
}
export default ChatFeed;