import Link from 'next/link'
import { Avatar, Button, Stack } from '@chakra-ui/react'
import { useAuth } from '@/contexts/AuthContext'
import { auth } from '@/lib/firebase'
import Loader from './Loader'

function UserInfo() {
    const { user, username, loading } = useAuth()

    if (loading) {
        return <Loader />
    }

    return (
        <>
            {!user && (
                <Link href="/login">
                    <Button colorScheme="blue">
                        Log in
                    </Button>
                </Link>
            )}
            {user && (
                <Stack spacing={4} direction="row" align="center">
                    <Button onClick={() => auth.signOut()} bg="gray.300">
                        Sign out
                    </Button>
                    <Button colorScheme="blue">
                        Write Posts
                    </Button>
                    <Link href={`/${username}`} passHref>
                        <a>
                            <Avatar src={user.photoURL} bgColor="gray.400" />
                        </a>
                    </Link>
                </Stack>
            )}
        </>
    )
}

export default UserInfo
