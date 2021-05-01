import { Spinner } from '@chakra-ui/react'

function Loader(props) {
    return (
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="brand.500"
            size="lg"
            {...props}
        />
    )
}

export default Loader
