import React from 'react';
import videosa from '../../assets/video.mp4';
import thumbnail from '../../assets/thumbnail1.png';
import jack from '../../assets/jack.png';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
const Video = () => {
  return (<>
    <div className='p-8 ml-16'>
    <div className=" w-full sm-w-[200px] max-w-[900px] overflow-hidden rounded-xl">
      <video
        controls
        autoPlay
        muted
        poster={thumbnail}
        className="rounded-xl w-full h-auto block"
      >
        <source src={videosa} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div>
      <h1 className='mt-2 text-xl font-medium'>React Project For Beginners || Master React JS in One Video | Reacts Project For Resume </h1>
    </div>
    <div className='flex max-w-900px justify-between'>
      <div>
      <div className='flex gap-2'><img className='size-12 rounded-full' src={jack} alt="" />
            <div><h1>Xenum-Edu</h1>
            <p>169M <span className='text-red-600'>Subscribers</span></p>
            </div>
            <div className='flex gap-4 ml-4 md:gap-22 '> <button className= 'text-black bg-slate-100 rounded-2xl p-2'>Join</button>
            <button className='bg-slate-100 p-2 rounded-2xl bg-red-500 text-white'>Subscribe</button></div></div>
           </div>
         <div className='flex gap-5 '>
          <div> <img className='size-8' src={like} alt="" />2M</div>
         <div> <img className='size-8' src={dislike} alt="" />Dislike</div>
         <div>
          <img className='size-8' src={share} alt="" />Share
         </div>
         <div><img className='size-8' src={save} alt="" />Save</div>
      
          </div>  

      </div>
      
    </div>
    </>
  );
};

export default Video;
