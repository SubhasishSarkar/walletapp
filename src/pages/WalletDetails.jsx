import React from 'react'
import { useParams } from 'react-router-dom'
import { fetcher } from '../util'
import WalletDetailsView from '../components/Wallet/WalletDeatilsView'
import { useQuery } from '@tanstack/react-query'

function WalletDetails() {
    const { id } = useParams()

    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ['search', id],
        queryFn: () => fetcher(`/wallet/${id}`),
        enabled: id != '',
    })
    if (isLoading || isFetching) {
        return <p>Loading....</p>
    }
    return <WalletDetailsView data={data} />
}

export default WalletDetails
