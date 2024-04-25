import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetcher } from '../util'
import WalletDetailsView from '../components/Wallet/WalletDeatilsView'

function WalletDetails() {
    const { id } = useParams()
    // const loacation = useLocation()

    const { data, isLoading, isFetching, error } = useQuery(
        ['search', id],
        () => fetcher(`/wallet/${id}`)
        // {
        //     enabled: id && !!loacation?.state?.data === false,
        // }
    )
    if (isLoading || isFetching) {
        return <p>Loading....</p>
    }
    return <WalletDetailsView data={data} />
}

export default WalletDetails
