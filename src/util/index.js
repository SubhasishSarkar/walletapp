import { toast } from 'react-toastify'

const apiURL = 'http://localhost:3000'
export const fetcher = async (url) => {
    if (!url) {
        toast.error('Something went wrong. Try again later.')
    }

    const res = await fetch(apiURL + url, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
    })

    if (!res.ok) {
        try {
            return Promise.reject(await res.json())
        } catch (error) {
            return Promise.reject({ message: res.statusText })
        }
    }
    return await res.json()
}
