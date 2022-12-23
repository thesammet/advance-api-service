import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth';
import Home from '../screens/Home';
import Login from '../screens/Login';

export default function Navigation() {
    const { token } = useContext(AuthContext);
    return (
        <>
            {token ? <Home /> : <Login />}
        </>
    )
}