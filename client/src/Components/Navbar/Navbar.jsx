
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg';
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  const [menu,setmenu]=useState("home")
  return (
    <div  className='navbar'>
          <img src={logo} alt="" />
          <ul className=" nav-menu">
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={() => setmenu("home")}>Home</p>{menu === "home" ? <img src={underline} alt='' /> : <></>}</AnchorLink> </li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about' ><p onClick={() => setmenu("about")} >About Me</p>{menu === "about" ? <img src={underline} alt='' /> : <></>} </AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setmenu("services")}>Services</p>{menu === "services" ? <img src={underline} alt='' /> : <></>}</AnchorLink> </li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work' ><p onClick={() => setmenu("work")}>Portfolio</p>{menu === "work" ? <img src={underline} alt='' /> : <></>} </AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setmenu("contact")}>Contact</p>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</AnchorLink> </li>
          </ul>
      {/* <div className="nav-connect">Connect With Me</div> */}
      
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>

     

    </div>
  )
}

export default Navbar
