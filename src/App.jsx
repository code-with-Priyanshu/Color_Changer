import { useState } from 'react'

import './App.css'

function App() {
 
  const [color,setColor]=useState("white");
  return (
    <>
      <div className="body" style={{backgroundColor:color}}>
      <div className="navbar">
        <div className="brand">
          <h2>PDB</h2>
        </div>
        <div className="color_pick">
          <button className='red' onClick={()=>{setColor('red')}}>Red</button>
          <button className='blue' onClick={()=>{setColor('blue')}}>Blue</button>
          <button className='yellow' onClick={()=>{setColor('yellow')}}>Yellow</button>
          <button className='green' onClick={()=>{setColor('green')}} >Green</button>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
