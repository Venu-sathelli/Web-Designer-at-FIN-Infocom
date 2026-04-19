import { useEffect } from 'react'
import AOS from 'aos'
import { HeroSection } from './components/sections/HeroSection'
import { FeaturesSection } from './components/sections/FeaturesSection'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <main className="app">
      <HeroSection />
      <FeaturesSection />
    </main>
  )
}

export default App

