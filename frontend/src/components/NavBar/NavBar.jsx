import React, { useContext, useState } from 'react'
import './NavBar.css'
import search_icon from '../../assets/search_icon.png';
import basket  from '../../assets/basket.png';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const NavBar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("Home");

    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
        <Link to={'/'}><img src={assets.logo} alt='' className='logo' /></Link>

        <ul className='navbar-menu'>
            <Link to={'/'} onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>

        </ul>
        <div className='navbar-right'>
            <img src={search_icon} alt='' className='search' />
            <div className='navbar-search-icon'>
               <Link to={'/cart'}> <img src={basket} alt='' className='basket'/></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
      
    </div>
  )
}

export default NavBar
