import PostService from 'API/PostService'
import App from 'App'
import About from 'pages/About'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound'
import Post from 'pages/Post'
import Posts from 'pages/Posts'
import { createBrowserRouter } from 'react-router-dom'
import { PrivateWrapper } from 'router/PrivateWrapper'

export const getAppRouter = () =>
    createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: 'about',
                    element: <About />,
                },
                {
                    path: 'login',
                    element: <Login />,
                },
                {
                    element: <PrivateWrapper />,
                    path: '',
                    children: [
                        {
                            path: 'posts',
                            element: <Posts />,
                        },
                        {
                            path: 'posts/:id',
                            element: <Post />,
                            loader: async ({ params }) =>
                                (await PostService.getPost(params.id)).data,
                        },
                    ],
                },
            ],
            errorElement: <NotFound />,
        },
    ])
