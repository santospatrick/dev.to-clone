import React from 'react'
import NavBar from '@/components/NavBar'

type Props = {
    children: React.ReactNode
}

function UserLayout({ children }: Props) {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

export default UserLayout
