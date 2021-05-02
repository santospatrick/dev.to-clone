import React from 'react'
import { Text } from '@chakra-ui/react'

function PostsFeed({ posts }) {
    if (!posts.length) {
        return <Text>No posts published yet.</Text>
    }

    return posts.map(post => (
        <Text fontSize="2xl">{post.title}</Text>
    ))
}

export default PostsFeed
