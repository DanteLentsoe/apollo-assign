import React from 'react';
import '../index.css';
import DarkMode from "../components/darkmode.js";

export default function Nav() {
    return (
        <div>
            <nav className="nav-style">
                <h1>Coin Ticker</h1>
                
                <DarkMode />
                
            </nav>
           
        </div>
    )
}
