import { Card, CardContent, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
const SliderCard = ({ content }) => {
  const theme = useTheme()
  return (
    <Card elevation={0}>
      <div className='py-16' key={content.id}>
        <CardContent className='text-start'>
          <Typography
            className='font-bold '
            variant='h4'
            color={theme.palette.primary.main || 'primary'}
          >
            {content.title}
          </Typography>
          <Typography className='my-2' variant='h6'>
            {content.subheading}
          </Typography>
          <Typography color='gray' variant='body2'>
            {content.description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}

SliderCard.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SliderCard
