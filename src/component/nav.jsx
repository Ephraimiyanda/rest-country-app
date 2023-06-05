import Btn from './props/button'
import Logo from "../../images/logo.svg"
import hamburger from "../../images/icon-hamburger.svg"
import close from "../../images/icon-close.svg"
import "../../src/index.css"
import { useState } from 'react'
function Nav(){

const [nav, showNavbar]=useState(false)
    return(

<div className="navbar">
    <img className='logo1' src={Logo} alt="" />

<div>
<ul className={nav ? "display" : "link-container"}>
        <a className='nav-links' href="#">Home</a> 
        <a className='nav-links' href="#">About </a>
        <a className='nav-links' href="#">Contact</a>
        <a className='nav-links' href="#">Blog </a>
        <a className='nav-links' href="#"> Careers </a>
    </ul>
</div>
<img className='hamburger' onClick={()=>{
 showNavbar(!nav)
}} src={nav ? close:hamburger} alt="" />
<Btn class="request-btn no-display"/>
</div>
    )
}
export default Nav;