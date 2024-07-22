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
import { Header } from './modules/layouts/Header';
import { Footer } from './modules/layouts/Footer';
import { StarLayer } from './modules/StarLayer';
import { RunString } from './components/RunString';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
      <div>
          <StarLayer />
      </div>
      <RunString />
    <Header />
        <Rockets />
        <GameFiApp />
        <Nft />
        <GamingModes />
        
        
        <PlatformPartners />
        <Banner />
        <AboutUs />
        <Footer />
    </>
  )
}

export default App
