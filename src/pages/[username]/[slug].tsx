import UserLayout from '@/layouts/UserLayout';
import { firestore } from '@/lib/firebase';
import { Box, Container, Stack, Text, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';
import React from 'react'
import { getUserWithUsername } from '.';

export async function getStaticProps({ params }) {
    const { username, slug } = params;
    const userDoc = await getUserWithUsername(username)

    if (!userDoc) {
        return {
            notFound: true
        }
    }

    const postRef = userDoc.ref.collection('posts').doc(slug)
    const post = (await postRef.get()).data()
    const path = postRef.path;

    return {
        props: {
            post,
            path
        },
        revalidate: 5000
    }
}

export async function getStaticPaths() {
    const snapshot = await firestore.collectionGroup('posts').limit(5).get();
    const paths = snapshot.docs.map(doc => {
        const { slug, username } = doc.data()
        return {
            params: { username, slug }
        }
    })
    return {
        paths,
        fallback: 'blocking'
    }
}

function PostDetails({ post }) {
    return (
        <Container maxWidth="container.xl">
            <Box 
                width="full" 
                p={8} 
                mb={4} 
                boxShadow="base" 
                background="white" 
                borderRadius={8}
            >
                <Stack>
                    <Text fontSize="2xl">{post.title}</Text>
                    <Box>Written by{' '}
                        <Link as={NextLink} href={`/${post.username}`} passHref>
                            <a>@{post.username}</a>
                        </Link>
                    </Box>
                </Stack>
            </Box>
        </Container>
    )
}

PostDetails.Layout = UserLayout

export default PostDetails
