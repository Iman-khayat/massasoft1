import './nav-item.css'
import logo from '../../components/assets/img/MASSASOFT.png'



const NavItem =(props) => {
return (
    <li className="nav-item">
{props.children}

    </li>
)
}
const NavItemDropDpwn = (props) => {
    return (
        <nav class="navbar " >
        <a class="navbar-brand" href="#" ><img src={logo} width={100} height={100}></img> </a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="massasoft.dk/aboutus">About us</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="massasoft.dk/services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="massasoft.dk/services/prices">Prices</a>
              <a class="dropdown-item" href="massasoft.dk/services/socialmedia">Social Media</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="massasoft.dk/services/ourservices">Our services</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="massasoft.dk/contactus">CONTACT US</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
           <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    
        
      </nav>
    )
    }

    export default NavItem
    export {NavItemDropDpwn}