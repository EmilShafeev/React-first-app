import React from 'react'
import cl from './MyLoader.module.css'

const MyLoader = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
            }}
        >
            <div className={cl.loader} />
        </div>
    )
}

export default MyLoader
