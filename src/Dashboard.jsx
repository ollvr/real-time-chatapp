/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import {useAuth} from "./Auth"
import { auth,db } from './firebase'
import { collection,query,where,getDocs,doc,getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
function Dashboard() {
  const navigate = useNavigate()
  const {logout} = useAuth()
  const [search,setSearch] = useState("")
  const [users,setUsers] = useState([])
  const [currentUser,setCurrentUser] = useState(null)

  useEffect(()=>{
      const fetchCurrentUser = async()=>{
        try {
          const userDoc = await getDoc(doc(db,"users",auth.currentUser.uid))
          if(userDoc.exists()){
            setCurrentUser(userDoc.data())
          }
          else{
            console.log("No such Document !")
          }
        } catch (error) {
          console.error(error)
        }
      }
      fetchCurrentUser()
  },[])

  const handleSearch = async()=>{
    const q = query(collection(db,"users"),where("name","==",search))
    const querySnaphot = await getDocs(q)
    const usersList = querySnaphot.docs.map(doc => doc.data())
    setUsers(usersList)
  }
  return (
    <div className='container'>
      <div className='dashboard'>
         <div className='dashboard-header'>
            <h2>welcome {currentUser ? currentUser.name : "USER"}</h2>
            <button onClick={logout}>Logout</button>
         </div>

        <div className='dashboard-search'>
            <input 
            type='text'
            placeholder='search users'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>search</button>
        </div>

        <ul>
          {users.map(user =>(
            <li key={user.uid}>
              {user.name}
              <button onClick={()=> navigate(`/chat/${user.uid}`)}>send message</button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Dashboard