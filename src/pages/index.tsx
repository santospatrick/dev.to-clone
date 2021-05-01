import UserLayout from "@/layouts/UserLayout"
import { Container } from "@chakra-ui/layout"

function Home() {
  return (
    <Container maxW="container.xl">
      Home
    </Container>
  )
}

Home.Layout = UserLayout

export default Home