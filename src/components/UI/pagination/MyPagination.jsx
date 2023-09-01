import React from 'react'
import { usePagination } from '../../../hooks/usePagination'

const MyPagination = ({ totalPages, setPage, page }) => {
    const pagesArray = usePagination(totalPages)

    return (
        <div className="navigation__wrapper">
            {pagesArray.map((p) => (
                <span
                    key={p}
                    onClick={() => setPage(p)}
                    className={page === p ? 'page__current page' : 'page'}
                >
                    {p}
                </span>
            ))}
        </div>
    )
}

export default MyPagination
