import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box
            bgColor={'blackAlpha.900'}
            minH={'40'}
            p='16'
            color={'white'}
        >

            <Stack direction={['column', 'row']}>
                <VStack w={'full'} alignItems={'stretch'}>
                    <Heading size='md' textTransform={'uppercase'} textAlign={['center', 'left']}>
                        Subscribe to get updates
                    </Heading>
                    <HStack borderBottom={'2px solid'} p={'1'}>
                        <Input placeholder='Enter Email Here..' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'} />
                        <Button
                            p={'0'}
                            colorScheme={'purple'}
                            variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend />
                        </Button>
                    </HStack>
                </VStack>

                <VStack w={'full'}
                    borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}
                >
                    <Heading textTransform={'uppercase'} textAlign={'center'} justifyContent={'center'}>
                        Game Playing
                    </Heading>
                    <Text>All rights reserved.</Text>
                </VStack>

                <VStack w={'full'}>
                    <Heading textTransform={'uppercase'} size={'md'}>
                        Social Media
                    </Heading>
                    <HStack w={'full'} justifyContent={'center'} marginTop={5}>
                        <Button right={7}>
                            <Link to='https://www.youtube.com'><FaYoutube /></Link>
                        </Button>
                        <Button>
                            <Link to='https://www.instagram.com'><FaInstagram /></Link>
                        </Button>
                        <Button left={7}>
                            <Link to='https://www.github.com/J4Jaimin'><FaGithub /></Link>
                        </Button>
                    </HStack>
                </VStack>
            </Stack>

        </Box>
    )
}

export default Footer