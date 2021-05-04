import React from 'react'
import { Box, Text } from '@chakra-ui/react'

function PostsFeed({ posts = [] }) {
    if (!posts.length) {
        return <Text>No posts published yet.</Text>
    }

    return <>
        {posts.map(post => (
            <Box key={post.title} p={8} mb={4} boxShadow="base" background="white" borderRadius={8}>
                <Text fontSize="2xl">{post.title}</Text>
            </Box>
        ))}
    </>
}

export default PostsFeed
