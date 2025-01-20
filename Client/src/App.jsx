import { useState } from 'react'
import { Button } from './components/ui/Button'
import Chat from "./pages/chat/index"
import Auth from"./pages/auth/index"
import Profile from "./pages/profile/index"
import { BrowserRouter, Routes, Route, Navigate } from "react-router";


function App() {
  const [count, setCount] = useState(0)

  return (
 
    <BrowserRouter>
    <Routes>
      <Route path='/button' element={<Button/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='*' element={<Navigate to='/auth'/>}/>
      
    </Routes>
    </BrowserRouter>
 
  )
}

export default App
