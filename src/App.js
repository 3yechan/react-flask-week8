import React, { useState } from 'react'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Dashboard from './views/Dashboard'
import Login from './views/Login'
import Create from './views/Create'
export default function App() {
    const [ user, setUser ] =useState({

    })
    return (
        <div>
            <Nav user={user} setUser={setUser}/>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/dashboard' element={<Dashboard user={user}/>} />
                <Route path='/login' element={<Login setUser={setUser}/>} />
                <Route path='/create' element={<Create user={user}/>} />
            </Routes>
        </div>
    )
}
