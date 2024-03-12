import React from 'react'
import { BiMenuAltLeft } from 'react-icons/bi';
import { Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack, HStack } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button colorScheme='purple'
                pos={'fixed'}
                top={'4'}
                left={'4'}
                p={'0'}
                h={'10'}
                w={'10'}
                borderRadius={'full'}
                onClick={onOpen}>
                <BiMenuAltLeft size={'20'} />
            </Button>

            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>VIDEO PLAY</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={'/'}>Home</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={'/videos'}>Videos</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={'/videos?category=free'}>Free Videos</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={'/upload'}>Upload Video</Link>
                            </Button>
                        </VStack>

                        <HStack pos={'absolute'} bottom={10} justifyContent={'space-evenly'} left={'0'} w={'full'}>
                            <Button onClick={onClose} colorScheme={'purple'}>
                                <Link to='/login'>LogIn</Link>
                            </Button>
                            <Button onClick={onClose} variant={'outline'} colorScheme={'purple'}>
                                <Link to='/signup'>SignUp</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header;