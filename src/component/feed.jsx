import React from 'react'
import thumbnail1 from '../assets/thumbnail1.png'
import thumbnail2 from '../assets/thumbnail2.png'
import thumbnail3 from '../assets/thumbnail3.png'
import thumbnail4 from '../assets/thumbnail4.png'
import thumbnail5 from '../assets/thumbnail5.png'
import thumbnail6 from '../assets/thumbnail6.png'
import thumbnail7 from '../assets/thumbnail7.png'
import thumbnail8 from '../assets/thumbnail8.png'
import Video from '../pages/Video/Video.jsx'
import { useNavigate } from 'react-router-dom';

const feed = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/video');
  };
    
  return (
    <div className='flex flex-wrap gap-4 ml-10 mt-8'>
      <div className='size-80' onClick={handleClick}>
        <img src={thumbnail1} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding, Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail2} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold' >Best Channel to learn coding, Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail3} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding,Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail4} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding,Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail5} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding,Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail6} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding,Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail7} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding,Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail8} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding,Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail1} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding,Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail2} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding,Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail3} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding,Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail4} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding,Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail5} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding,Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail6} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding,Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;<span>2 hours ago</span></p>
      </div>
      <div className='size-80'>
        <img src={thumbnail7} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding,Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div className='size-80'>
        <img src={thumbnail8} className='rounded-xl' alt="" />
        <h2 className='p-1 font-semibold'>Best Channel to learn coding, Dsa,Web-Devloping,corn</h2>
        <h3 className='ml-1 text-gray-800'>Xenum-Edu</h3>
        <p className='ml-1'>150M views &bull;2 hours ago</p>
      </div>
      <div>
        
      </div>
    </div>
  );

}
export default feed
