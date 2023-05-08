import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import PropTypes from 'prop-types'
const options = [
  {
    value: 'tech',
    label: 'Technology Department',
  },
  {
    value: 'design',
    label: 'Design Department',
  },
  {
    value: 'marketing',
    label: 'Marketing Department',
  },
]

const Footer = forwardRef(function Footer(props, ref) {
  const [opts, setOpts] = useState(options[0].value)
  const { aboutRef, coreRef, mainRef } = props
  const handleOptionChange = (event) => {
    setOpts(event.target.value)
  }

  const footerRef = useRef(null)

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      footerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
  }))

  return (
    <div
      ref={footerRef}
      {...props}
      className=' h-full min-h-screen bg-footer bg-cover bg-no-repeat p-12 '
    >
      <Box className='md:max-w-screen-md mx-auto'>
        <Box>
          <img src='/static/images/Footer-Logo.png' alt='mui logo' />
        </Box>

        <Box className='flex flex-col'>
          <Box className='bg-white px-4 py-8 mt-8'>
            <FormControl fullWidth>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={opts}
                onChange={handleOptionChange}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box className='max-w-xs mt-8'>
              <Typography variant='body1' color='primary'>
                Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung,
                Jawa Barat
              </Typography>
            </Box>
          </Box>

          <Box className='py-8 '>
            <Button
              onClick={() => {
                aboutRef.current.scrollIntoView({ behavior: 'smooth' })
              }}
              variant='text'
              className='block text-white'
            >
              Who We Are
            </Button>
            <Button
              onClick={() => {
                coreRef.current.scrollIntoView({ behavior: 'smooth' })
              }}
              variant='text'
              className='block text-white'
            >
              Our Values
            </Button>
            <Button
              onClick={() => {
                mainRef.current.scrollIntoView({ behavior: 'smooth' })
              }}
              variant='text'
              className='block text-white'
            >
              The Perks
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
})

Footer.propTypes = {
  aboutRef: PropTypes.object,
  coreRef: PropTypes.object,
  mainRef: PropTypes.object,
}
export default Footer
