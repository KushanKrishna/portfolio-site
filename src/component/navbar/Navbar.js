import React from "react";
import "./navbar.css"
import {Link} from 'react-scroll'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'

const Navbar = ()=>{
    return(
        <nav className="navbar">
            <img src={logo} className="logo" alt="" />
            <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Skills</Link>
            <Link className="desktopMenuListItem">Resume</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact me</button>
        </nav>
    )

}
export default Navbar