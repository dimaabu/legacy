import React, { useState} from 'react';
import { Link } from "react-router-dom";
import './A-Style.css';



function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <h3>FoodDose</h3>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/restaurants' className='nav-links' onClick={closeMobileMenu}>RESTURANTS</Link>
                        </li>
                        <li>
                            <Link
                                to='/user'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}>USER</Link>
                        </li>
                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}>SIGN OUT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar