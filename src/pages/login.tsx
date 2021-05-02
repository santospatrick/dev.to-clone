import React from 'react'
import { Container, Text } from '@chakra-ui/layout'
import UserLayout from '@/layouts/UserLayout'
import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { FaGoogle } from 'react-icons/fa'
import { auth, googleAuthProvider } from '@/lib/firebase'
import { useAuth } from '@/contexts/AuthContext'
import UsernameForm from '@/components/UsernameForm'

function Login() {
    const { user, username } = useAuth()

    async function signInWithGoogle() {
        await auth.signInWithPopup(googleAuthProvider)
    }

    if (user && !username) {
        return (
            <Container maxWidth="container.xl">
                <UsernameForm />
            </Container>
        )
    }

    if (user && username) {
        return (
            <Container maxWidth="container.xl">
                Logged in as: <Text d="inline-block" fontWeight="bold">{username}</Text>
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
