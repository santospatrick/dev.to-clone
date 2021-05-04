import Loader from "@/components/Loader";
import PostsFeed from "@/components/PostsFeed";
import UserLayout from "@/layouts/UserLayout"
import { firestore } from "@/lib/firebase";
import { Button } from "@chakra-ui/button";
import { Box, Container } from "@chakra-ui/layout"
import { useState } from "react";

const LIMIT = 2;

export async function getServerSideProps() {
  const postsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(LIMIT)

  const posts = (await postsQuery.get()).docs.map(doc => doc.data())


  return {
    props: {
      posts
    }
  }
}

function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false)

  const getMorePosts = async () => {
    setLoading(true)
    const last = posts[posts.length - 1];
    const cursor = last.createdAt;

    const query = firestore
      .collectionGroup('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .startAfter(cursor)
      .limit(LIMIT)

      const newPosts = (await query.get()).docs.map(doc => doc.data())
      
      setPosts(prevState => [...prevState, ...newPosts])
      setLoading(false)

      if (newPosts.length < LIMIT) {
        setPostsEnd(true);
      }
  }

  return (
    <Container maxW="container.xl">
      <PostsFeed posts={posts} />

      <Box mt={6}>
        {!loading && !postsEnd && <Button onClick={getMorePosts} colorScheme="blue">Load More</Button>}

        {loading && <Loader />}

        {postsEnd && 'You have reached the end!'}
      </Box>
    </Container>
  )
}

Home.Layout = UserLayout

export default Home