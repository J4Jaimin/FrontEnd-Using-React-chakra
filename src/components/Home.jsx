import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
}

const Home = () => {
    return (
        <Box>
            <MyCarousel />

            <Container minH={'100vh'} maxW={'container.xl'} p='16'>
                <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'}>Services</Heading>

                <Stack
                    h={'full'}
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'}>
                        Gaming is usually played individually or with multiple players locally or online on either a dedicated video game console, PC or mobile device. A video game console, such as an Xbox, PlayStation or Switch is commonly connected to a TV, and the player uses a controller to interact with the game.
                    </Text>
                </Stack>
            </Container>
        </Box >
    )
}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w={'full'} h={['100vh']}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} size={['1xl', '3xl']}>Watch The Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions} size={['1xl', '3xl']}>Future is Gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} size={['1xl', '3xl']}>Gaming on Console</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} size={['1xl', '3xl']}>Night Life is Cool</Heading>
        </Box>
    </Carousel>
)

export default Home