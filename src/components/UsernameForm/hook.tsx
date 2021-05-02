import { useEffect, useMemo, useState } from 'react';
import { Icon, InputRightElement } from '@chakra-ui/react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import Loader from '@/components/Loader';
import { firestore } from '@/lib/firebase';
import useDebounce from '@/lib/useDebounce';
import { useAuth } from '@/contexts/AuthContext';

export function useUsernameForm() {
    const { user } = useAuth();
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [isSubmitting, setisSubmitting] = useState(false)
    const debouncedInput = useDebounce(input, 500)

    const onSubmit = async event => {
        event.preventDefault()
        setisSubmitting(true);

        const userDoc = firestore.doc(`users/${user.uid}`)
        const usernameDoc = firestore.doc(`usernames/${input}`)

        const batch = firestore.batch()
        batch.set(userDoc, {
            username: input,
            photoURL: user.photoURL,
            displayName: user.displayName
        })
        batch.set(usernameDoc, { uid: user.uid })

        try {
            await batch.commit()
        } finally {
            setisSubmitting(false);
        }
    }

    const onChange = (event) => {
        if (input.length >= 3) {
            setLoading(true)
        }
        setInput(event.target.value.toLowerCase().trim())
    }

    const InputStatus = () => useMemo(() => {
        if (!input || input.length < 3) {
            return null
        }

        if (loading) {
            return <InputRightElement children={<Loader size="sm" thickness="2px" />} />
        }

        if (!isValid) {
            return <InputRightElement children={<Icon as={FaTimes} color="red.500" />} />
        }

        if (input && isValid) {
            return <InputRightElement children={<Icon as={FaCheck} color="green.500" />} />
        }
    }, [loading, isValid, input])

    useEffect(() => {
        async function checkUsername() {
            if (input.length < 3) {
                return
            }

            try {
                const ref = firestore.doc(`usernames/${input}`)
                const { exists } = await ref.get();
                setIsValid(!exists)
            } finally {
                setLoading(false);
            }
        }

        checkUsername();
    }, [debouncedInput])

    return {
        onSubmit,
        onChange,
        input,
        InputStatus,
        isValid,
        isSubmitting
    }
}
