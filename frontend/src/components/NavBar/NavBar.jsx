import React, { useState } from 'react'
import './NavBar.css'
import search_icon from '../../assets/search_icon.png';
import basket  from '../../assets/basket.png';

const NavBar = () => {

    const [menu,setMenu] = useState("Home");
  return (
    <div className='navbar'>
        
        <ul className='navbar-menu'>
            <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</li>
            <li onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</li>

        </ul>
        <div className='navbar-right'>
            <img src={search_icon} alt='' className='search' />
            <div className='navbar-search-icon'>
                <img src={basket} alt='' className='basket'/>
                <div className='dot'></div>
            </div>
            <button>Sign in</button>
        </div>
      
    </div>
  )
}

export default NavBar
