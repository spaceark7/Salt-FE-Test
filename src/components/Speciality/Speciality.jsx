import { Box, Typography } from '@mui/material'
import SpecialityCarousel from './SpecialityCarousel'

const Speciality = () => {
  return (
    <div className='bg-primary p-8 py-16'>
      <Box className='bg-white p-6'>
        <Typography
          color='primary'
          className='font-bold uppercase'
          variant='h5'
        >
          OUR SPECIALITY
        </Typography>
        <Typography color='gray' className='mt-2' variant='body2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam.
        </Typography>
        <Box>
          <SpecialityCarousel />
        </Box>
      </Box>
    </div>
  )
}

export default Speciality
