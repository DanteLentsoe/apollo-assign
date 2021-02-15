import React from 'react';
import "../index.css";
import {Route, Switch} from "react-router-dom";
import {Link} from "react-router-dom";
import Nav from "../components/Nav";

export default function Error() {
    return (
        <div>
              <Nav />
           <div className="coin-container">
           <div className="banner">
                  <p>404 Error, page not found</p>
                  <Link to= "/" className="btn-style error">
                      Return To Home
                  </Link>
              </div>
           </div>
              
        </div>
    )
}
