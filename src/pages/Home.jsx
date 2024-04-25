import {
    Box,
    FormControl,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { fetcher } from '../util'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'
function Home() {
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    const { mutate, isLoading } = useMutation(({ url }) => fetcher(url))
    const handleSubmit = (e) => {
        e.preventDefault()
        mutate(
            {
                url: `/wallet/${searchQuery}`,
            },
            {
                onSuccess(data, variables, context) {
                    navigate(`/wallet/${data?.id}`, {
                        state: {
                            data: data,
                        },
                    })
                },
                onError(error, variables, context) {
                    toast.error(error.message)
                },
            }
        )
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                height: '100vh',
                padding: '10px',
            }}
        >
            <Box>
                <Typography
                    variant="h1"
                    mt={20}
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    Wallet APP
                </Typography>
                <Box>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth>
                            <TextField
                                disabled={isLoading}
                                type="text"
                                variant="outlined"
                                placeholder="Search wallet"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value)
                                }}
                                InputProps={{
                                    style: {
                                        borderRadius: '25px',
                                    },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>
                    </form>
                </Box>
            </Box>
        </div>
    )
}

export default Home
