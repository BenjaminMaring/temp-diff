import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Main.css'

export default function Main() {
    return (
        <div className="main--wrapper">
            <div className="main--title-wrapper">
                <h1>Temp Diff</h1>
                <p>Compare two locations temperatures</p>
            </div>
            <Link to="/temp">Get Started</Link>
        </div>
    )
}