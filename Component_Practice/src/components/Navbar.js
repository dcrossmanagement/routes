import React from "react"

const Navbar = props => {
    return(
        <div id="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#main">Main</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#sociallinks">SocialLinks</a></li>
                <li><a href="#footer">Footer</a></li>
            </ul>
        </div>
    )
}

export default Navbar