import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper blue-grey darken-4">
                <div className="container">
                    <Link to="/" className="brand-logo">Batoka Stroe</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">Keranjang</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;