import React, { useContext } from 'react';
import logo from '../../assets/logo-no-background.png'; // Importing the logo image
import toggle from '../../assets/switch.png'
import menu from '../../assets/menu.png'
import  user from '../../assets/user.png'
import search from '../../assets/search.png'
import cart from '../../assets/shopping-cart.png'
import './Navbar.css'
import myContext from '../../Context/MyContext';
import white_search from '../../assets/searc.png'



function Navbar() {
  const context = useContext(myContext);
  const {mode ,toggleMode} = context;
  return (
    <div className={`navbar ${mode}`}>
      <img src={logo} alt="logo" className='logo' /> {/* Using the imported logo */}
      <ul >
        <li>All Products</li>
        <li>Orders</li>
        <li>Admin</li>
        <li>Logout</li>
      </ul>
      
      <div className='SearchBox'>  
  <input type='text' placeholder='Search' className='SearchInput'   />
  <img src={mode === 'Light' ? search : white_search} alt="icon" className='SearchIcon' />
</div>

      <div className='Icons'> 
      <img onClick={toggleMode} src={toggle} alt="" className='Toggle' />
      <img src={user} alt="profile icon" className='Profile' />
      <img src={cart} alt="Cart" className='cart' />
      </div>
    </div>
  );
}

export default Navbar;
