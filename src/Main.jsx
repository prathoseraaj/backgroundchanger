import {React, useState} from 'react'
import '/home/prathoseraaj-v/Documents/Backgroundchanger/cflipper/src/App.css'


const Main = () => {
    const [color,setColor] =useState('');
  return (
    <>
    <div className='container' style={{backgroundColor:color}}>
        {color}
    </div>
    <input type="text" placeholder='color' onChange={(e)=>setColor(e.target.value)} />
    </>
  )
}

export default Main