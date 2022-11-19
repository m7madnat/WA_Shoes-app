import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='navbar'>            
          <h1 className='headName'>Shoes store</h1>
          <div className='navbarLink'>    
            <Link to='/'>
                Home
            </Link>
            <Link to='/products'>
                Products
            </Link>
            </div>
        </div>
      );
};

export default Navbar;