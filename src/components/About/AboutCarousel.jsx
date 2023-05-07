import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import content from './content'
import SliderCard from './SliderCard'
import { Box, Button, Typography } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { forwardRef } from 'react'

const AboutCarousel = forwardRef(function AboutCarousel(props, ref) {
  return (
    <div {...props} ref={ref} className='relative px-8 lg:py-12'>
      <div className='md:hidden'>
        <Carousel
          className='pb-10'
          showThumbs={false}
          autoPlay
          statusFormatter={(current, total) => (
            <Box className='flex gap-x-1 items-center shadow-none'>
              <Typography variant='h4' className='text-black'>
                {current}
              </Typography>
              <Typography variant='h6' className='text-gray-200'>
                /
              </Typography>
              <Typography variant='h6' className='text-gray-200'>
                {total}
              </Typography>
            </Box>
          )}
          renderIndicator={() => {}}
          renderArrowNext={(onClickHandler, hasNext) => (
            <Button
              disabled={!hasNext}
              onClick={onClickHandler}
              className='absolute bottom-0 rounded-none right-0'
              variant='contained'
            >
              <ArrowForward />
            </Button>
          )}
          renderArrowPrev={(onClickHandler, hasPrev) => (
            <Button
              disabled={!hasPrev}
              className='absolute rounded-none bottom-0 right-16 z-10'
              onClick={onClickHandler}
              variant='contained'
            >
              <ArrowBack />
            </Button>
          )}
        >
          {content.map((content) => (
            <SliderCard key={content.id} content={content} />
          ))}
        </Carousel>
      </div>
      <div ref={ref} className='hidden md:grid grid-cols-3 divide-x space-x-2'>
        {content.map((content) => (
          <SliderCard key={content.id} content={content} />
        ))}
      </div>
    </div>
  )
})

export default AboutCarousel
