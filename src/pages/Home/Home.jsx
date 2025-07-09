import React from 'react'
import Sidebar from '../../component/sidebar'
import AltSidebar from '../../component/Altsidebar'
import Feed from '../../component/feed'
const Home = ({currStatus}) => {
  return (
   <>
   <div className='flex'>
  <div className="hidden md:block">
    <Sidebar currStatus={currStatus}/>
  </div>
  <div className="block md:hidden">
    <AltSidebar />
  </div>
  <Feed />
  </div>
</>

  )
}

export default Home
