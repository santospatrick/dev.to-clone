import React from 'react'
import { Container } from '@chakra-ui/layout'
import UserLayout from '@/layouts/UserLayout'

function Login() {
    return (
        <Container maxWidth="container.xl">
            Log in | Sign up
        </Container>
    )
}

Login.Layout = UserLayout

export default Login
