import { Box, Typography } from '@mui/material'
import { content } from './content'
import ValueCard from './ValueCard'
import { forwardRef, useImperativeHandle, useRef } from 'react'

const CoreValue = forwardRef(function CoreValue(props, ref) {
  const coreValueRef = useRef(null)

// const printMultipliedNumber = (number, max_count) => {
//   let result = ""
//   for (let i = 0; i < max_count; i++) {
//       setInterval(() => {
//         result = result + number.toString() + " "
//       },
//       5000)
//   }

//   return result

// }
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      coreValueRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
  }))

  return (
    <div
      ref={coreValueRef}
      {...props}
      className='w-full h-full bg-[#F8F8F8] py-8 lg:py-16'
    >
      <Box className='px-12'>
        <Typography
          color='primary'
          className='text-center text-4xl font-bold mb-8 text'
          variant='h1'
        >
          Our Core Values
        </Typography>
        <Typography variant='body2' color='gray'>
          Ridiculus laoreet libero pretium et, sit vel elementum convallis
          fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
          etiam sit.
          <br />
          In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec
          amet enim.
        </Typography>
      </Box>

      <Box className='flex flex-col md:flex-row mt-6 px-12'>
        {content.map((content) => (
          <ValueCard key={content.id} content={content} />
        ))}
      </Box>
      <Box className='mt-8'>
        <div className='relative w-full h-[250px] lg:h-[400px] overflow-clip'>
          <img
            className='absolute top-0 -right-16 w-full lg:right-0 h-full object-cover lg:object-contain '
            src='/static/images/cvi.svg'
            alt='Core Value Illustration'
          />
        </div>
      </Box>
    </div>
  )
})

export default CoreValue
