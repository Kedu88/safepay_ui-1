// Login.js
import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import safelogo from '../images/safepaylogo.png';
import userprofile from '../images/user-profile.png';
import logout from '../images/logout.png';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    const handleLogout = () => {
        // Add your logout logic here
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="login-container">
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
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
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
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Login;