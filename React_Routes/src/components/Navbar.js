import React from "react"
import {Link} from "react-router-dom"

const Navbar = props => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/happy">Happy</Link></li>
            <li><Link to="/guilty">Guilty</Link></li>
            <li><Link to="/sleepy">Sleepy</Link></li>
        </ul>
    )
}

export default Navbar