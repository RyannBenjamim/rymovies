import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home/Home.jsx'
import Movie from './components/pages/Movie/Movie.jsx'
import Search from './components/pages/Search/Search.jsx'
import Mylist from './components/pages/Mylist/Mylist.jsx'
import SearchInput from './components/pages/SearchInput/SearchInput.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/search/:name',
        element: <Search/>,
      },
      {
        path: 'mylist',
        element: <Mylist/>,
      },
      {
        path: 'input',
        element: <SearchInput/>
      },
      {
        path: '/movie/:id',
        element: <Movie/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
