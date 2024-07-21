import { useState } from 'react'
import { AboutUs } from '@/modules/AboutUs';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PlatformPartners } from './modules/PlatformPartners';
import { GamingModes } from './modules/GamingModes';
import { Nft } from './modules/Nft';
import { Banner } from './modules/Banner';
import { Rockets } from './modules/Rockets';
import { GameFiApp } from './modules/GameFiApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <AboutUs />
         */}
        
        <Rockets />
        <GameFiApp />
        <GamingModes />
        
        {/* <Nft /> */}
        {/* <PlatformPartners /> */}
        {/* <Banner /> */}
    </>
  )
}

export default App
