import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
    
    const route = createBrowserRouter([
        {path: '/', element:<HomePage/>},
        {path: '/login', element:<LoginPage/> },
        {path: '/signup', element:<SignUpPage/>}
    ]);


export default route; 