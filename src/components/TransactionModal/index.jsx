import { Box, Chip, Modal, Paper, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider'

import { useQuery } from 'react-query'
import { fetcher } from '../../util'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '96%',
    padding: { xs: 2, md: 4 },
}

const Item = ({ label, value }) => {
    return (
        <Box mt={2}>
            <Paper
                elevation={3}
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Typography
                    id="modal-modal-description"
                    sx={{
                        padding: 2,
                        flex: 0.1,

                        color: 'primary.main',
                        fontWeight: 'bold',
                    }}
                >
                    {label}
                </Typography>
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        backgroundColor: 'primary.main',
                        display: { xs: 'none', md: 'block' },
                    }}
                />
                <Divider
                    flexItem
                    sx={{
                        backgroundColor: 'primary.main',
                        display: { xs: 'block', md: 'none' },
                    }}
                />

                <Typography
                    id="modal-modal-description"
                    sx={{
                        padding: 2,
                        flex: 0.9,
                        wordBreak: 'break-word',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {value}
                </Typography>
            </Paper>
        </Box>
    )
}

function TransactionModal({ open, handleClose, tid }) {
    const { data, isLoading, isFetching, error } = useQuery(
        ['transaction', tid],
        () => fetcher(`/transactions/${tid}`),
        {
            enabled: tid != '',
        }
    )
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper sx={style}>
                    <Typography
                        id="modal-modal-description"
                        sx={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {data?.id}
                    </Typography>
                    <Typography
                        id="modal-modal-title"
                        sx={{
                            fontSize: 16,
                        }}
                    >
                        Transaction details
                    </Typography>

                    <Divider
                        sx={{
                            backgroundColor: 'primary.main',
                        }}
                    />
                    <Box>
                        <Item label="Hash" value={data?.hash} />
                        <Item
                            label="Input Address"
                            value={data?.vin[0]?.scriptSig?.address}
                        />
                        <Item
                            label="Output Address"
                            value={data?.vout[0]?.scriptPubKey?.address}
                        />
                    </Box>
                    <Box
                        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}
                        mt={2}
                    >
                        <Chip
                            label={
                                'Fee : ' +
                                data?.fee?.amount +
                                ' ' +
                                data?.fee?.unit
                            }
                            variant="outlined"
                            sx={{
                                borderColor: 'primary.main',
                            }}
                        />
                        <Chip
                            label={'Confirmations : ' + data?.confirmations}
                            variant="outlined"
                            sx={{
                                borderColor: 'primary.main',
                            }}
                        />
                        <Chip
                            label={'Version : ' + data?.version}
                            variant="outlined"
                            sx={{
                                borderColor: 'primary.main',
                            }}
                        />
                        <Chip
                            label={'Size : ' + data?.size}
                            variant="outlined"
                            sx={{
                                borderColor: 'primary.main',
                            }}
                        />
                    </Box>
                </Paper>
            </Modal>
        </div>
    )
}

export default TransactionModal
