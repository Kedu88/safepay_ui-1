// Header.js
import React from 'react';
import '../../Login/Login.css';
import safelogo from '../../images/safepaylogo.png';
import userprofile from '../../images/user-profile.png';
import logout from '../../images/logout.png';
import { Link } from "react-router-dom";

const Header = ({ handleLogout, toggleDropdown, showDropdown }) => {
    return (
        <header className="header">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                  crossOrigin="anonymous"/>
            <div className="header-logo">
                <img src={safelogo} alt="Logo" className="logo"/>
            </div>
            <div className="header-user">
                <img src={userprofile} alt="User Profile" className="user-profile"/>
                <div className={`dropdown ${showDropdown ? 'show' : ''}`}>
                    <button className="btn btn-secondary dropdown-toggle" type="button" onClick={toggleDropdown}>
                        Settings
                    </button>
                    <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">A 2</a>
                        <a className="dropdown-item" href="#">A 3</a>
                    </div>
                </div>
                <Link to="/logout" onClick={handleLogout} className="logout-button">
                    <img src={logout} alt="Logout" className="user-profile"/>
                </Link>
            </div>
        </header>
    );
};

export default Header;
