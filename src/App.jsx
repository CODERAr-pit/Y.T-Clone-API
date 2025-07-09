import './App.css'
import Navbar from './component/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'
import { useState } from 'react'
function App() {
   const [currStatus, setcurrStatus] = useState(true);
  return (
    <>
      <Navbar currStatus={currStatus} setcurrStatus={setcurrStatus} />
      { <Routes>
        <Route path='/' element={<Home currStatus={currStatus} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes> }
    </>
  )
}

export default App
