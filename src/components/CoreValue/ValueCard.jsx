import { Box, Typography } from '@mui/material'

import PropTypes from 'prop-types'

const ValueCard = ({ content }) => {
  return (
    <Box className='flex py-8 space-x-4'>
      <Box>
        <Box className='h-1 w-6 mt-3 my-auto bg-black'></Box>
      </Box>
      <Box className='flex-1'>
        <Typography variant='h5'>{content.title}</Typography>
        <Typography variant='body2' color='gray'>
          {content.description}
        </Typography>
      </Box>
    </Box>
  )
}

// PropTypes

ValueCard.propTypes = {
  content: PropTypes.object.isRequired,
}

export default ValueCard
