import { Box, Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react'
import React from 'react'
import { useUsernameForm } from './hook'

function UsernameForm() {
    const { onSubmit, onChange, input, InputStatus, isValid, isSubmitting } = useUsernameForm()

    return (
        <Flex background="white" p={6} rounded={6} boxShadow="md" maxWidth="md" m="auto">
            <Box as="form" width="full" onSubmit={onSubmit}>
                <Text fontSize="xl" fontWeight="bold">Welcome new user!</Text>
                <Text fontSize="sm" mb={6}>Tell us your nickname</Text>
                <InputGroup>
                    <Input onChange={onChange} value={input} placeholder="Choose an username" />
                    <InputStatus />
                </InputGroup>
                <Button mt={3} size="sm" isLoading={isSubmitting} type="submit" colorScheme="blue" isFullWidth disabled={!input || !isValid || isSubmitting}>Choose</Button>
            </Box>
        </Flex>
    )
}

export default UsernameForm
