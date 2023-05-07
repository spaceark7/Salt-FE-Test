import { Box } from '@mui/material'
import HeroSection from '../components/Hero/HeroSection'
import NavBar from '../components/Navigation/NavBar'
import AboutCarousel from '../components/About/AboutCarousel'
import CoreValue from '../components/CoreValue/CoreValue'
import Speciality from '../components/Speciality/Speciality'
import Footer from '../components/Footer./Footer'
import { useRef } from 'react'

const HomePage = () => {
  const mainRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const coreRef = useRef(null)
  return (
    <Box className='relative min-h-[100dvh]'>
      <NavBar home={mainRef} about={aboutRef} contact={contactRef} />
      <HeroSection ref={mainRef} aboutRef={aboutRef} />
      <AboutCarousel ref={aboutRef} />
      <CoreValue ref={coreRef} />
      <Speciality />
      <Footer
        ref={contactRef}
        mainRef={mainRef}
        aboutRef={aboutRef}
        coreRef={coreRef}
      />
    </Box>
  )
}

export default HomePage
