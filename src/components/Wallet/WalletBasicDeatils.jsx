import {
    Box,
    Chip,
    Grid,
    IconButton,
    Paper,
    Tooltip,
    Typography,
} from '@mui/material'
import React from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { toast } from 'react-toastify'

const Item = ({ label, value }) => {
    const handleClick = () => {
        toast.success('Coppied to clipboard')
        navigator.clipboard.writeText(value)
    }

    return (
        <Paper
            elevation={3}
            sx={{
                padding: { xs: 2, md: 4 },
            }}
        >
            <Typography
                sx={{
                    color: 'primary.main',
                    fontWeight: 'bold',
                }}
            >
                {label}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Tooltip title={value}>
                    <Typography
                        sx={{
                            // color: 'primary.main',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                        }}
                    >
                        {value}
                    </Typography>
                </Tooltip>

                <Tooltip title="Click to copy">
                    <IconButton onClick={handleClick} color="primary">
                        <ContentCopyIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </Paper>
    )
}

function WalletBasicDeatils({ data }) {
    return (
        <>
            <Paper
                elevation={3}
                sx={{
                    color: 'white',
                    padding: { xs: 2, md: 4 },
                    //height: '200px',
                    background:
                        'linear-gradient(290deg, rgba(2,0,36,1) 0%, rgba(249,115,22,1) 100%)',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            minWidth: '50px',
                            marginRight: 1,
                        }}
                    >
                        My Wallet
                    </Typography>
                    <Tooltip title="Click to copy">
                        <Chip
                            color="default"
                            sx={{
                                color: 'white',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                            label={'ID : ' + data?.id}
                            onClick={() => {
                                toast.success('Coppied to clipboard')
                                navigator.clipboard.writeText(data?.id)
                            }}
                        />
                    </Tooltip>
                </Box>

                <Typography
                    variant="h4"
                    mt={4}
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    INR {data?.txHistory?.balanceSat}
                </Typography>
                <Typography
                    mb={4}
                    sx={{
                        color: '#d6dcdb',
                    }}
                >
                    Total balance
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography>
                            Transactions :{' '}
                            {('0' + data?.txHistory?.txCount ?? 0).slice(-2)}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Typography
                            mr={1}
                            sx={{
                                fontSize: 10,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            ENCODING
                        </Typography>
                        <Chip label={data?.encoding} color="secondary" />
                    </Box>
                </Box>
            </Paper>
            <Grid container spacing={2} mt={2}>
                <Grid item xs={12} md={6}>
                    <Item
                        label="Version"
                        value={data?.[data?.encoding]?.version}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item label="Hash" value={data?.[data?.encoding]?.hash} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item
                        label=" Script Pub Key"
                        value={data?.validateaddress?.scriptPubKey}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item
                        label="Script Hash"
                        value={data?.electrumScripthash}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default WalletBasicDeatils
