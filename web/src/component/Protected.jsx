import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Protected(props) {
    const { Component } = props
    const navigate = useNavigate();
    useEffect (() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/logIn')
        }
    })
    return (
        <div>
            <Component />
        </div>
    )
}
