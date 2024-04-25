import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ToastContainer } from 'react-toastify'
import { CssBaseline, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { useEffect, useMemo } from 'react'
import 'react-toastify/dist/ReactToastify.css'

import { useDispatch, useSelector } from 'react-redux'
import { detectMode, setMode } from './store/modeSlice'

function App() {
    const dispatch = useDispatch()
    const mode = useSelector((state) => state.mode.value)

    useEffect(() => {
        dispatch(detectMode())
        const eventListener = window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                dispatch(setMode(event.matches ? 'dark' : 'light'))
            })
        return () => {
            removeEventListener('change', eventListener)
        }
    }, [])
    const theme = useMemo(() => {
        switch (mode) {
            case 'light':
                return createTheme({
                    palette: {
                        mode: mode,
                        primary: {
                            main: '#f97316',
                            hover: '#fa8839',
                            active: 'fa8f45',
                            subtle: '#fee3d0',
                            subtleHover: '#fdcead',
                            subtleActive: '#fdc7a2',
                            emphasis: '#95450d',
                            emphasisHover: '#70340a',
                            borderSubtle: '#fdc7a2',
                            borderRadius: '0.375rem',
                            borderWidth: '1px',
                        },
                        text: {
                            primary: '#000000',
                        },
                        secondary: {
                            main: '#fa934b',
                        },
                    },
                })
            case 'dark':
                return createTheme({
                    palette: {
                        mode: mode,
                        primary: {
                            main: '#fba468',
                            hover: '#fcb686',
                            active: 'fcbf95',
                            subtle: '#642e09',
                            subtleHover: '#70340a',
                            subtleActive: '#95450d',
                            emphasis: '#fcc096',
                            emphasisHover: '#fcb98b',
                            borderSubtle: '#95450d',
                        },
                        secondary: {
                            main: '#fdcead',
                        },
                        text: {},
                    },
                })

            default:
                return createTheme({
                    palette: {
                        mode: mode,
                        primary: {
                            main: '#f97316',
                            hover: '#fa8839',
                            active: 'fa8f45',
                            subtle: '#fee3d0',
                            subtleHover: '#fdcead',
                            subtleActive: '#fdc7a2',
                            emphasis: '#95450d',
                            emphasisHover: '#70340a',
                            borderSubtle: '#fdc7a2',
                            borderRadius: '0.375rem',
                            borderWidth: '1px',
                        },
                        text: {
                            primary: '#000000',
                        },
                    },
                })
        }
    }, [mode])
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <RouterProvider router={router} />

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    theme="colored"
                    style={{ width: '550px' }}
                />
            </ThemeProvider>
        </>
    )
}

export default App
