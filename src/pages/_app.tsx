import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from '@/lib/theme'
import { AuthContext, AuthProvider } from "@/contexts/AuthContext"

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment

  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ChakraProvider>
  )
}
export default MyApp