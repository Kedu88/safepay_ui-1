// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css'; // Import your CSS file for styling
import safelogo from '../images/safepaylogo.png';
import userprofile from '../images/user-profile.png';
import logout from '../images/logout.png';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        // Example API call to login
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.userId) {
                // Check the user role and redirect accordingly
                switch(data.userRole) {
                    case 'user':
                        navigate('/User'); // Redirect to user page
                        break;
                    case 'staff':
                        navigate('/Staff'); // Redirect to staff page
                        break;
                    case 'admin':
                        navigate('/Sysadmin'); // Redirect to admin page
                        break;
                    default:
                        setError('Invalid user role');
                        break;
                }
            } else {
                setError('Invalid email or password');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        });
    };

    const handleLogout = () => {
        // Add your logout logic here
        // Example: clear user session and redirect to login
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
                    {error && <p className="error-message">{error}</p>}
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
