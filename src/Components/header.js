import { Link } from 'react-router-dom'
import '../Style/header.css'
import { AiOutlineSearch } from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {TiContacts} from 'react-icons/ti'


function header() {
  return (
   <div className='header'>
    <Link to='/' className='logo'><h2>Skeptas.id</h2></Link>
    <div className='search-bar-container'>
      <div className='search-input'>
        <input type='search' className='search-bar' id='search-bar' placeholder='Search'></input>
      </div>
      
      <div className='search-button-container'>
        <AiOutlineSearch className='search-button'/>
      </div>
      
    </div>
    
    <div className='menu' id='menu'>
        <Link to='/products' className='menu-text'>Products</Link>
        <Link to='/contact-us' className='menu-text'>Contact Us</Link>
       
    </div>

    
    <div className='mobile-menu-container'>

      <Link to='/'>
        <div className='mobile-menu'>
          <AiOutlineHome className='menu-icon'/>
          <p>Home</p>
        </div>
      </Link>
      

      <Link to='/products'>
        <div className='mobile-menu'>
          <AiOutlineShoppingCart className='menu-icon'/>
          <p>Products</p>
        </div>
      </Link>
      
      <Link to='/contact-us'>
        <div className='mobile-menu'>
          <TiContacts className='menu-icon'/>
          <p>Contact Us</p>
        </div>
      </Link>
      

      

    </div>
    
    

   </div>
  );
}



export default header
