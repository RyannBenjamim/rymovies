import { useState } from 'react'

export default async function useGetDataRequest(url) {
    const [value, setValue] = useState([])

    const response = await fetch(url)
    const data = await response.json()
    setValue(data.results)

    return value
} 