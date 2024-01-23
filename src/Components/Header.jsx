import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'

export default function Header() {
    return (
        <div className="header--wrapper">
            <h1 className="header--title">Temp Diff</h1>
            <div className="header--links-wrapper">
                <Link to="/">Home</Link>
                <Link to="/recent">Recents</Link>
            </div>
        </div>
    )
}