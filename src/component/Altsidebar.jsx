import React from 'react'
import home from '../assets/home.png'
import game from '../assets/game_icon.png'
import automobiles from '../assets/automobiles.png'
import sports from '../assets/sports.png'
import entertainment from '../assets/entertainment.png'
import tech from '../assets/tech.png'
import music from '../assets/music.png'
import blogs from '../assets/blogs.png'
import news from '../assets/news.png'
import jack from '../assets/jack.png'
import simon from '../assets/simon.png'
import tom from '../assets/tom.png'
import megan from '../assets/megan.png'
import cameron from '../assets/cameron.png'

const Altsidebar = () => {
  return (
    <>
      <div className='flex flex-col gap-4 mt-8 text-xs font-normal ml-2'>
            <div className=' gap-2'>
              <div><img src={home} alt="" /></div>
            </div>
            <div className=' gap-2 '>
              <div><img src={game} className='size-7' alt="" /></div>
              
            </div>
            <div className=' gap-2'>
              <div><img src={automobiles} className='size-7' alt="" /></div>
             
            </div>
            <div className=' gap-2'>
              <div><img src={sports} className='size-7' alt="" /></div>
              
            </div>
            <div className=' gap-2'>
              <div><img src={entertainment} className='size-7' alt="" /></div>
              
            </div>
            <div className=' gap-2'>
              <div><img src={tech} className='size-7' alt="" /></div>
              
            </div>
            <div className=' gap-2'>
              <div><img src={music} className='size-7' alt="" /></div>
              
            </div>
            <div className=' gap-2'>
              <div><img src={blogs} className='size-7' alt="" /></div>
              
            </div>
            <div className='gap-2'>
              <div><img src={news} className='size-7' alt="" /></div>
              
            </div>
          </div>
          <div className='border border-slate-200 mt-6 w-8 ml-2'></div>
          
          <div className='flex flex-col gap-4 mt-4 ml-2'>
            <div className='flex gap-2'>
              <div><img className='size-6 rounded-full' src={jack} alt="" /></div>
              
            </div>
            <div className='flex gap-2'>
              <div><img src={simon} className='size-6 rounded-full' alt="" /></div>
              
            </div>
            <div className='flex gap-2'>
              <div><img src={tom} className='size-6 rounded-full' alt="" /></div>
             
            </div>
            <div className='flex gap-2'>
              <div><img src={megan} className='size-6 rounded-full' alt="" /></div>
              
            </div>
            <div className='flex gap-2'>
              <div><img src={cameron} className='size-6 rounded-full' alt="" /></div>
            </div>
          </div>
    </>
  )
}

export default Altsidebar
