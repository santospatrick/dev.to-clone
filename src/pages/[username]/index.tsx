import PostsFeed from '@/components/PostsFeed';
import UserLayout from '@/layouts/UserLayout';
import { firestore, dataToJSON } from '@/lib/firebase';
import { Avatar } from '@chakra-ui/avatar';
import { Container, Text } from '@chakra-ui/layout';

export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
}

export async function getServerSideProps({ query }) {
    const { username } = query;

    const user = await getUserWithUsername(username);

    if (!user) {
        return {
            notFound: true
        }
    }

    const postsQuery = user.ref
        .collection('posts')
        .where('published', '==', true)
        .orderBy('createdAt', 'desc')
        .limit(5)

    const posts = (await postsQuery.get()).docs.map(doc => doc.data())
    
    return {
        props: {
            user: user.data(),
            posts
        }
    }
}

function Username({ user, posts }) {
    return (
        <Container pt={4} maxWidth="container.xl" centerContent>
            <Avatar size="2xl" src={user.photoURL} />
            <Text as="i" mt={2}>@{user.username}</Text>
            <Text fontSize="2xl" mt={6} mb={4} fontWeight="bold">{user.displayName}</Text>

            <PostsFeed posts={posts} />
        </Container>
    )
}

Username.Layout = UserLayout

export default Username
