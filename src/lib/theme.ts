import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      },
      body: {
        fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      },
      a: {
        color: "blue.500",
        textDecoration: "none"
      }
    },
  },
  colors: {
    brand: {
      500: "#323232"
    },
  },
})

export default theme