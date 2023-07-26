import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar(){
    const [click,setClick]=useState(false)
    const [button, setButton]=useState(true)
    const handleClick =()=> setClick(!click)
    const closemobilemenu =()=> setClick(false)
    
    const showButton=()=>{
      if(window.innerWidth<=960){
        setButton(false);
      }else{
        setButton(true); 
      }
      }
    window.addEventListener('resize',showButton);
  return( 
     <>
     <nav className='navbar'>
        <div className='navbar-container'>
            <Link to ="/" className="navbar-logo">
        <i class="fa-brands fa-python"></i>TheBlack
        </Link>
        <div className="navbar-title">
          MAMBA
        </div>
        <div className='menu-icon'onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
         </div>
         <ul className={click? 'nav menu active':'nav-menu'}>
         <li classname='nav-item'>
            <Link to='/Home' className='nav-links'onClick={closemobilemenu}>
                Home
            </Link>
         </li>
         <li classname='nav-item'>
            <Link to='/Aboutus' className='nav-links'onClick={closemobilemenu}>
                AboutUs
            </Link>
         </li>
         <li classname='nav-item'>
            <Link to='/Cart' className='nav-links'onClick={closemobilemenu}>
            <i class="fa-solid fa-cart-shopping"></i>  Cart
            </Link>
         </li>
         <li classname='nav-login'>
            <Link to='/sign-up' className='nav-links-mobile'onClick={closemobilemenu}>
                LOGIN/SIGNUP
            </Link>
            </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' >LOGIN/SIGN UP</Button>}
         </div>
     </nav>
    </>
  )
}
export default Navbar