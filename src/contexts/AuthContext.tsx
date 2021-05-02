import { auth, firestore } from "@/lib/firebase";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth'

export const AuthContext = createContext({ user: null, username: null, loading: false });

type Props = {
    children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
    const [user, loading] = useAuthState(auth);
    const [username, setUsername] = useState(null)

    useEffect(() => {
        let unsubscribe;

        if (user) {
            const ref = firestore.collection('users').doc(user.uid)
            unsubscribe = ref.onSnapshot(doc => {
                setUsername(doc.data()?.username)
            });
        } else {
            setUsername(null)
        }

        return unsubscribe
    }, [user])
    
    return (
        <AuthContext.Provider value={{ user, username, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const props = useContext(AuthContext)
    return props
}