import React from 'react'
import menu from './../assets/menu.png'
import logo from './../assets/logo.png'
import search from './../assets/search.png'
import upload from './../assets/upload.png'
import more from './../assets/more.png'
import notification from './../assets/notification.png'
import profile from './../assets/jack.png'
import Sidebar from './sidebar'

const Navbar = ({currStatus,setcurrStatus}) => {
  const openBar=()=>{
      setcurrStatus(!currStatus);
}
  return (
      <nav>
       <div className='flex justify-between mx-2 my-2'>
        <div className='flex gap-4'>
        <div className='size-6'><img src={menu} onClick={openBar} className='mt-4' alt="" /></div>
        <div><img src={logo} className='size-auto ' alt="" /></div>
        </div>
        <div className='flex'>
        <div><input type="text"  placeholder='Search' className='bg-slate-100 text-center rounded-2xl rounded-r-none h-8 w-auto ' /></div>
        <div className='size-8 bg-slate-100 rounded-2xl rounded-l-none' ><img src={search} className='rounded-2xl size-6 mt-1.5 rounded-l-none   w-auto' alt="" /></div>
        </div>
        <div className='flex gap-4'>
            <div className='size-10'><img src={upload} alt="" /></div>
            <div className='size-10'><img src={more} alt="" /></div>
            <div className='size-10'><img src={notification} alt="" /></div>
            <div className='size-10'><img src={profile} className='rounded-2xl' alt="" /></div>
        </div>
       </div>
      </nav>
   
  )
}

export default Navbar
