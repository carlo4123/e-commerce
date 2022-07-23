
import CartIcon from '../assets/cart.svg';
import { Nav, NavLink } from './styles/Nav.styles';


const Navbar = () => {
  return ( 
    <Nav>
      <div className='nav-container'>
        <div className='nav-menu'>
          <NavLink to="/">
          home
          </NavLink>
         
        <NavLink to="/about">
          about
          </NavLink>
         

         
        </div>

        <div className="nav-right-wrapper">
        <NavLink to="cart">
          <img src={CartIcon} alt="" />
          </NavLink>
        </div>
      </div>
    </Nav>
   );
}
 
export default Navbar;