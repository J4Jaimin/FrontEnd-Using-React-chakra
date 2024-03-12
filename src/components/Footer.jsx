import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack, VStack } from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
    return (
        <Box
            bgColor={'blackAlpha.900'}
            minH={'40'}
            p='16'
            color={'white'}
        >

            <Stack direction={['column', 'row']}>
                <VStack>
                    <Heading size='md' textTransform={'uppercase'}>
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

                <VStack>

                </VStack>
            </Stack>

        </Box>
    )
}

export default Footer