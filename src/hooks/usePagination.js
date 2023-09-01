import { useMemo } from 'react'

export const usePagination = (totalPages) =>
    useMemo(() => {
        let arr = []
        for (let i = 1; i <= totalPages; i++) {
            arr.push(i)
        }
        return arr
    }, [totalPages])
