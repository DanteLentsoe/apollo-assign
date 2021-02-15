import React from 'react';
import "../components/darkMode.css";
import {GiMoon} from "react-icons/gi";

export default function DarkMode() {

    let clickedClass = "clicked";

    let body = document.body;

    let lightTheme = "light";

    let darkTheme = "dark";
    
    let theme;


    if (localStorage) {
        theme = localStorage.getItem("theme");
    }
 
    if (theme == lightTheme || theme == darkTheme){
      body.classList.add(theme);

    } else {
      body.classList.add(lightTheme)
    }


    const handleTheme = (event) => {
    if(theme == darkTheme){
        body.classList.replace(darkTheme, lightTheme);
        event.target.classList.remove(clickedClass);
        localStorage.setItem("theme", "light");
        theme =lightTheme;
    } else {
        body.classList.replace(lightTheme, darkTheme);
        event.target.classList.add(clickedClass);
        localStorage.setItem("theme", "dark");
        theme = darkTheme;
    }
    };

    return (
        <div>
  
  <a 
        className ={theme === "dark" ? clickedClass : "" }
        id="darkMode"
        onClick ={(event) => handleTheme(event)}
        > <GiMoon size="2rem" margin-right="10px" /></a>
        </div>
    )
}
