import React from 'react';
import {NavLink, Redirect} from 'react-router-dom'
import Logo from './assets/images/logo-1.png';
import './index.css';

const Navbar = () =>{
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const logout = () =>{
        localStorage.removeItem('isLoggedIn');
    }
    return(
    <>
        <div className="nav_bg navbar_style">
            <div className="row">
              <div className="col-12 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <img src={Logo} alt="imagelogo" />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        { !isLoggedIn && (<>
                            <li className="nav-item">
                        <NavLink className="nav-link active" to="/sign">Sign in</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link active" to="/resister">Resister</NavLink>
                        </li></>)}
                        <li className="nav-item">
                        <NavLink className="nav-link active"  to="/cart">Cart</NavLink>
                        </li>
                        { isLoggedIn && (<li className="nav-item">
                        <NavLink className="nav-link active" onClick={logout} to="/sign">Logout</NavLink>
                        </li>
                        ) }
                       
                    </ul>    
                    </div>
                </nav>
            </div>
        </div>
    </div> 
</>

    );
}

export default Navbar;

