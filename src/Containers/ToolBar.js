import React from 'react'
import '../main.css'
import logotitle from '../assets/logotitle.png'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__logo">
                <img src={logotitle} alt="logotitle" className="logo-title" />
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li>
                        <a href="/">Products</a>
                    </li>
                    <li>
                        <a href="/">Users</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;