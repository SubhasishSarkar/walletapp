import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import WalletDetails from './pages/WalletDetails'
import TransactionDetails from './pages/TransactionDetails'
import Layout from './components/Layout'
import PageNotFound from './pages/PageNotFound'

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '*',
                element: <PageNotFound />,
            },
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'wallet/:id',
                element: <WalletDetails />,
            },
            {
                path: 'transaction/:id',
                element: <TransactionDetails />,
            },
        ],
    },
])

export default router
