import { Box } from '@mui/material'
import React, { useState } from 'react'
import WalletBasicDeatils from './WalletBasicDeatils'
import TransactionHistory from './TransactionHistory'
import TransactionModal from '../TransactionModal'

function WalletDetailsView({ data }) {
    const [open, setOpen] = useState(false)
    const [selectedTransaction, setSelectedTransaction] = useState('')
    const handleOpen = (id) => {
        setSelectedTransaction(id)
        setOpen(true)
    }
    const handleClose = () => setOpen(false)
    return (
        <Box p={2}>
            <TransactionModal
                open={open}
                handleClose={handleClose}
                tid={selectedTransaction}
            />
            <Box>
                <WalletBasicDeatils data={data} />

                <TransactionHistory data={data} handleOpen={handleOpen} />
            </Box>
        </Box>
    )
}

export default WalletDetailsView
