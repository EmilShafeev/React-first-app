import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { getAppRouter } from 'utils/router'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={getAppRouter()} />)
