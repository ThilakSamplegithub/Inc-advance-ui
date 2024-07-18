import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./Styles/app.scss"
import Navbar from './Components/Navbar'
import FirstRectangle from './Components/FirstRectangle'
import SecondRectangle from './Components/SecondRectangle'
import ThirdRectangle from './Components/ThirdRectangle'
import FourthRectangle from './Components/FourthRectangle'
import FifthRectangle from './Components/FifthRectangle'
import SixthRectangle from './Components/SixthRectangle'
import SeventhRectangle from './Components/SeventhRectangle'
import EighthRectangle from './Components/EighthRectangle'
import NinthRectangle from './Components/NinthRectangle'

function App() {

  return (
    <div className='containers'>
       <Navbar />
      <FirstRectangle/>
      {/* <div style={{border:'1px solid red',color:"#ffffff"}}>dljpdjfpaojpos</div> */}
      <SecondRectangle/>
      <ThirdRectangle/>
      <FourthRectangle/>
      <FifthRectangle/>
      <SixthRectangle/>
      <SeventhRectangle/>
      <EighthRectangle/>
      <NinthRectangle/>
    </div>
  )
}

export default App
