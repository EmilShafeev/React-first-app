import { AuthContext } from 'Context'
import MyButton from 'components/UI/button/MyButton'
import MyInput from 'components/UI/input/MyInput'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [loginData, setLoginData] = useState({ login: '', password: '' })
    const [loginError, setLoginError] = useState(false)
    const navigate = useNavigate()

    const validLoginData = { login: '123', password: '123' }

    const { isAuth, setIsAuth } = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault()
        if (
            loginData.login === validLoginData.login &&
            loginData.password === validLoginData.password
        ) {
            setIsAuth(true)
            navigate('../posts')
        } else {
            setLoginError(true)
        }
    }

    return (
        <form
            onSubmit={login}
            style={{
                border: loginError ? '2px solid red' : '2px solid teal',
                padding: '15px',
            }}
        >
            <MyInput
                placeholder="Login"
                value={loginData.login}
                onChange={(e) =>
                    setLoginData({ ...loginData, login: e.target.value })
                }
            />
            <MyInput
                placeholder="Password"
                type="password"
                value={loginData.password}
                onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                }
            />
            <MyButton>LOGIN</MyButton>
        </form>
    )
}

export default Login
