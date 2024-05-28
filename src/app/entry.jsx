import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './layouts/App.jsx'
import { GlobalMenu } from '@/widgets/GlobalMenu'
import '@/app/main.css'

const router = createBrowserRouter([
    {
        path: '/boord/',
        element: (
            <>
                <Outlet />
                <GlobalMenu />
            </>
        ),
        children: [
            {
                path: '/boord/',
                element: <App />,
            },
            {
                path: '/boord/*',
                element: (
                    <div className="flex flex-col items-baseline gap-4 p-8">
                        <h1 className="text-3xl text-neutral-900 font-bold relative before:absolute before:content-[''] before:left-[-1rem] before:top-[50%] before:translate-y-[-50%] before:w-1.5 before:h-[50%] before:rounded-full before:bg-red-400">
                            404 — Page not found.
                        </h1>
                        <p className="text-neutral-600 leading-6">
                            К сожалению, нам не удалось найти запрашиваемую страницу.
                        </p>
                        <Link to="/boord" className="rounded-lg text-neutral-100 bg-neutral-900 px-4 py-2">
                            Вернуться
                        </Link>
                    </div>
                ),
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
