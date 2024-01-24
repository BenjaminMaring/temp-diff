import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'

export default function Header() {
    return (
        <div className="header--wrapper">
            <div className="header--title header--box">
                <h1>Temp Diff</h1>
            </div>
            <div className="header--box header--links-wrapper">
                <Link to="/">Home</Link>
                <Link to="/recent">Recent</Link>
            </div>
        </div>
    )
}