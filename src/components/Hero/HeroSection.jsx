import { KeyboardDoubleArrowDown } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import PropTypes from 'prop-types'

const HeroSection = forwardRef(function HeroSection(props, ref) {
  const heroRef = useRef(null)
  const { aboutRef } = props

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      heroRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
  }))

  return (
    <div ref={heroRef} {...props} className='relative h-[70dvh] md:h-screen'>
      <div className='absolute top-0 left-0 bg-hero-bg w-full h-1/2  bg-no-repeat bg-cover bg-center lg:bg-cover lg:bg-center'></div>
      <div className='bg-hero-bottom-bg absolute left-0 bottom-0 px-12 w-full bg-cover sm:bg-cover bg-no-repeat h-3/4 md:pt-20 '>
        <Typography
          ref={ref}
          variant='h1'
          className='text-white text-4xl font-bold text-left pt-16'
        >
          Discover <br /> Your Wonder
        </Typography>
        <Typography
          variant='body1'
          className='text-white/75 mt-3 lg:max-w-screen-sm'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          excepturi quam culpa delectus facilis commodi repellendus facere unde.
          Id laudantium reprehenderit ad adipisci vitae sit provident placeat
          odio sint tempore! necessitatibus.
        </Typography>
      </div>
      <Box className='absolute z-10 flex items-center justify-center -bottom-6 w-full mx-auto'>
        <IconButton
          className='bg-white rounded-full shadow-lg '
          sx={{ width: '50px', height: '50px' }}
          onClick={() => {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <KeyboardDoubleArrowDown />
        </IconButton>
      </Box>
    </div>
  )
})

HeroSection.propTypes = {
  aboutRef: PropTypes.object,
}

export default HeroSection
