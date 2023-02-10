import './nav-item.css'


const NavItem =(props) => {
return (
    <li className="nav-item">
{props.children}

    </li>
)
}
const NavItemDropDpwn = (props) => {
    return (
        <li className="nav-item dropdown">
    {props.children}
    
        </li>
    )
    }

    export default NavItem
    export {NavItemDropDpwn}