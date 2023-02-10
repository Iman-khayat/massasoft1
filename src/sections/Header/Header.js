import React from 'react'
import "./Header.css"
import logo from '../../components/assets/img/MASSASOFT.png'
import Hero from '../Hero/Hero'
import NavItem , {NavItemDropDpwn} from '../../components/nav-item/nav-item'  

 
const Header = () => {
  return (
    <nav class="navbar " >
    <a class="navbar-brand" href="#" ><img src={logo} width={100} height={100}></img> </a>
     
    
  </nav>

  )
}

export default Header
