import Nav from '../components/Nav';
import CoinView from "../components/CoinView";
import "../index.css";
import { Link } from "react-router-dom";

import React from 'react'

export default function Home() {
    return (
        <div className="App">
         <Nav />
         <CoinView />
            
        </div>
    )
}
