import React from "react";
import Logo from './meme-profile.gif'
import './header.css'
export default function Header(){
    return(
        <nav className="nav">
          <img src={Logo} className="img"/>
        </nav>
    )
}