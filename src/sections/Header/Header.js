import "./Header.css"
import logo from '../../components/assets/img/MASSASOFT.png'
  
 
const Header = () => {
  return (
    <nav class="navbar " >
    <a class="navbar-brand" href="#" ><img src={logo} width={100} height={100}></img> </a>
    <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">Services</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
    </div>
    
  </nav>

  )
}

export default Header
