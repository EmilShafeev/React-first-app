import { AuthContext } from 'Context'
import NavBar from 'components/NavBar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import 'styles/app.css'

function App() {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <div>
                <NavBar />
                <div className="App">
                    <Outlet />
                </div>
            </div>
        </AuthContext.Provider>
    )
}

export default App
