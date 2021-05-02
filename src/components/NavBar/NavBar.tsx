import Link from 'next/link'
import { Button } from '@chakra-ui/button'
import { Container, Flex, Spacer } from '@chakra-ui/layout'
import UserInfo from '@/components/UserInfo';

function NavBar() {
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
                    <UserInfo />
                </Flex>
            </Container>
        </Flex>
    )
}

export default NavBar
