import React from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

function PostsFeed({ posts = [] }) {
    if (!posts.length) {
        return <Text>No posts published yet.</Text>
    }

    return (
        <Stack width="full" spacing={4}>
            {posts.map(post => (
                <Link key={post.title} href={`/${post.username}/${post.slug}`} passHref>
                    <Box 
                        as="a" 
                        width="full" 
                        p={8}
                        boxShadow="base" 
                        background="white" 
                        borderRadius={8}
                    >
                        <Text fontSize="2xl" color="black">{post.title}</Text>
                    </Box>
                </Link>
            ))}
        </Stack>
    )
}

export default PostsFeed
