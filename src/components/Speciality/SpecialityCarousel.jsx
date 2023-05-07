import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import { content } from './content'
import SpecialityCard from './SpecialityCard'

const SpecialityCarousel = () => {
  return (
    <>
      <Carousel
        className='md:hidden'
        showThumbs={false}
        autoPlay
        centerMode={true}
        statusFormatter={() => {
          ''
        }}
        renderIndicator={(onClickHandler, isSelected) => {
          if (isSelected)
            return (
              <li className='h-3 w-3 inline-block ring-2 mx-2 ring-indigo-900 rounded-full'></li>
            )

          return (
            <li
              onClick={onClickHandler}
              className='h-3 w-3 bg-blue-200 inline-block mx-2 rounded-full cursor-pointer'
            ></li>
          )
        }}
        renderArrowNext={(onClickHandler, hasNext) => (
          <Button
            disabled={!hasNext}
            onClick={onClickHandler}
            className='absolute bottom-0 rounded-none right-0 z-10'
            variant='text'
          >
            <ArrowForward />
          </Button>
        )}
        renderArrowPrev={(onClickHandler, hasPrev) => (
          <Button
            disabled={!hasPrev}
            className='absolute rounded-none bottom-0 left-0 z-10'
            onClick={onClickHandler}
            variant='text'
          >
            <ArrowBack />
          </Button>
        )}
      >
        {/* <SpecialityCard content={content[0]} /> */}
        {content.map((content) => (
          <SpecialityCard key={content.id} content={content} />
        ))}
      </Carousel>

      <Box className='hidden md:grid grid-cols-3 space-x-3 max-w-screen-lg mx-auto'>
        {content.map((content) => (
          <SpecialityCard key={content.id} content={content} />
        ))}
      </Box>
    </>
  )
}

export default SpecialityCarousel
