import React from 'react'
import menu from './../assets/menu.png'
import logo from './../assets/logo.png'
import search from './../assets/search.png'
import upload from './../assets/upload.png'
import more from './../assets/more.png'
import notification from './../assets/notification.png'
import profile from './../assets/jack.png'
const Navbar = () => {
  return (
      <nav>
       <div className='flex justify-between mx-2 my-4'>
        <div className='flex gap-4'>
        <div className='size-6'><img src={menu} alt="" /></div>
        <div className='size-44'><img src={logo} alt="" /></div>
        </div>
        <div className='flex'>
        <div><input type="text" size={30} placeholder='Search' className='bg-slate-200 text-center rounded-2xl rounded-r-none h-8 w-96 border border-slate-300' /></div>
        <div ><img src={search} className='rounded-2xl bg-slate-200 size-8 rounded-l-none border border-slate-300 w-auto' alt="" /></div>
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
