import { Box, Card, CardContent, Typography } from '@mui/material'
import PropTypes from 'prop-types'
const SpecialityCard = ({ content }) => {
  return (
    <Box className='py-12 h-full px-2 mb-8 text-center'>
      <Card variant='outlined' elevation={0}>
        <CardContent>
          <Box className='relative w-full h-[150px]'>
            <img
              className='absolute left-0 w-full h-full'
              src={content.image}
              alt={content.title}
            />
          </Box>
          <Typography variant='h6' color='primary'>
            {content.title}
          </Typography>

          <Typography className='mt-16' variant='body2' color='gray'>
            {content.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

SpecialityCard.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SpecialityCard
