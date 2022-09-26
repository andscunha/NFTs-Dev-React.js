import React from 'react'
import './App.css'
import Header from "./components/Header"
import BrandsIntegration from "./components/BrandsIntegration"
import Footer from "./components/Footer"
import InfoSection from "./components/InfoSection"
import TopFold from "./components/TopFold"
import TrendingNfts from "./components/TrendingNfts"

const App = () => {
  return (
    <div className='max-width'>
      <Header />
      <TopFold />
      <BrandsIntegration />
      <TrendingNfts />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default App