import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Tooltip,
    Typography,
} from '@mui/material'
import React from 'react'
import { toast } from 'react-toastify'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

function TransactionHistory({ data, handleOpen }) {
    return (
        <Paper elevation={3} sx={{ marginTop: 2, padding: { xs: 2, md: 4 } }}>
            <Typography
                sx={{
                    color: 'primary.main',
                    fontWeight: 'bold',
                }}
            >
                Transaction History
            </Typography>

            <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: 2 }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableBody>
                            {data?.txHistory?.txids?.map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row}
                                    >
                                        <TableCell>
                                            <Tooltip title={row}>
                                                <Typography
                                                    sx={{
                                                        // color: 'primary.main',
                                                        textOverflow:
                                                            'ellipsis',
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    {row}
                                                </Typography>
                                            </Tooltip>
                                        </TableCell>
                                        <TableCell>
                                            <Tooltip title={'Click to copy'}>
                                                <IconButton
                                                    onClick={() => {
                                                        toast.success(
                                                            'Coppied to clipboard'
                                                        )
                                                        navigator.clipboard.writeText(
                                                            row
                                                        )
                                                    }}
                                                    color="primary"
                                                >
                                                    <ContentCopyIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                        <TableCell>
                                            <Tooltip title={'Details'}>
                                                <IconButton
                                                    onClick={() => {
                                                        handleOpen(row)
                                                    }}
                                                    color="primary"
                                                >
                                                    <InfoOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Paper>
    )
}

export default TransactionHistory
