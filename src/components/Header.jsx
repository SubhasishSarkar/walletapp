import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import AdbIcon from '@mui/icons-material/Adb'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Switch, Tooltip } from '@mui/material'
import { changeMode } from '../store/modeSlice'

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

function Header() {
    const dispatch = useDispatch()
    const mode = useSelector((state) => state.mode.value)
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Tooltip
                            title={
                                mode === 'light'
                                    ? 'Switch to dark mode'
                                    : 'Switch to light mode'
                            }
                        >
                            <IconButton onClick={() => dispatch(changeMode())}>
                                {mode === 'light' ? (
                                    <DarkModeOutlinedIcon
                                        sx={{
                                            color: 'black',
                                        }}
                                    />
                                ) : (
                                    <LightModeOutlinedIcon />
                                )}
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
