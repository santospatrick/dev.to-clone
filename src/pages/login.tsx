import React, { useContext } from 'react'
import { Container } from '@chakra-ui/layout'
import UserLayout from '@/layouts/UserLayout'
import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { FaGoogle } from 'react-icons/fa'
import { auth, googleAuthProvider } from '@/lib/firebase'
import { useAuth } from '@/contexts/AuthContext'

function Login() {
    const { user } = useAuth()

    async function signInWithGoogle() {
        await auth.signInWithPopup(googleAuthProvider)
    }

    if (user) {
        return (
            <Container maxWidth="container.xl">
                Logged in
            </Container>    
        )
    }

    return (
        <Container maxWidth="container.xl">
            <Button onClick={signInWithGoogle} colorScheme="red" leftIcon={<Icon as={FaGoogle} />}>Sign in with Google</Button>
        </Container>
    )
}

Login.Layout = UserLayout

export default Login
