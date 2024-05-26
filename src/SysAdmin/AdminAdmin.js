import React, { useState } from 'react';
import './Sysadmin.css'; // Import your CSS file for styling
import safelogo from '../images/safepaylogo.png';
import userprofile from '../images/user-profile.png';
import logout from '../images/logout.png';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";

const AdminRegister = () => {
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        // Add your registration logic here
    };

    const handleLogout = () => {
        // Add your logout logic here
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="register-container">
            {/* Header */}
            <Header
                handleLogout={handleLogout}
                toggleDropdown={toggleDropdown}
                showDropdown={showDropdown}
                logo={safelogo}
                userProfile={userprofile}
                logout={logout}
            />

            {/* Main Content */}
            <main className="main">
                <h2 className='header1'>Register Admin</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" style={{alignSelf:'center'}} className="register-button">
                        Register Admin
                    </button>
                </form>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AdminRegister;
