import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Box>
                    <Outlet />
                </Box>
            </main>
        </>
    )
}

export default Layout
