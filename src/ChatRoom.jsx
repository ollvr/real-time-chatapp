/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection , addDoc , query , orderBy , onSnapshot,doc,getDoc } from 'firebase/firestore'
import { auth,db } from './firebase'
import { useAuth } from './Auth'
function ChatRoom() {
  const {userId} = useParams()
  const [message,setMessage] = useState("")
  const [messages,setMessages] = useState([])
  const [currentUser,setCurrentUser] = useState(null)
  const [otherUser,setOtherUser] = useState(null)
  const [loading,setloading] = useState(true)
  useEffect(()=>{
    const fetchUserData = async()=>
      {
      const currentUserDoc = await getDoc(doc(db,"users",auth.currentUser.uid))
      if(currentUserDoc.exists()){
        setCurrentUser(currentUserDoc.data())
      }

      const otherUserDoc = await getDoc(doc(db,"users",userId))
      if(otherUserDoc.exists()){
        setOtherUser(otherUserDoc.data())
      }

      setloading(false)
    }

    fetchUserData()
    const chatId = [auth.currentUser.uid,userId].sort().join("_")
    const q = query(collection(db,`chats/${chatId}/messages`),orderBy("timestamp"))
    const unsubcribe = onSnapshot(q,(querSnaphot)=>{
      const msgs = []
      querSnaphot.forEach((doc)=>{
        msgs.push(doc.data())
      })

      setMessages(msgs)
    })

    return () => unsubcribe()
  },[userId])

  const handleSend = async()=>{
    if(message.trim() && currentUser && otherUser){
      const chatId = [auth.currentUser.uid,userId].sort().join("_")
      await addDoc(collection(db,`chats/${chatId}/messages`),{
        text:message,
        sender:auth.currentUser.uid,
        senderName:currentUser.name,
        timestamp:new Date()
      })
      setMessage("")
    }
  }

  if (loading){
    return <div> loading ......  </div>
  }
  return (
    <div className='container chat-room'>
      <div className='message-list'>
        {messages.map((msg,index) =>(
          <div key={index} className={`message ${msg.sender == auth.currentUser.uid ? 'me' : 'them'}`}>
            <strong>
              {msg.sender == auth.currentUser.uid ? "You :" : msg.senderName + " :"}
              {msg.text}
              </strong> 
          </div>
        ))}
      </div>
      <div className='chat-input'>
        <input 
        type='text'
        placeholder='type a message'
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
        />
        <button onClick={handleSend} disabled={loading}>send</button>
      </div>
    </div>
  )
}

export default ChatRoom