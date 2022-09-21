import "./messenger.css"
import React from "react"
import Message from "../message/Message"
import Conversation from "../conversations/Conversation"
import ChatOnline from "../chatOnline/ChatOnline"
// import ConversationItem from "../conversations/ConversationItem"


export default function Messenger() {

   return (
      <>
        <div className='messenger'>
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder='Search for other developers' className='chatMenuInput' />
                    <Conversation/>
                </div>

                

            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message/>
                        <Message own={true}/>
                        <Message/>
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chatMessageInput" placeholder="Write Something...">
                        </textarea>
                        <button className="chatSubmitButton">
                            Send
                        </button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline/>
                </div>
            </div>
        </div>
      </>
  )
}
