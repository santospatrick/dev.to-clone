import { Button } from '@chakra-ui/button'
import { Container, Flex, Spacer, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import Link from 'next/link'
import { Avatar } from '@chakra-ui/avatar';

function NavBar() {
    const user = null;

    return (
        <Flex bgColor="white" h="80px" alignItems="center" boxShadow="base" mb={4}>
            <Container maxW="container.xl">
                <Flex alignItems="center">
                    <Link href="/">
                        <Button 
                            colorScheme="blackAlpha"
                            bgColor="blackAlpha.900"
                            px="6" 
                            h="55px" 
                            d="flex" 
                            alignItems="center" 
                            textColor="white" 
                            borderRadius={8}
                        >
                            DEV.TO CLONE
                        </Button>
                    </Link>
                    <Spacer />
                    {!user && (
                        <Link href="/login">
                            <Button colorScheme="blue">
                                Log in
                            </Button>
                        </Link>
                    )}
                    {user && (
                        <Stack spacing={4} direction="row" align="center">
                            <Button colorScheme="blue">
                                Write Posts
                            </Button>
                            <Avatar bgColor="gray.400" />
                        </Stack>
                    )}
                </Flex>
            </Container>
        </Flex>
    )
}

export default NavBar
