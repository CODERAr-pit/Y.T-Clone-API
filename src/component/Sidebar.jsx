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

const Sidebar = () => {
  return (
    <>
    <div className='flex flex-col gap-4 mt-8'>
      <div className='flex gap-2'>
        <div><img src={home} alt="" /></div>
        <div>Home</div>
      </div>
      <div className='flex gap-2 '>
        <div><img src={game} className='size-7' alt="" /></div>
        <div>Gaming</div>
      </div>
      <div className='flex gap-2'>
        <div><img src={automobiles} className='size-7' alt="" /></div>
        <div>Automobiles</div>
      </div>
      <div className='flex gap-2'>
        <div><img src={sports} className='size-7' alt="" /></div>
        <div>Sports</div>
      </div>
      <div className='flex gap-2'>
        <div><img src={entertainment} className='size-7' alt="" /></div>
        <div>Entertainment</div>
      </div>
      <div className='flex gap-2'>
        <div><img src={tech} className='size-7' alt="" /></div>
        <div>Technology</div>
      </div>
      <div className='flex gap-2'>
        <div><img src={music} className='size-7' alt="" /></div>
        <div>Music</div>
      </div>
      <div className='flex gap-2'>
        <div><img src={blogs} className='size-7' alt="" /></div>
        <div>Blogs</div>
      </div>
      <div className='flex gap-2'>
        <div><img src={news} className='size-7' alt="" /></div>
        <div>News</div>
      </div>
    </div>
    <div className='border border-slate-200 mt-6 w-32'></div>
    <div className='mt-3 ml-1'>Subscribed</div>
    <div className='flex flex-col gap-4 mt-4'>
      <div className='flex gap-2'>
        <div><img className='size-6 rounded-full' src={jack} alt="" /></div>
        <div>PewDePie</div>
      </div>
      <div className='flex gap-2'>
        <div><img src={simon} className='size-6 rounded-full' alt="" /></div>
        <div>Dhruv Rathee</div>
      </div>
      <div className='flex gap-2'>
        <div><img src={tom} className='size-6 rounded-full' alt="" /></div>
        <div>Mohak Mangal</div>
      </div>
      <div className='flex gap-2'>
        <div><img src={megan} className='size-6 rounded-full' alt="" /></div>
        <div>Carryminati</div>
      </div>
      <div className='flex gap-2'>
        <div><img src={cameron} className='size-6 rounded-full' alt="" /></div>
        <div>RohitSharma</div>
      </div>
    </div>
    </>
  )
}

export default Sidebar
