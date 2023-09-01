import { AuthContext } from 'Context'
import { useContext } from 'react'

const { Outlet, Navigate } = require('react-router-dom')

export const PrivateWrapper = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    return isAuth ? <Outlet /> : <Navigate to="/login" />
}
